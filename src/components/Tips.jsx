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
      className: "md:col-span-2 bg-[#F3F4F6] text-stone-800 shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500",
      accent: "text-orange-500",
    },
    {
      title: "Sun Protection",
      desc: "Apply SPF 50+ sunscreen 20 minutes before heading out. Covering areas like ears and neck, and reapplying every two hours, ensures your skin stays protected and healthy during the brightest summer days.",
      icon: <IoSunnyOutline size={32} />,
      className:
        "md:col-start-3 md:row-start-1 md:row-span-2 bg-emerald-700 text-white",
      accent: "text-emerald-200",
    },
    {
      title: "Skincare Routine",
      desc: "Switch to a lightweight, gel-based moisturizer for humid conditions. Regular cleansing help control excess oil and keep your skin fresh throughout the day.",
      icon: <IoLeafOutline size={32} />,
      className: "md:col-span-1 bg-white border border-stone-200",
      accent: "text-green-600",
    },
    {
      title: "Light Fabrics",
      desc: "Choose breathable fabrics like cotton and linen. Loose-fitting clothes help prevent heat rashes and discomfort, keeping you cool even during the hottest days.",
      icon: <IoShirtOutline size={32} />,
      className: "md:col-span-1 bg-orange-500 text-white shadow-lg",
      accent: "text-white",
    },
  ];
  return (
    <section className="bg-orange-100 py-20 px-2 sm:px-4 lg:px-6">

      
      <div className="container mx-auto max-w-8xl animate__animated animate__slideInUp">
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
