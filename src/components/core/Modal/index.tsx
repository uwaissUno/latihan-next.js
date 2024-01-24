"use client";
import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useRef } from "react";
export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef(null);
  const router = useRouter();
  const close: MouseEventHandler = (e) => {
    if (e.target === overlay.current) {
      router.back();
    }
  };
  return (
    <div
      ref={overlay}
      onClick={close}
      className="fixed z-10 top-0 bottom-0 right-0 left-0 bg-black/60 mx-auto"
    >
      <div className="w-1/2 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 p-6 bg-slate-700">
       {children}
      </div>
    </div>
  );
}
