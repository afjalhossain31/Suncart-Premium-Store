import { getProducts } from "../../lib/data";
import React from "react";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import ProductCard from "../../components/ProductCard";
import "animate.css";

export const metadata = {
  title: "All Products - Suncart",
  description: "Explore our full range of summer essentials.",
};

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="bg-orange-50 px-2 sm:px-4 lg:px-6">
      <div className="container mx-auto animate__animated animate__slideInUp py-12">
        <div className="flex justify-between items-center">
          <div className="mb-12 border-l-8 border-stone-900 pl-6">
            <h2 className="md:text-5xl text-2xl font-bold font-serif text-stone-900 tracking-tight">
              All <span className="text-orange-500">Products</span>
            </h2>
            <p className="text-gray-900/60 mt-2 font-medium">
              Explore our full range of summer essentials.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
