import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStar, IoCartOutline, IoEyeOutline } from "react-icons/io5";

const ProductCard = async ({ product, params }) => {
  const { name, brand, price, rating, image, stock, category, id } = product;
  const productId = await params;
  // console.log(productId, "Card");

  return (
    <div className="group relative bg-white rounded-xl p-4 border border-[#E8E4D8]/60 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(253,108,23,0.15)] hover:border-orange-500/30 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F7F7F2] shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 z-10">
          <p className="text-[10px] uppercase tracking-[0.15em] font-black text-stone-900/60">
            {category}
          </p>
        </div>

        {stock < 15 && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-[9px] uppercase tracking-wider font-black px-2.5 py-1 rounded-full shadow-lg">
            Low Stock
          </div>
        )}
      </div>

      <div className="px-2 pt-6 pb-2 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">
            {brand}
          </p>
          <div className="flex items-center gap-1 bg-[#FBA919]/10 px-2 py-0.5 rounded-full">
            <IoStar className="text-[#FBA919]" size={12} />
            <span className="text-[11px] font-black text-stone-900">
              {rating}
            </span>
          </div>
        </div>

        <h3 className="text-xl antialiased font-serif text-stone-900 leading-tight mb-4 min-h-[3.5rem] line-clamp-2 transition-colors group-hover:text-orange-500">
          {name}
        </h3>

        <div className="flex items-center justify-between border-t border-[#E8E4D8]/40 pt-4 mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-900/40 font-black uppercase tracking-widest">
              Price
            </span>
            <div className="flex items-start">
              <span className="text-sm font-bold text-stone-900 mt-1">$</span>
              <span className="text-3xl font-black text-stone-900 tracking-tighter">
                {price}
              </span>
            </div>
          </div>

          <Link href={`/products/${id}`}>
            <button className="px-6 py-3 bg-stone-900 text-orange-50 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-500 transition-all active:scale-95 shadow-md hover:shadow-orange-200 cursor-pointer">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
