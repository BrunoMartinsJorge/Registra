import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  const isPrivateRoute =
    pathname.startsWith("/feed") ||
    pathname.startsWith("/perfil") ||
    pathname.startsWith("/explorar");

  const isAuthRoute =
    pathname.startsWith("/login") ||
    pathname.startsWith("/cadastro");

  if (isPrivateRoute && !token) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(
      new URL("/feed", request.url)
    );
  }

  return NextResponse.next();
}