import React from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
export default function PopularProducts() {
  const popular = products.slice(0, 3);
  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-black">Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popular.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}