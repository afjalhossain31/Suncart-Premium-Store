import React from "react";
export default function Brands() {
  const brands = ["SolarCo", "SunPower", "EcoFlow", "Jackery", "Anker"];
  return (
    <div className="max-w-6xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-10 text-black">Trusted by Leading Brands</h2>
      <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60">
        {brands.map(b => <span key={b} className="text-2xl font-bold text-gray-500">{b}</span>)}
      </div>
    </div>
  );
}