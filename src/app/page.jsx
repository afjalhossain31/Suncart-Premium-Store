import React from "react";
import HeroSlider from "@/components/HeroSlider";
import Brands from "@/components/Brands";
import PopularProducts from "@/components/PopularProducts";
import AllProducts from "@/components/AllProducts";
import Tips from "@/components/Tips";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <HeroSlider />
      <Brands />
      <PopularProducts />
      <AllProducts />
      <Tips />
    </div>
  );
}