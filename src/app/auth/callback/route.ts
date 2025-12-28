import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  let next = url.searchParams.get("next") ?? "/admin/upload-gallery";

  if (!next.startsWith("/") || next.startsWith("//")) {
    next = "/admin/upload-gallery";
  }

  if (!code) {
    return NextResponse.redirect(new URL("/admin/login", url.origin));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(new URL("/admin/login?error=callback", url.origin));
  }

  return NextResponse.redirect(new URL(next, url.origin));
}
