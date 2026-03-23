import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Shop from "./components/Shop";

export default function page() {
  return (
    <section>
      <div>
        <Hero />
        <Products />
        <Shop />
      </div>
    </section>
  );
}
