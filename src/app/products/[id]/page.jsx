import React from "react";
import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 text-black">
       <Link href="/products" className="text-warning mb-4 inline-block">← Back to Products</Link>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="relative h-96">
             <Image src={product.image} alt={product.name} fill className="object-cover rounded-lg" />
          </div>
          <div>
             <h1 className="text-3xl font-bold">{product.name}</h1>
             <p className="text-xl text-orange-500 font-bold mt-2">${product.price}</p>
             <p className="mt-4 text-gray-600">{product.description}</p>
             <div className="mt-6">
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Stock:</strong> {product.stock}</p>
             </div>
             <button className="btn btn-warning mt-8 w-full">Add to Cart</button>
          </div>
       </div>
    </div>
  );
}