
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data";

const itemPositions = [
  "mt-16 lg:mt-20",
  "mt-0 lg:-mt-1",
  "mt-16 lg:mt-20",
  "mt-0 lg:-mt-1",
];

export default function WellnessGallery() {
  const galleryItems =
    site.Insurance.sections.Gallery.variants.InsuranceGallery1.items;
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f4f4f2] px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[740px] lg:px-5 lg:py-[62px] w-[100%]">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#8c5b53]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1800px]">
        
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-[34px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 45,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.1 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative w-full overflow-hidden bg-[#e7e3df] ${itemPositions[index]}`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  index % 2 === 0
                    ? "aspect-[3/3.85]"
                    : "aspect-[3/3.85]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 639px) 46vw, (max-width: 1023px) 46vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e211d]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
