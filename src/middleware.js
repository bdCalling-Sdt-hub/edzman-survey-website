// import { NextResponse } from 'next/server';
// import { cookies } from 'next/headers';

// export async function middleware(request) {
//   const cookieStore = cookies();
//   const token = (await cookieStore.get('token')?.value) || '';
//   const protectedRoutes = ['/find-why', '/user-profile'];
//   if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/find-why', '/user-profile'],
// };
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value || '';
  const protectedRoutes = ['/find-why', '/user-profile'];
  const { pathname, search } = request.nextUrl;

  if (protectedRoutes.includes(pathname) && !token) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('callbackUrl', pathname + search);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/find-why', '/user-profile'],
};
