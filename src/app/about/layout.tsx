import Link from "next/link";
import { Children } from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  // nama file layout dapat dipakai pada seluruh segmentation yang ada dalam folder
  // selalu beri children
  
  return (
    <>
      <div className="fixed top-14 right-0 h-screen w-60 bg-slate-700 text-white px-5 py-2">
        <ul className="flex flex-col gap-4">
          <li className="text-blue-300">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-blue-300">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="text-blue-300">
            <Link href={"/about/profile"}>Profile</Link>
          </li>
        </ul>
      </div>
      {children}
    </>
  );
};
export default AboutLayout;
