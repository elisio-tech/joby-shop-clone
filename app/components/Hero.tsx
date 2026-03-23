import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[85vh] flex flex-col">
      {/* CONTEÚDO CENTRAL */}
      <div className="flex-1 flex items-center justify-center mx-12 gap-16 py-34 mb-1">
        <h1 className="text-8xl">Move fast.</h1>

        <Image
          className="rounded-4xl"
          src="/hero.avif"
          alt="Hero"
          width={400}
          height={100}
        />

        <h1 className="text-8xl">Look Bold.</h1>
      </div>

      {/* BARRAS NO FUNDO */}
      <div>
        <div className="bg-blue-500 py-6" />
        <div className="bg-orange-500 py-3" />
      </div>
    </section>
  );
}
