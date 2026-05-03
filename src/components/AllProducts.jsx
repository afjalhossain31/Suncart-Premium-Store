import { getProducts } from "../lib/data";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

const AllProducts = async () => {
  const allProducts = await getProducts();

  if (!allProducts || allProducts.length === 0) {
    return (
      <div className="bg-orange-50 py-12 text-center text-gray-500">
        No luxury products found. Check back later!
      </div>
    );
  }

  return (
    <div className="bg-orange-50">
      <div className="container mx-auto px-4 py-12">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mx-auto py-10">
          <Link href={"/products"}>
            <button className="justify-center items-center gap-2 px-8 py-2.5 rounded-full border-2 border-orange-500 bg-orange-500 text-stone-50 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.4)] transition-all active:scale-95 cursor-pointer">
              View All Products
              <IoArrowForwardOutline size={18} className="inline-block ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
