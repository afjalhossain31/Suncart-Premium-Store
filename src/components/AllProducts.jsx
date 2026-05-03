import React from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
export default function AllProducts() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-black">Explore All Items</h2>
        <button className="btn btn-ghost text-warning">View All →</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}