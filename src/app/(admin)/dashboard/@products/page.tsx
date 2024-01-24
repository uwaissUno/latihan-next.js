"use client";

import { useState } from "react";
// untuk menggunakan parallel route, kita bisa beri @pada nama folder yang ingin di parallel kan
// parallel route memungkinkan kita untuk merender halaman lain secara bersamaan

export default function AdminProductsPage() {
  const [state, setState] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "/api/revalidate?tag=products&secret=12345",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setState("Revalidate failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setState("Revalidate succes");
      }

    }
  };

  return (
    <div className="w-1/2 h-96 bg-gray-300 rounded-xl flex items-center justify-center">
      <h1>{state}</h1>
      <button onClick={() => revalidate()} className="py-3 px-5 bg-black text-white m-3">Revalidate</button>
    </div>
  );
}
