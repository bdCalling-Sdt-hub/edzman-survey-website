import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value || "";
  const protectedRoutes = ["/find-why", "/user-profile"];
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/find-why", "/user-profile"],
};
