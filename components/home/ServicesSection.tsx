
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data";

export default function ServicesSection() {
  const content = site.plans;
  const services = content.items.slice(0, 4);
  const imageService = content.items[2];
  if (!imageService?.homeImageAlt) {
    throw new Error("Services section image data is missing");
  }
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#eeece5] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 w-[100%]">
      <div className="mx-auto max-w-[1400px]">
        
        <motion.h2
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-8 font-serif text-4xl font-normal tracking-tight text-[#263c35] sm:mb-10 sm:text-5xl"
        >
          {content.eyebrow}
        </motion.h2>

        
        <div className="grid grid-cols-1 items-stretch gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-14">
          
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -35,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative min-h-[340px] overflow-hidden sm:min-h-[440px] md:min-h-[500px] lg:min-h-[530px]"
          >
            <Image
              src={imageService.image}
              alt={imageService.homeImageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#263c35]/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>

          
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-10">
              {services.map((service, index) => (
                <motion.a
                  key={service.slug}
                  href={content.serviceDetailsHref}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 24,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex min-h-[172px] flex-col border-b border-[#52745f] py-6 outline-none transition-colors duration-300 first:pt-3 sm:min-h-[190px] sm:py-8 sm:first:pt-3 focus-visible:ring-2 focus-visible:ring-[#8c5b53] focus-visible:ring-offset-4 focus-visible:ring-offset-[#eeece5]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-xl font-normal text-[#263c35] transition-colors duration-300 group-hover:text-[#8c5b53] lg:text-[3rem]">
                      {service.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#8c5b53] opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </div>
                  <span className="absolute bottom-[-1px] left-0 h-[2px] w-0 bg-[#8c5b53] transition-all duration-500 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
