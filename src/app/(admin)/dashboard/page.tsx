"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  console.log(session);
  console.log(status);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else {
      if (session !== undefined ) {
        if(session?.user.role !== "admin"){

          router.push("/");
        }else{

          router.push("/dashboard");
        }
      }
    }
  }, [status, router, session?.user.role]);
  return (
    <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-xl">
      <h1>Dashboard</h1>
    </div>
  );
}
