'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { headers } from "next/headers"
import { isAdminEmail } from '@/app/auth/isAdminEmail';

function getOrigin(h: Headers) {
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  return `${proto}://${host}`;
}

export async function login(formData: FormData) {
  const supabase = await createClient()
  const email = (formData.get("email") as string | null)?.trim()
  
  if (!email) redirect("/admin/login")

  // check admin whitelist
  if (!isAdminEmail(email)) {
    redirect('/')
  }

  const h = await headers()
  const origin = getOrigin(h)

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: `${origin}/auth/callback?next=/admin/upload-gallery`,
    },
  });

  if (error) redirect("/admin/login?error=otp_failed")
  
  redirect("/admin/login?checkEmail=1")
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}
