"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
// kita bisa mengetahui path kita sekarang dengan usePathname
// kita dapat menggunakan useRouter untuk mengarahkan kepada path yang kita inginkan

const Navbar = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  console.log(session);
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
          <div>
            
            <button
              className="bg-white px-5 py-2 font-semibold rounded-md"
              onClick={() => signIn()}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="flex items-center">
           
            <Image
              src={"/images/profile.png"}
              alt="profile"
              className="w-10 h-10 rounded-full mr-4"
              width={200}
              height={200}
            />
             <h4 className="font-bold text-white mr-4">
              {session?.user?.fullname}
            </h4>
            <button
              className="bg-white px-5 py-2 font-semibold rounded-md"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
