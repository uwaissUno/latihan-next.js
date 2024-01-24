"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// kita bisa mengetahui path kita sekarang dengan usePathname
// kita dapat menggunakan useRouter untuk mengarahkan kepada path yang kita inginkan

const Navbar = () => {
  const { status }: { status: string } = useSession();
  const pathname = usePathname();
  // console.log(pathname);
  const router = useRouter();
  // console.log(router)
  return (
    <nav className="flex bg-slate-800 py-2 px-5 items-center justify-between">
      <div className="flex">
        <h1 className="text-white ">Navbar</h1>
        <ul className="ml-6 flex gap-3">
          <li
            className={` ${pathname === "/" ? "text-blue-300" : "text-white"} `}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={` ${
              pathname === "/about" ? "text-blue-300" : "text-white"
            } `}
          >
            <Link href={"/about"}>About</Link>
          </li>
          <li
            className={` ${
              pathname === "/about/profile" ? "text-blue-300" : "text-white"
            } `}
          >
            <Link href={"/about/profile"}>Profile</Link>
          </li>
        </ul>
      </div>
      <div>
        {status === "unauthenticated" ? (
          <button
            className="bg-white px-5 py-2 font-semibold rounded-md"
            onClick={() => signIn()}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-white px-5 py-2 font-semibold rounded-md"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
