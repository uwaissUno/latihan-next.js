"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
 
  return (
    <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-xl">
      <h1>Dashboard</h1>
    </div>
  );
}
