import React from "react";
import Hero from "@/app/components/Hero";
import Products from "@/app/components/Products";
import Shop from "@/app/components/Shop";

export default function page() {
  return (
    <main>
      <Hero />
      <Products />
      <Shop />
    </main>
  );
}
