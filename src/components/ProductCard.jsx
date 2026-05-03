import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;
  return (
    <div className="card bg-white shadow-xl hover:-translate-y-1 transition border border-gray-100 h-full">
      <figure className="h-52 relative">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-black">{product.name}</h3>
        <p className="text-gray-600">⭐ {product.rating || "5.0"}</p>
        <p className="text-xl font-bold text-orange-500">${product.price}</p>
        <div className="card-actions justify-end mt-4">
          <Link href={`/products/${product.id}`} className="btn btn-warning btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}