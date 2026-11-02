
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { site } from "@/data";

export default function HomecareHero() {
  const content = site.Insurance.sections.Homecare.variants.InsuranceHomecare1;
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative isolate min-h-[510px] overflow-hidden bg-[#8c5b53] sm:min-h-[600px] lg:min-h-[680px] w-[100%]">
      {/* Background image */}
      <motion.div
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 1.06,
        }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src={content.image}
          alt={content.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-center"
        />
      </motion.div>

      {/* Contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />

      {/* Brand tint */}
      <div className="absolute inset-0 bg-[#8c5b53]/10 mix-blend-multiply" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[510px] max-w-[1800px] flex-col justify-start px-5 pb-16 pt-10 sm:min-h-[600px] sm:px-8 sm:pt-12 lg:min-h-[680px] lg:px-[4.2%] lg:pt-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.18,
                delayChildren: 0.2,
              },
            },
          }}
          className="max-w-[1120px]"
        >

          {/* Main headline */}
          <motion.h1
            variants={reveal}
            className="mt-4 max-w-[1050px] lg:text-[7rem] font-light leading-[1.14] tracking-[-0.035em] text-white sm:mt-5 lg:leading-[1.17]"
          >
            {content.title.map((line, index) => (
              <span key={line}>
                {index > 0 && <br className="hidden sm:block" />}
                {line}
              </span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Bottom decorative accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            duration: reduceMotion ? 0 : 0.6,
          }}
          className="absolute bottom-6 right-6 hidden items-center gap-2 rounded-full border border-white/30 bg-black/15 px-4 py-2.5 text-sm text-white backdrop-blur-md sm:flex lg:bottom-8 lg:right-10"
        >
          <Plus size={16} className="text-white" />
          <span>{content.tagline}</span>
        </motion.div>
      </div>
    </section>
  );
}
