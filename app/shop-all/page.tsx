import React from "react";
import { products } from "../data/products";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "../components/SearchBox";

export default function Page() {
  return (
    <div className="pt-32 mx-12 relative">
      <h1 className="text-6xl text-zinc-800 mb-8">Products</h1>
      <SearchBox />
      <div className="flex justify-between items-center mb-4">
        <span className="text-zinc-500">Products availably</span>
        <ul className="text-zinc-600 inline-flex gap-4">
          <li>{products.length} items</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <Link href={`product/${product.id}`} key={product.id}>
            <div className="group flex flex-col cursor-pointer">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
