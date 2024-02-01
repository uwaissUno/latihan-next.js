import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";
// kita dapat menggunakan middleware untuk me redirect ke halaman tertentu berdasarkan kondisi tertentu
// untuk membuat middleware, kita buat file bernama middleware di dalam src secara langsung
export  function mainMiddleware(request: NextRequest) {
    // penggunaannya adaah dengan export default function bernama middleware
  const res = NextResponse.next()
  return res
}
export default withAuth(mainMiddleware, ['/dashboard', '/profile', '/login', '/register']);
