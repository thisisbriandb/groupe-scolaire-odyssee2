import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = request.nextUrl.pathname === '/admin/login';
  const token = request.cookies.get('admin-token');

  if (isAdminPage) {
    // Si on est sur la page login et qu'on est déjà connecté
    if (isLoginPage && token) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    // Si on n'est pas sur la page login et qu'on n'est pas connecté
    if (!isLoginPage && !token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 