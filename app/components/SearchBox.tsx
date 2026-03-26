"use client";
import React, { useState } from "react";
import { products } from "../data/products";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="absolute bg-white shadow-md p-4 w-80 rounded-md">
      {/* INPUT */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
      {/* Resultado */}
      { search  }

      {/* apenas lista 4 produtos*/}

      <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="p-2 hover:bg-zinc-100 cursor-pointer rounded"
            >
              <p className="text-sm">{product.name}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No results found</p>
        )}
      </div>
    </section>
  );
}
