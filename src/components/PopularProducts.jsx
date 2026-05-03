import { getProducts } from "../lib/data";
import React from "react";
import { IoFlameSharp } from "react-icons/io5";
import ProductCard from "./ProductCard";
import "animate.css";

const PopularProducts = async () => {
  const products = await getProducts();
  const popularProducts = products
    .filter((product) => product.rating >= 4.6)
    .slice(0, 4);

  return (
    <section className="bg-orange-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="py-5">
          <div className="flex items-center justify-center">
            <div className="animate__animated animate__slideInUp flex mb-2 uppercase text-orange-600 font-bold w-fit px-2 py-1 border-2 border-orange-400 rounded-4xl text-sm ">
              <span>
                <IoFlameSharp size={22} />
              </span>
              Customer Favorites
            </div>
          </div>
          <h1 className="animate__animated animate__slideInUp text-center text-2xl md:text-5xl font-bold font-serif antialiased pb-4">
            Popular <span className="text-orange-600">Products</span>
          </h1>
        </div>
        <div className="animate__animated animate__slideInUp grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
