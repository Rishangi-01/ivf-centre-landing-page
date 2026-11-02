
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data";

export default function HeroSection() {
  const slide = site.hero.slides[0];
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-[#fff9f6] sm:min-h-[600px] lg:min-h-[620px] w-[100%]">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#f4d9d1]/30 blur-3xl"
      />

      <motion.div className="absolute inset-0 -z-20">
        <Image
          alt={slide.imageAlt}
          fill
          priority
          sizes="100vw"
          src={slide.image}
          className="object-cover object-[62%_center] sm:object-[60%_center] lg:object-center"
        />
      </motion.div>

      <div className="relative mx-auto grid min-h-[520px] max-w-[1600px] grid-cols-1 items-center sm:min-h-[600px] lg:min-h-[620px] lg:grid-cols-2">
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.16,
              },
            },
          }}
          className="relative z-10 order-2 px-6 pb-12 pt-4 sm:px-10 lg:order-1 lg:px-14 lg:py-16 xl:px-20"
        >

          <motion.h1
            variants={fadeUp}
            className="max-w-[620px] font-serif text-[43px] font-normal leading-[1.08] tracking-[-0.035em] text-[#8c5b53] lg:text-8xl xl:text-7xl"
          >
            {slide.title.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </motion.h1>
        </motion.div>

        
        <motion.div
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 1.035,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative order-1 h-[300px] overflow-hidden sm:h-[410px] lg:order-2 lg:h-full lg:min-h-[620px]"
        >

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fff9f6]/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#fff9f6]/30 lg:via-transparent lg:to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
