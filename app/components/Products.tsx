import React from "react";
import { products } from "../data/products";
import Image from "next/image";

export default function Products() {
  return (
    <section className="mx-12 py-12 text-zinc-700">
      <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">
        Joby Essentials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col cursor-pointer">
            <div className="relative">
              <Image
                className="object-cover transition-transform duration-500 group-hover:scale-100"
                src={product.image}
                alt={product.name}
                width={600}
                height={200}
                priority={product.id <= 3}
              />
            </div>

            {/* Detalhes do Produto */}
            <div className="mt-4 flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-medium leading-tight max-w-[70%]">
                  {product.name}
                </h4>
                <p className="text-lg font-bold">{product.price}</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{product.color}</span>
                <span>•</span>
                <span className="uppercase">{product.sizes.join(", ")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
