"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data";

export default function MedicalServices() {
  const plans = site.plans;
  const services = plans.items
    .filter((item) => plans.homeServiceSlugs.includes(item.slug))
    .map((item) => {
      if (!item.homeImageAlt) {
        throw new Error(`Missing home image alt text for ${item.slug}`);
      }
      return item;
    });
  const [highlightFirstWord, ...highlightRemainingWords] =
    plans.highlight.split(" ");
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative overflow-x-clip bg-gradient-to-br from-[#fff8f7] via-[#fdf0ef] to-[#f9e8e7] px-6 sm:px-6 lg:px-10 xl:px-14 w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#8c5b53]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto py-6 sm:py-10 md:py-8 lg:py-24 max-w-[1600px]">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-5 lg:grid-cols-[0.95fr_1.6fr] lg:gap-12">
          <div className="min-w-0 lg:sticky lg:top-8 lg:h-fit lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7 }}
              className="shrink-0 pb-5 sm:pb-7"
            >
              <h2 className="max-w-full font-serif text-[30px] font-normal leading-[1.12] tracking-[-0.035em] text-[#352c29] lg:text-5xl">
                {plans.title}
                <br />
                <span className="text-[#8c5b53] text-[35px] lg:text-8xl">
                  {highlightFirstWord}
                </span>{" "}
                {highlightRemainingWords.join(" ")}
              </h2>

              <div className="mt-6 h-px w-full max-w-[300px] bg-[#8c5b53]/40" />
              <div className="mt-1.5 h-px w-[72%] mb-5 max-w-[240px] bg-[#8c5b53]/25" />
            </motion.div>

            <div className="grid gap-3">
              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.12,
                }}
                className="group relative h-[220px] overflow-hidden rounded-xl sm:h-[280px] md:h-[min(45vw,420px)] lg:h-[min(45svh,420px)] lg:rounded-lg"
              >
                <Image
                  src={plans.homeImage}
                  alt={plans.homeImageAlt}
                  fill
                  priority
                  sizes="(max-width: 767px) 50vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </motion.div>
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              {services.map((service, index) => (
                <motion.a
                  key={service.title}
                  href={plans.serviceDetailsHref}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 36,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : (index % 2) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex min-h-[300px] flex-col justify-between gap-5 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_4px_20px_rgba(140,91,83,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8c5b53]/25 hover:bg-white hover:shadow-[0_10px_30px_rgba(140,91,83,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] sm:p-5 md:min-h-[360px] md:flex-row md:items-center md:gap-4 lg:min-h-[65svh] lg:gap-6 lg:rounded-3xl lg:p-8"
                >
                  <div className="flex min-w-0 flex-1 items-start justify-between gap-3 py-1 md:pl-2 lg:gap-5">
                    <div>
                      <span className="text-xs font-medium tracking-[0.2em] text-[#8c5b53]/70">
                        0{index + 1}
                      </span>
                      <h3 className="mt-2 font-serif text-2xl font-normal leading-tight text-[#352c29] transition-colors duration-300 group-hover:text-[#8c5b53] sm:text-3xl lg:text-5xl">
                        {service.title}
                      </h3>
                      <div className="mt-4 h-px w-10 bg-[#8c5b53]/45 transition-all duration-300 group-hover:w-16 group-hover:bg-[#8c5b53]" />
                      <p className="mt-4 max-w-md text-sm leading-6 text-[#665854] sm:text-base">
                        {service.text}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-[#8c5b53] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-[#f3e8e5] sm:h-56 md:h-64 md:w-[42%] lg:h-[min(42svh,520px)] lg:w-[44%] lg:rounded-2xl">
                    <Image
                      src={service.homeImage}
                      alt={service.homeImageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 42vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#8c5b53]/0 transition-colors duration-300 group-hover:bg-[#8c5b53]/10" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
