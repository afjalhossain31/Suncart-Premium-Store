import { getProducts } from "../lib/data";
import React from "react";
import Marquee from "react-fast-marquee";

const Brands = async () => {
  const products = await getProducts();

  return (
    <section className="bg-orange-50 py-10 overflow-hidden px-2 sm:px-4 lg:px-6">
      <div className="container mx-auto mb-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-0.5 w-10 bg-orange-500/30"></span>
            <span className="text-orange-500 text-xs font-black uppercase tracking-[0.4em]">
              Premium Offers
            </span>
            <span className="h-0.5 w-10 bg-orange-500/30"></span>
          </div>

          <h2 className="text-2xl md:text-5xl font-serif text-stone-900 text-center tracking-tight antialiased">
            Brand <span className="text-orange-500">Deals</span>
          </h2>
        </div>
      </div>

      <div className="border-y border-orange-200 py-6 bg-white/50 backdrop-blur-sm">
        <Marquee
          gradient={true}
          gradientColor={[255, 251, 240]}
          gradientWidth={150}
          speed={50}
          pauseOnHover={true}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="mx-12 flex items-center gap-6 group"
            >
              <span className="text-3xl md:text-4xl font-serif text-stone-900/20 group-hover:text-stone-900 transition-all duration-500 uppercase tracking-tighter italic select-none">
                {product.brand}
              </span>
              
              <span className="px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                50% OFF
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
