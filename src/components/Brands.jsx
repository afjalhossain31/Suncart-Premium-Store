import { getProducts } from "@/lib/data";
import React from "react";
import Marquee from "react-fast-marquee";

const Brands = async () => {
  const products = await getProducts();

  return (
    <section className="bg-stone-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-0.5 w-10 bg-orange-500/30"></span>
            <span className="text-orange-500 text-xs font-black uppercase tracking-[0.4em]">
              Premium Partners
            </span>
            <span className="h-0.5 w-10 bg-orange-500/30"></span>
          </div>

          <h2 className="text-2xl md:text-6xl font-serif text-stone-900 text-center tracking-tight antialiased">
            Top Brands
          </h2>

          <p className="text-stone-900/60 mt-4 text-center max-w-lg font-medium leading-relaxed">
            We partner with the finest labels to bring you a curated collection
            of amber-hued essentials.
          </p>
        </div>
      </div>

      <div className="border-y border-stone-200 py-12 bg-white">
        <Marquee
          gradient={true}
          gradientColor={[250, 248, 241]}
          gradientWidth={150}
          speed={40}
          pauseOnHover={true}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="mx-16 flex items-center justify-center group"
            >
              <span className="text-4xl md:text-5xl font-serif text-stone-900/10 group-hover:text-orange-500 transition-all duration-700 uppercase tracking-tighter italic select-none">
                {product.brand}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
