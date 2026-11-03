
"use client";

import { Suspense, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  ClipboardCheck,
  CalendarCheck,
  Microscope,
  Baby,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

const treatmentSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Meet our fertility expert to discuss your concerns, history and treatment options.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Fertility Assessment",
    description:
      "A detailed evaluation with required tests to understand your fertility health.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Personalized Treatment Plan",
    description:
      "A tailored IVF plan designed for your unique needs and best possible results.",
    icon: CalendarCheck,
  },
  {
    number: "04",
    title: "IVF Treatment",
    description:
      "Carefully monitored procedures including egg retrieval, fertilization and embryo development.",
    icon: Microscope,
  },
  {
    number: "05",
    title: "Pregnancy & Follow-Up",
    description:
      "Embryo transfer and ongoing care with pregnancy testing and continuous support throughout your journey.",
    icon: Baby,
  },
];

const repeatedSteps = [
  ...treatmentSteps,
  ...treatmentSteps,
];

export default function TreatmentProcess() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative isolate overflow-hidden bg-[#fff6f5] px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

      
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#8c5b53]/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#8c5b53]/[0.07] blur-3xl" />

      
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 w-full">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 65C220 5 350 145 570 95C800 42 940 15 1140 85C1270 130 1360 105 1440 70V180H0V65Z"
            fill="#8c5b53"
            fillOpacity="0.07"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1600px]">


        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-9 rounded-full bg-[#8c5b53]" />

            <span className="text-sm font-bold tracking-wide text-[#8c5b53] sm:text-base">
              Our Treatment Process
            </span>

            <span className="h-[2px] w-9 rounded-full bg-[#8c5b53]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#242333] sm:text-4xl lg:text-5xl">
            A Simple & Supportive{" "}
            <span className="text-[#8c5b53]">
              IVF Journey
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#696571] sm:text-base lg:text-lg">
            A step-by-step, personalized process to guide you
            from consultation to a successful pregnancy.
          </p>
        </motion.div>

        {/* Slider wrapper */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="relative px-1 sm:px-5 lg:px-1"
        >
          {/* Previous button */}
          <button
            type="button"
            className="treatment-prev absolute -left-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#8c5b53] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#70453f] disabled:opacity-40 sm:-left-3 sm:h-12 sm:w-12 lg:-left-5"
            aria-label="Previous treatment step"
          >
            <ArrowLeft size={21} />
          </button>

          {/* Next button */}
          <button
            type="button"
            className="treatment-next absolute -right-1 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#8c5b53] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#70453f] disabled:opacity-40 sm:-right-3 sm:h-12 sm:w-12 lg:-right-5"
            aria-label="Next treatment step"
          >
            <ArrowRight size={21} />
          </button>

          <Suspense fallback={<div className="min-h-[410px]" aria-hidden="true" />}>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".treatment-prev",
                nextEl: ".treatment-next",
              }}
              loop={true}
              loopAdditionalSlides={5}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={24}
              speed={750}
              autoplay={
                reduceMotion
                  ? false
                  : {
                      delay: 3500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
              }
              breakpoints={{
                480: {
                  slidesPerView: 1.4,
                  spaceBetween: 18,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 22,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
                1500: {
                  slidesPerView: 5,
                  spaceBetween: 26,
                },
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex % treatmentSteps.length);
              }}
              className="!pb-12 !pt-5 lg:max-w-[1400px] !overflow-hidden"
            >
              {repeatedSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <SwiperSlide key={`${step.number}-${index}`}>
                    <div className="group relative h-full pt-5">
                      {/* Number badge */}
                      <div className="absolute left-1/2 top-0 z-10 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border-[4px] border-[#fff6f5] bg-[#8c5b53] text-lg font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                        {step.number}
                      </div>

                      {/* Card */}
                      <div className="relative flex min-h-[365px] flex-col items-center rounded-[28px] border border-[#8c5b53]/10 bg-white px-4 pb-7 pt-9 text-center shadow-[0_8px_25px_rgba(140,91,83,0.09)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_18px_35px_rgba(140,91,83,0.16)] sm:min-h-[380px] sm:px-5">
                        {/* Icon circle */}
                        <div className="relative mb-5 grid h-[130px] w-[130px] shrink-0 place-items-center rounded-full bg-[#f8e9e7] transition-all duration-500 group-hover:bg-[#f1d8d4] sm:h-[140px] sm:w-[140px]">
                          <div className="absolute inset-2 rounded-full border border-[#8c5b53]/10" />
                          <Icon
                            size={65}
                            strokeWidth={1.65}
                            className="text-[#8c5b53] transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="min-h-[52px] flex items-center justify-center text-lg font-bold leading-tight text-[#242333] transition-colors duration-300 group-hover:text-[#8c5b53] sm:text-xl">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-[1.7] text-[#5f5b63]">
                          {step.description}
                        </p>

                        {/* Bottom accent */}
                        <div className="mt-auto flex gap-1.5 pt-5">
                          <span className="h-1 w-5 rounded-full bg-[#8c5b53]" />
                          <span className="h-1 w-2 rounded-full bg-[#8c5b53]/30 transition-all duration-300 group-hover:w-5" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Suspense>
        </motion.div>

        {/* Slider pagination */}
        <div className="mt-1 flex items-center justify-center gap-2">
          {treatmentSteps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              aria-label={`Go to treatment step ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => {
                const swiperElement = document.querySelector(
                  ".swiper"
                ) as HTMLElement & {
                  swiper?: {
                    slideToLoop: (index: number, speed: number) => void;
                  };
                };

                swiperElement?.swiper?.slideToLoop(index, 700);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#8c5b53]"
                  : "w-2 bg-[#8c5b53]/30 hover:bg-[#8c5b53]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
