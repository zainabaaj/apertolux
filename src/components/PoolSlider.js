'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/pools/movable-floor/6.png",
  "/pools/movable-floor/3.png",
  "/pools/movable-floor/4.png",
  "/pools/movable-floor/5.png",
  "/pools/movable-floor/7.png",
  "/pools/movable-floor/8.png",
  "/pools/movable-floor/9.png",
  "/pools/movable-floor/10.png",
];

export default function PoolSlider() {
  return (
    <div className="mb-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl text-[#0A192F] font-bold mb-4">
            Featured Installations
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl">
            Swipe through a curated gallery of our recent bespoke pool floor
            integrations.
          </p>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        spaceBetween={24}
        slidesPerView={1.1}
        centeredSlides={false}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2.2,
          },
        }}
        className="pool-swiper !pb-14"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-md border border-gray-200 group">
              <Image
                src={src}
                alt={`Pool Installation ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 600px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
  .pool-swiper .swiper-button-next,
  .pool-swiper .swiper-button-prev {
    width: 24px;
    height: 24px;
    background: transparent;
    color: white;
    box-shadow: none;
  }

  .pool-swiper .swiper-button-next:after,
  .pool-swiper .swiper-button-prev:after {
    font-size: 10px;
    font-weight: 900;
  }
`}</style>
    </div>
  );
}