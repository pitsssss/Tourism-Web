import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Add any middleware logic you need
  // For example, you could add authentication, redirects, etc.
  
  return NextResponse.next();
}

// Apply middleware to all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};