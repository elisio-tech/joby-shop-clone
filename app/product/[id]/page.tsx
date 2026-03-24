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
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-6xl font-bold text-zinc-200">404</span>
        <p>Product not found!</p>
      </div>
    );
  }

  return (
    <section className="mx-12 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="relative aspect-square bg-zinc-100 rounded-3xl overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <span className="text-2xl text-blue-600 mb-8">{product.price}</span>

        <div>
          <p className="font-bold mb-4">Size</p>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <p key={size}>{size}</p>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-8">
          <div className="flex items-center gap-2 border border-zinc-400 rounded-4xl px-2">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              disabled={qty === 1}
              className={`px-3 py-1 text-2xl cursor-pointer ${qty === 1 ? "text-zinc-400" : "text-zinc-600"}`}
            >
              -
            </button>

            <span className="min-w-5 text-center px-4">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 text-2xl cursor-pointer "
            >
              +
            </button>
          </div>

          <button className="w-full py-4 bg-blue-500 text-white rounded-full cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
