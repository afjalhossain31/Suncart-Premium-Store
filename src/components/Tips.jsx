import React from "react";
export default function Tips() {
  const tips = [
    { title: "Solar Maintenance", desc: "Keep panels clean for 20% more efficiency." },
    { title: "Energy Storage", desc: "Best ways to use batteries at night." },
    { title: "Savings Calculator", desc: "How much can you save this year?" }
  ];
  return (
    <section className="bg-slate-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-black">
        <h2 className="text-3xl font-bold mb-12 text-center">Solar Tips & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map(t => (
            <div key={t.title} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{t.title}</h3>
              <p className="text-gray-600 mb-6">{t.desc}</p>
              <button className="text-warning font-semibold">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}