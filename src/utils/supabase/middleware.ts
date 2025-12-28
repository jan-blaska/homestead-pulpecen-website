
import { isAdminEmail } from '@/app/auth/isAdminEmail'
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'


export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value)
          })

          response = NextResponse.next({ request })

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const pathname = request.nextUrl.pathname
  const isAdminRoute = pathname.startsWith('/admin')
  const isPublicAdminRoute =
    pathname === '/admin/login' || pathname.startsWith('/auth/callback')

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (isAdminRoute && !isPublicAdminRoute && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  if (isAdminRoute && !isPublicAdminRoute && user && !isAdminEmail(user.email)) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return response
}
