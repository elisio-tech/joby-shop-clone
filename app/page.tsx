import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function page() {
  return (
    <section>
      <div>
        <Hero />
        <Products />
      </div>
    </section>
  );
}
