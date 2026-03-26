"use client";
import React, { useState } from "react";
import { products } from "../data/products";
import Link from "next/link";
import Image from "next/image";
import Search from "./ui/buttons/Search";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="flex flex-col p-4  max-w-max ">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Search />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full  outline-none"
          />
          <button>
            
          </button>
        </div>

        {search &&
          filteredProducts.map((product) => (
            <div key={product.id}>
              <Link href={`product/${product.id}`}>
                {/* <Image src={product.image} alt={product.name} /> */}
                <p>{product.name}</p>
              </Link>
            </div>
          ))}

        <div className="flex gap-4">
          {products.slice(4, 7).map((product) => (
            <Link key={product.id} href={`product/${product.id}`}>
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={100}
                />
                <h4 className="text-sm text-zinc-700 max-w-sm">
                  {product.name}
                </h4>
                <p>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
