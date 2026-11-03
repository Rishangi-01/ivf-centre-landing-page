
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { site } from "@/data";

const collageLayout = [
  "left-0 top-[25%] h-[245px] w-[190px] sm:h-[270px] sm:w-[235px] lg:left-0 lg:top-[30%] lg:h-[300px] lg:w-[284px]",
  "right-[3%] top-0 h-[215px] w-[180px] sm:h-[235px] sm:w-[200px] lg:right-[5%] lg:top-0 lg:h-[288px] lg:w-[270px]",
  "right-0 bottom-0 h-[225px] w-[185px] sm:h-[250px] sm:w-[205px] lg:right-0 lg:bottom-0 lg:h-[330px] lg:w-[294px]",
];

export default function AboutSection() {
  const homeAbout = site.about.homeSection;
  const careImages = site.Insurance.sections.Gallery.variants.InsuranceGallery1.items.slice(0, 3);
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative isolate overflow-hidden bg-[#8c5b53] py-14 text-white sm:py-20 lg:min-h-[620px] lg:py-10 px-6 sm:px-6 lg:px-10 xl:px-14 w-[100%]">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#5f3832]/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1fr] md:gap-8 lg:min-h-[540px] lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.15,
              },
            },
          }}
          className="relative z-10 max-w-[650px]"
        >
          
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 15,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            className="inline-flex items-center rounded-full bg-[#f0f1d9] px-7 py-2 text-sm font-semibold text-[#754840] sm:text-base"
          >
            {homeAbout.eyebrow}
          </motion.div>

          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 25,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="mt-8 font-serif lg:text-[6rem] text-[2rem] font-normal leading-[1.02] tracking-[-0.035em] text-[#fffaf3]"
          >
            {homeAbout.title.map((line, index) => (
              <span key={line}>
                {index > 0 && (
                  <br className={index === 2 ? "hidden lg:block" : undefined} />
                )}
                {line}
              </span>
            ))}
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 72 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: 0.4,
            }}
            className="mt-7 h-[2px] bg-[#f0f1d9]"
          />
        </motion.div>

        {/* Right collage */}
        <div className="relative mx-auto h-[480px] w-full max-w-[630px] sm:h-[540px] md:h-[500px] lg:h-[690px]">
          {careImages.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 28,
                scale: reduceMotion ? 1 : 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.15 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion ? {} : { y: -5, scale: 1.02 }
              }
              className={`group absolute overflow-hidden rounded-[26px] bg-white/10 shadow-xl shadow-black/10 ${collageLayout[index]}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 767px) 45vw, 250px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#35211d]/15 to-transparent opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
