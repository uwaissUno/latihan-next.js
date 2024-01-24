import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// kita dapat menggunakan middleware untuk me redirect ke halaman tertentu berdasarkan kondisi tertentu
// untuk membuat middleware, kita buat file bernama middleware di dalam src secara langsung
export default function middleware(request: NextRequest) {
    // penggunaannya adaah dengan export default function bernama middleware
  const login = true;
  if (!login) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
    // fungsi config & matcher adalah untuk meredirect ketika pernyataan salah dan memeilih url apa saja yang akan di redeirect
  matcher: ["/about/:path*", '/dashboard/:path*', '/product/:path*'],
};
