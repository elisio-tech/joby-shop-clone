import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col h-screen">
      <div className="flex grow items-center justify-center gap-16 px-12">
        <h1 className="text-8xl font-bold">Move fast.</h1>

        <Image
          className="rounded-4xl"
          src="/hero.avif"
          alt="Hero"
          width={400}
          height={100}
          priority
        />

        <h1 className="text-8xl font-bold">Look Bold.</h1>
      </div>

      <div className="w-full">
        <div className="bg-blue-500 py-12" />
        <div className="bg-orange-500 py-3" />
      </div>
    </section>
  );
}
