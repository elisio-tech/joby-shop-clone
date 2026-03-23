import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-12 gap-12 mb-20">
      <div className="lg:col-span-2 w-full">
        <Image
          src="/Frame_16.webp"
          alt="Joby Logo"
          width={1600}
          height={900}
          className="w-full h-auto rounded-3xl object-cover shadow-sm"
          priority
        />
      </div>

      <div className="flex flex-col items-start">
        <h1 className="text-4xl lg:text-6xl mb-8 font-bebas leading-none tracking-tighter">
          Elevate your <br /> everyday.
        </h1>

        <Link href="/shop-all" className="w-full lg:w-auto">
          <button className="w-full lg:w-auto py-5 px-12 text-xl font-medium text-white bg-blue-600 rounded-full cursor-pointer hover:bg-zinc-900 transition-all transform hover:scale-105 active:scale-95">
            Shop all
          </button>
        </Link>
      </div>
    </div>
  );
}
