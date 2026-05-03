import React from "react";
export default function HeroSlider() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-yellow-300 h-[500px] flex items-center justify-center text-white p-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-4">Power Your Life with the Sun</h1>
        <p className="text-xl mb-8">Premium solar panels and accessories at the best prices.</p>
        <button className="btn btn-warning btn-lg">Shop Now</button>
      </div>
    </div>
  );
}