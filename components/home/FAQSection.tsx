
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is IVF and how does the process work?",
    answer:
      "In Vitro Fertilization (IVF) is a fertility treatment in which eggs and sperm are combined in a laboratory. If fertilization occurs, an embryo may be transferred to the uterus. Your fertility specialist will explain each stage and help determine whether IVF is appropriate for you.",
  },
  {
    question: "Who may benefit from fertility treatment?",
    answer:
      "Fertility treatment may be considered for people experiencing difficulties conceiving or those with certain reproductive health conditions. A consultation and appropriate medical assessment help determine the most suitable options.",
  },
  {
    question: "How long does an IVF treatment cycle take?",
    answer:
      "The timeline varies depending on your medical history, treatment protocol, and individual response. A treatment cycle may take several weeks, and your doctor will provide a personalized timeline after your assessment.",
  },
  {
    question: "Is IVF treatment painful?",
    answer:
      "Experiences differ from person to person. Some stages may involve mild discomfort, and your medical team can explain what to expect and discuss ways to manage discomfort throughout treatment.",
  },
  {
    question: "What tests are required before starting IVF?",
    answer:
      "Your doctor may recommend blood tests, ultrasound scans, and other assessments based on your medical history. Testing helps your specialist understand your reproductive health and plan appropriate care.",
  },
  {
    question: "What factors affect the cost of IVF treatment?",
    answer:
      "The overall cost depends on the treatment plan, investigations, medications, procedures, and any additional services required. Our team can explain the expected costs before treatment begins.",
  },
  {
    question: "Can I continue my normal routine during treatment?",
    answer:
      "Many everyday activities can continue during parts of treatment, but recommendations may change depending on the treatment stage. Follow the guidance provided by your fertility specialist.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can contact our care team through the appointment form, phone, or contact page. Our team will help arrange a consultation at a convenient time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#fff8f7] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 w-[100%]">

      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#8c5b53]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#8c5b53]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px]">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#8c5b53]" />

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#8c5b53]">
              Have Questions?
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#8c5b53]" />
          </div>

          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[#302624] sm:text-5xl lg:text-6xl">
            Frequently Asked{" "}
            <span className="text-[#8c5b53]">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#786d69] sm:text-base">
            Find answers to common questions about fertility,
            IVF treatments, appointments, and the care we provide.
            We are here to make your journey easier to understand.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="mx-auto max-w-[1200px] space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : (index % 4) * 0.07,
                }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#8c5b53]/35 bg-white shadow-[0_12px_35px_rgba(140,91,83,0.09)]"
                    : "border-[#eadbd7] bg-white/80 hover:border-[#8c5b53]/30 hover:bg-white"
                }`}
              >
                {/* Question button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8c5b53]"
                >
                  <span className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 hidden font-serif text-sm sm:block ${
                        isOpen ? "text-[#8c5b53]" : "text-[#b8a6a1]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-[15px] font-semibold leading-6 transition-colors duration-300 sm:text-lg ${
                        isOpen ? "text-[#8c5b53]" : "text-[#342c29]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#8c5b53] text-white"
                        : "bg-[#f7eae7] text-[#8c5b53]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={
                        reduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={
                        reduceMotion
                          ? { opacity: 1 }
                          : { height: "auto", opacity: 1 }
                      }
                      exit={
                        reduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#8c5b53]/10 px-5 pb-6 pt-4 sm:px-7 sm:pb-7 sm:pl-[4.4rem]">
                        <p className="text-sm leading-7 text-[#786d69] sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
