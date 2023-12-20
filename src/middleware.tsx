import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isLoggedIn = true
const loggedOutRoutes = ['/auth/login', '/auth/register']

export function middleware(request: NextRequest) {
  if (!isLoggedIn && !loggedOutRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  } else if (
    (isLoggedIn && loggedOutRoutes.includes(request.nextUrl.pathname)) ||
    request.nextUrl.pathname === '/'
  ) {
    return NextResponse.redirect(new URL('/home', request.url))
  } else {
    return NextResponse.next()
  }
}

export const config = { matcher: ['/home'] }
