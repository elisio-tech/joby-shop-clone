"use client"; // <--- Adicione isso

import { Product, products } from "@/app/data/products";
import Image from "next/image";
import { useState, use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const { id } = use(params);
  const [qty, setQty] = useState(1);

  const product = products.find((p: Product) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen ">
        <span className="text-6xl font-bold text-zinc-200">404</span>
        <p>Product not found!</p>
      </div>
    );
  }

  return (
    <section className="mx-12">
      <div className="pt-18 flex justify-center gap-14 h-screen">
        <div className="bg-zinc-400 ">foto</div>
        <div className="max-w-max">
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <button>Add to card</button>
        </div>
      </div>
    </section>
  );
}
