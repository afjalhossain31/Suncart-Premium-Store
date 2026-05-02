import React from "react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <section className="max-w-6xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 text-black">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}