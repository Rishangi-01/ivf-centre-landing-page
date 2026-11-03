"use client";

import { Suspense } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { site } from "@/data";

import "swiper/css";

const itemPositions = [
  "pt-8 sm:pt-12",
  "pt-0",
  "pt-8 sm:pt-12",
  "pt-0",
];

export default function WellnessGallery() {
  const galleryItems =
    site.Insurance.sections.Gallery.variants.InsuranceGallery1.items;
  const galleryTitle =
    site.Insurance.sections.Gallery.variants.InsuranceGallery1.title;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-[#fffaf7] py-16 sm:py-20 lg:py-24 px-6 sm:px-6 lg:px-10 xl:px-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#8c5b53]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[#302624] sm:text-5xl lg:text-6xl">
            {galleryTitle}{" "}
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-[3px] w-12 rounded-full bg-[#8c5b53]"
          />
        </motion.div>

        <Suspense
          fallback={
            <div
              className="h-[370px] sm:h-[440px] lg:h-[500px]"
              aria-hidden="true"
            />
          }
        >
          <Swiper
            modules={[Autoplay]}
            loop
            grabCursor
            speed={850}
            autoplay={
              reduceMotion
                ? false
                : {
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            slidesPerView={1.12}
            spaceBetween={16}
            breakpoints={{
              480: {
                slidesPerView: 1.55,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
            }}
            className="!overflow-hidden"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={item.src}>
                <div className={itemPositions[index % itemPositions.length]}>
                  <div className="group relative h-[350px] overflow-hidden rounded-[4px] bg-[#e7e3df] sm:h-[420px] lg:h-[470px]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 479px) 88vw, (max-width: 639px) 64vw, (max-width: 899px) 43vw, (max-width: 1199px) 31vw, 24vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2e211d]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Suspense>
      </div>
    </section>
  );
}
