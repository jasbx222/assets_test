import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // إذا كانت الصفحة الرئيسية فقط
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

// تحديد أن هذا الميدل وير يشتغل فقط على الصفحة الرئيسية
export const config = {
  matcher: ["/"],
};
