import React from "react";
import {
  IoWaterOutline,
  IoSunnyOutline,
  IoLeafOutline,
  IoShirtOutline,
} from "react-icons/io5";
import "animate.css";

const Tips = () => {
  const tips = [
    {
      title: "Stay Hydrated Premium",
      desc: "To match the premium lifestyle of Suncart Store, drink at least 8–10 glasses of mineral-rich water daily. Proper hydration at Suncart Premium Store means keeping your body cool, energized, and your skin glowing for that luxury summer look.",
      icon: <IoWaterOutline size={32} />,
      className: "md:col-span-2 bg-white shadow-xl hover:shadow-2xl transition-all border-l-4 border-orange-500",
      accent: "text-orange-500",
    },
    {
      title: "Sun Protection",
      desc: "Please ensure you apply a broad-spectrum sunscreen with an SPF of 50 or higher prior to outdoor activities. Apply the sunscreen 15 to 20 minutes before sun exposure, and reapply every two hours, especially if you are sweating or spending extended periods outdoors. Remember to cover often overlooked areas such as your ears, neck, and hands. For added protection, consider wearing sunglasses, a hat, and lightweight, long-sleeved clothing to reduce skin exposure to direct sunlight. Limiting outdoor activities during peak hours (10 a.m. to 4 p.m.) can help minimize the risk of sunburn, premature skin aging, and long-term skin damage caused by UV rays. Staying consistent with sun protection habits can significantly improve your skin’s overall health and resilience over time. Even on cloudy days, UV rays can penetrate the skin, so daily protection is essential.",
      icon: <IoSunnyOutline size={32} />,
      className:
        "md:col-start-3 md:row-start-1 md:row-span-2 bg-orange-500 text-white",
      accent: "text-white",
    },
    {
      title: "Skincare Routine",
      desc: "Switch to a lightweight, gel-based moisturizer and gentle cleanser suitable for humid conditions. Avoid heavy creams that can clog pores. Regular cleansing and moisturizing help control excess oil, prevent breakouts, and keep your skin fresh throughout the day.",
      icon: <IoLeafOutline size={32} />,
      className: "md:col-span-1 bg-stone-900 text-orange-50",
      accent: "text-[#FBA919]",
    },
    {
      title: "Light Fabrics",
      desc: "Choose breathable fabrics like cotton and linen that allow air circulation and absorb sweat effectively. Loose-fitting clothes help prevent heat rashes and discomfort, keeping you cool and comfortable even during the hottest summer days.",
      icon: <IoShirtOutline size={32} />,
      className: "md:col-span-1 bg-white",
      accent: "text-orange-500",
    },
  ];
  return (
    <section className="bg-orange-100 py-20 px-4">
      <div className="container mx-auto animate__animated animate__slideInUp">
        <div className="mb-12 border-l-8 border-stone-900 pl-6">
          <h2 className="md:text-5xl text-2xl font-bold font-serif text-stone-900 tracking-tight">
            Summer <span className="text-orange-500">Care Tips</span>
          </h2>
          <p className="text-stone-900/60 mt-2 font-medium">
            Small habits for a better season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows ">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-xl bg-amber-100 border border-orange-50 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1  ${tip.className}`}
            >
              <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500/10 rounded-full group-hover:scale-110 transition-transform" />

              <div className={`relative z-10 pb-4 ${tip.accent}`}>
                {tip.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl mb-2 leading-tight">{tip.title}</h3>
                <p
                  className={`text-base leading-relaxed ${tip.className.includes("bg-amber-100") ? "text-stone-900/60" : "opacity-80"}`}
                >
                  {tip.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
