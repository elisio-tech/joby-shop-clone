"use client";
import React, { useState } from "react";
import { products } from "../data/products";
import Link from "next/link";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="absolute bg-white shadow-md p-4 w-80 rounded-md">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />

      {search &&
        filteredProducts.map((product) => (
          <div key={product.id}>
            <Link href={`product/${product.id}`}>
              <p>{product.name}</p>
            </Link>
          </div>
        ))}

      <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
        {products.slice(0, 4).map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
