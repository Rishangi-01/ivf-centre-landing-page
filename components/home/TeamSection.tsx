
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, HeartPulse } from "lucide-react";
import { site } from "@/data";

export default function TeamSection() {
  const content = site.Insurance.sections.Team.variants.InsuranceTeam1;
  const teamMembers = content.members;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="our-team"
      className="relative overflow-hidden bg-[#dedcff] py-20 text-[#8c5b53] sm:py-24 lg:py-28 w-[100%] px-6 sm:px-6 lg:px-10 xl:px-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-white/35 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#b9b4f5]/35 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px]">
        
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#8c5b53] px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm sm:text-base">
            <HeartPulse size={18} />
            {content.eyebrow}
          </span>

          <h2 className="mt-8 font-serif text-5xl leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[84px]">
            {content.title}
          </h2>
        </motion.div>

        
        <div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-7">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 45,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                delay: shouldReduceMotion ? 0 : index * 0.13,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion ? undefined : { y: -8 }
              }
              className="group min-w-0"
            >
              
              <div className="relative aspect-[0.82/1] overflow-hidden rounded-[28px] bg-[#c6c3e9] shadow-[0_12px_35px_rgba(36,94,75,0.10)] transition-shadow duration-500 group-hover:shadow-[0_22px_50px_rgba(36,94,75,0.20)] sm:rounded-[32px] lg:rounded-[30px] xl:rounded-[36px]">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                
                <div className="absolute inset-0 bg-gradient-to-t from-[#163e32]/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              <div className="flex items-start justify-between gap-2 px-1 pt-6">
                <div>
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl xl:text-[40px]">
                    {member.name}
                  </h3>

                  <p className="mt-5 text-base font-medium text-[#426c5d] lg:text-xl">
                    {member.role}
                  </p>
                </div>

                <motion.a
                  href="#contact"
                  aria-label={member.linkLabel}
                  whileHover={
                    shouldReduceMotion ? undefined : { rotate: 45 }
                  }
                  whileTap={
                    shouldReduceMotion ? undefined : { scale: 0.9 }
                  }
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8c5b53]/25 transition-colors duration-300 group-hover:bg-[#8c5b53] group-hover:text-white sm:h-11 sm:w-11"
                >
                  <ArrowUpRight size={21} />
                </motion.a>
              </div>

              <div className="mt-5 h-px w-full origin-left scale-x-0 bg-[#8c5b53]/40 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
