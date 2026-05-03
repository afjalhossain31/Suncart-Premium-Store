"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
      title: "Summer Sale",
      highlight: "🔥 50% OFF NOW",
      subtitle: "Upgrade your summer wardrobe with our exclusive collection."
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      title: "Hot Deals",
      highlight: "🔥 Limited Time",
      subtitle: "Grab the most popular items before they are gone!"
    },
    {
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      title: "New Arrivals",
      highlight: "🔥 15% OFF NOW",
      subtitle: "Discover the latest trends in luxury fashion and accessories."
    }
  ];

  return (
    <section className="bg-orange-50 pt-6 md:pt-10 pb-4 px-4">

      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop={true}
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-[#E8E4D8]"
        >


          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              <Image
                src={slide.image}
                fill
                sizes="100vw"
                alt={slide.title}
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="px-4 md:px-16 max-w-4xl text-white text-center">
                  <div className="animate__animated animate__fadeInUp">
                    <span className="inline-block px-8 py-3 bg-orange-500 text-base md:text-xl font-black uppercase tracking-[0.2em] rounded-full mb-6 shadow-[0_10px_20px_-5px_rgba(249,115,22,0.5)] scale-110">
                      {slide.highlight}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif font-bold mb-4 leading-tight">
                      {slide.title.split(' ')[0]} <span className="text-orange-500">{slide.title.split(' ')[1]}</span>
                    </h2>
                    <p className="text-sm md:text-lg text-stone-200 mb-8 max-w-2xl mx-auto hidden md:block">
                      {slide.subtitle}
                    </p>
                    <button className="px-8 py-4 bg-white text-stone-900 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-fade .swiper-slide {
          pointer-events: none;
          transition-property: opacity;
        }
        .swiper-fade .swiper-slide-active {
          pointer-events: auto;
        }

        .swiper-pagination-bullet {
          background: #fd6c17 !important;
          opacity: 0.3;
          width: 10px;
          height: 10px;
          margin: 0 8px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 25px;
          border-radius: 5px;
          transition: all 0.4s ease;
        }
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </section>
  );
}
