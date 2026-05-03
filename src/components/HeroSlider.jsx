"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

export default function HeroSlider() {
  const bannerImages = [
    "/banner-images/1.png",
    "/banner-images/2.png",
    "/banner-images/3.png",
    "/banner-images/5.png",
  ];

  return (
    <section className="bg-[#FFFBF0] w-full px-4 py-6 md:py-5">
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop={true}
          speed={1000}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-auto rounded-2xl overflow-hidden shadow-2xl bg-[#E8E4D8]"
        >
          {bannerImages.map((imagePath, index) => (
            <SwiperSlide key={index} className="w-full h-auto">
              <Image
                src={imagePath}
                width={5000}
                height={2000}
                alt={`Summer Sale Banner ${index + 1}`}
                className="w-full h-auto block"
              />
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
