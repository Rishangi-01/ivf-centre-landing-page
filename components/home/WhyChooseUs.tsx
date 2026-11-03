
"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  HeartPulse,
  UserRound,
  MonitorCheck,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/data";

const featureIcons: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "user-round": UserRound,
  "monitor-check": MonitorCheck,
  "users-round": UsersRound,
};

export default function WhyChooseUs() {
  const content = site.whyChooseUs;
  const features = content.items.slice(0, content.homeItemCount);
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-[#fff8f4] py-16 text-[#8c5b53] sm:py-20 lg:py-12 w-[100%] px-6 sm:px-6 lg:px-10 xl:px-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 -top-48 -z-10 h-[420px] w-[420px] rounded-full bg-[#f5e4dc]/65 blur-2xl sm:h-[560px] sm:w-[560px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-36 -z-10 h-[420px] w-[420px] rounded-full bg-[#f4e0d7]/55 blur-2xl sm:h-[560px] sm:w-[560px]"
      />

      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 text-center sm:mb-16 lg:mb-20"
        >
          <div className="mb-4 flex items-center justify-center gap-4 sm:gap-6">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 72 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
              }}
              className="h-[2px] bg-[#8c5b53]/45 sm:w-[72px]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8c5b53] sm:text-sm md:text-base">
              {content.eyebrow}
            </p>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 72 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
              }}
              className="h-[2px] bg-[#8c5b53]/45 sm:w-[72px]"
            />
          </div>

          <h2 className="mx-auto max-w-5xl font-serif text-4xl leading-[1.12] tracking-[-0.035em] text-[#783f36] sm:text-5xl md:text-6xl lg:text-7xl">
            {content.title}
            <br className="hidden lg:block" /> {content.titleLine2}{" "}
            {content.highlight}
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-0">
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon];
            if (!Icon) {
              throw new Error(`Unknown feature icon: ${feature.icon}`);
            }

            return (
              <motion.article
                key={feature.title.join(" ")}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.75,
                  delay: reduceMotion ? 0 : index * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion ? undefined : { y: -9 }
                }
                className={`group relative flex h-full flex-col items-center rounded-3xl px-5 py-7 text-center transition-colors duration-300 hover:bg-white/65 sm:px-6 lg:rounded-none lg:px-4 lg:py-5 xl:px-7 ${
                  index !== 0
                    ? "lg:border-l lg:border-[#8c5b53]/20"
                    : ""
                }`}
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { scale: 1.09, rotate: -4 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 16,
                  }}
                  className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f9e8e3] text-[#8c5b53] shadow-[0_0_0_0_rgba(140,91,83,0)] transition-all duration-300 group-hover:bg-[#8c5b53] group-hover:text-white group-hover:shadow-[0_12px_30px_rgba(140,91,83,0.20)] sm:h-28 sm:w-28 lg:mb-7 lg:h-32 lg:w-32"
                >
                  <Icon
                    size={64}
                    strokeWidth={1.6}
                    className="h-14 w-14 transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
                  />
                </motion.div>

                {/* Feature title: 3rem on large desktop */}
                <h3 className="max-w-sm font-serif text-2xl leading-tight tracking-[-0.025em] text-[#693b33] transition-colors duration-300 group-hover:text-[#8c5b53] sm:text-3xl lg:text-[clamp(1.5rem,2.3vw,3rem)]">
                  {feature.title.join(" ")}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#79645d] transition-colors duration-300 group-hover:text-[#5e4943] sm:text-lg">
                  {feature.text.join(" ")}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : 0.25 + index * 0.12,
                  }}
                  className="mt-5 h-[2px] rounded-full bg-[#8c5b53]/45 transition-all duration-300 group-hover:w-20 group-hover:bg-[#8c5b53]"
                />

                {/* Decorative arrow */}
                <ArrowUpRight
                  aria-hidden="true"
                  size={19}
                  className="absolute right-5 top-5 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-70"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
