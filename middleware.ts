import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { cookies } from "next/headers"

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("next-auth.session-token")
    ? request.cookies.get("next-auth.session-token")
    : false;

  if (cookie && request.nextUrl.pathname.startsWith("/user")) {
    return NextResponse.next();
  }
  if (cookie && request.nextUrl.pathname.startsWith("/author/login")) {
    return Response.redirect(new URL("/user/home", request.url));
  }

  if (!cookie && request.nextUrl.pathname.startsWith("/user/")) {
    return Response.redirect(new URL("/author/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
