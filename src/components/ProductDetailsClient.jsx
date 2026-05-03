"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import {
  IoStar,
  IoShieldCheckmarkOutline,
  IoBriefcaseOutline,
  IoRefreshOutline,
  IoLeafOutline,
} from "react-icons/io5";
import toast from "react-hot-toast";

export default function ProductDetailsClient({
  name,
  brand,
  price,
  rating,
  image,
  stock,
  category,
  description,
  trustFeatures,
}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check authentication on mount
  useEffect(() => {
    if (!mounted) return;
    
    const user = authClient.getUser();
    if (!user) {
      // Get current URL to redirect back after login
      const currentPath = typeof window !== "undefined" ? window.location.pathname : "/products/1";
      toast.error("Please login to view product details");
      router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
    }
  }, [mounted, router]);

  // Show loading state on first mount
  if (!mounted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="font-serif italic animate-pulse">Loading product details...</p>
      </div>
    );
  }

  const user = authClient.getUser();
  
  // If not authenticated, don't render anything (redirect will happen)
  if (!user) {
    return null;
  }

  // If user is authenticated, show the product details
  return (
    <div className="min-h-screen bg-stone-50 py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="top-24">
            <div className="relative overflow-hidden rounded-xl bg-white border border-stone-200 shadow-sm">
              <Image
                src={image}
                alt={name}
                height={800}
                width={800}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl">
                <span className="text-stone-900 text-xs font-black uppercase tracking-widest">
                  {category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-3">
                {brand}
              </p>
              <h1 className="text-5xl md:text-6xl font-serif text-stone-900 tracking-tighter leading-none mb-6">
                {name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-xl">
                  <IoStar className="text-orange-500" size={16} />
                  <span className="text-sm font-black text-stone-900">
                    {rating}
                  </span>
                </div>
                <span className="text-stone-900/40 text-sm font-medium">|</span>
                <span className="text-stone-900/60 text-sm font-medium italic">
                  {stock} pieces remaining
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-stone-200 mb-10 shadow-sm">
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-black text-stone-900 tracking-tighter">
                  ${price}
                </span>
                <span className="text-stone-900/40 text-lg mb-1 font-medium">
                  USD
                </span>
              </div>

              <p className="text-stone-900/70 leading-relaxed mb-8 text-lg">
                {description}
              </p>

              <AddToCartBtn />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-stone-200/60 flex items-start gap-4 hover:border-orange-500/30 transition-colors"
                >
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-stone-900 font-bold text-sm uppercase tracking-tight mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-stone-900/50 text-xs leading-snug">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
