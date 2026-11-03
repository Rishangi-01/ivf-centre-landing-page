
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { site } from "@/data";

export default function ContactForm() {
  const content = site.contact;
  const form = content.form;
  const fields = form.fields;
  const reduceMotion = useReducedMotion();
  const [countryCode, setCountryCode] = useState(form.countries[0].code);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf8f6] lg:mt-8 w-[100%]">
      <section id="contact" className="relative min-h-screen w-[100%]">
        <div className="absolute inset-x-0 top-0 h-[58vh] min-h-[350px] overflow-hidden sm:h-[65vh] lg:h-[100%]">
          <Image
            src={form.backgroundImage}
            alt={form.backgroundImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#342b29]/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-100px] top-[20%] h-72 w-72 rounded-full bg-[#8c5b53]/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1600px] grid min-h-screen grid-cols-1 items-start px-4 pb-8 pt-[22vh] sm:px-8 sm:pt-[24vh] lg:grid-cols-12 lg:px-12 lg:pt-[22vh]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hidden self-center pr-10 text-[#000] lg:col-span-4 lg:block"
          >

            <h1 className="mt-7 font-serif text-6xl leading-[1.08] xl:text-7xl">
              {content.title[0]}
              <br />
              {content.title[1]}
            </h1>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#000] bg-white/10 backdrop-blur-md">
                  <Mail size={21} />
                </div>
                <div>
                  <p className="text-sm text-[[#000]]">{form.emailLabel}</p>
                  <p className="mt-1 font-medium">{form.emailValue}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                  <Phone size={21} />
                </div>
                <div>
                  <p className="text-sm text-[[#000]]">{form.phoneLabel}</p>
                  <p className="mt-1 font-medium">{form.phoneValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 55,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.15,
              ease: "easeOut",
            }}
            className="relative col-span-1 w-full rounded-2xl border border-[[#000]] bg-[#dce8eb]/95 p-5 shadow-[0_25px_80px_rgba(25,35,36,0.13)] backdrop-blur-xl sm:rounded-[24px] sm:p-8 md:p-10 lg:col-span-8 lg:col-start-5 lg:p-8 xl:p-10"
          >
            {/* Mobile heading */}
            <div className="mb-8 lg:hidden">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c5b53]">
                {form.mobileEyebrow}
              </span>

              <h1 className="mt-3 font-serif text-4xl leading-tight text-[#342b29] sm:text-5xl">
                {form.heading}
              </h1>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#5c6668] sm:text-base">
                {content.text}
              </p>
            </div>

            <div className="mb-8 hidden items-center justify-between lg:flex">
              <h2 className="text-xl font-medium tracking-tight text-[#273334] xl:text-2xl">
                {form.heading}
              </h2>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[[#000]] text-[#8c5b53]">
                <Send size={21} />
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[400px] flex-col items-center justify-center text-center"
              >
                <CheckCircle2
                  size={64}
                  strokeWidth={1.5}
                  className="text-[#8c5b53]"
                />

                <h2 className="mt-6 font-serif text-3xl text-[#713c34] sm:text-4xl">
                  {site.thankYou.subtitle}
                </h2>

                <p className="mt-4 max-w-md leading-7 text-[#5c6668]">
                  {site.thankYou.text.join(" ")}
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-7 rounded-full bg-[#8c5b53] px-7 py-3 font-medium text-white transition-all hover:bg-[#713c34]"
                >
                  {site.thankYou.primaryButton.label}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-7">
                  {/* First name */}
                  <div className="group">
                    <label
                      htmlFor="firstName"
                      className="mb-3 block text-base font-medium text-[#273334] transition-colors group-focus-within:text-[#8c5b53]"
                    >
                      {fields.firstName.label}{" "}
                      <span aria-hidden="true">{form.requiredMarker}</span>
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder={fields.firstName.placeholder}
                      required
                      className="h-[52px] w-full rounded-[11px] border border-[#374344] bg-transparent px-4 text-base text-[#273334] outline-none transition-all duration-300 placeholder:text-sm placeholder:text-[#849092] hover:border-[#8c5b53]/70 focus:border-[#8c5b53] focus:bg-white/50 focus:ring-4 focus:ring-[#8c5b53]/10"
                    />
                  </div>

                  {/* Last name */}
                  <div className="group">
                    <label
                      htmlFor="lastName"
                      className="mb-3 block text-base font-medium text-[#273334] transition-colors group-focus-within:text-[#8c5b53]"
                    >
                      {fields.lastName.label}{" "}
                      <span aria-hidden="true">{form.requiredMarker}</span>
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder={fields.lastName.placeholder}
                      required
                      className="h-[52px] w-full rounded-[11px] border border-[#374344] bg-transparent px-4 text-base text-[#273334] outline-none transition-all duration-300 placeholder:text-sm placeholder:text-[#849092] hover:border-[#8c5b53]/70 focus:border-[#8c5b53] focus:bg-white/50 focus:ring-4 focus:ring-[#8c5b53]/10"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#273334] transition-colors group-focus-within:text-[#8c5b53]"
                    >
                      {fields.email.label}{" "}
                      <span aria-hidden="true">{form.requiredMarker}</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={fields.email.placeholder}
                      required
                      className="h-[52px] w-full rounded-[11px] border border-[#374344] bg-transparent px-4 text-base text-[#273334] outline-none transition-all duration-300 placeholder:text-sm placeholder:text-[#849092] hover:border-[#8c5b53]/70 focus:border-[#8c5b53] focus:bg-white/50 focus:ring-4 focus:ring-[#8c5b53]/10"
                    />
                  </div>

                  {/* Phone number */}
                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-base font-medium text-[#273334] transition-colors group-focus-within:text-[#8c5b53]"
                    >
                      {fields.phone.label}{" "}
                      <span aria-hidden="true">{form.requiredMarker}</span>
                    </label>

                    <div className="relative flex h-[52px] items-center rounded-[11px] border border-[#374344] transition-all duration-300 hover:border-[#8c5b53]/70 focus-within:border-[#8c5b53] focus-within:bg-white/50 focus-within:ring-4 focus-within:ring-[#8c5b53]/10">
                      <button
                        type="button"
                        aria-label={fields.phone.countryButtonLabel}
                        aria-expanded={isCountryOpen}
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                        className="flex h-full shrink-0 items-center gap-2 rounded-l-[11px] px-3 text-[#374344] transition-colors hover:text-[#8c5b53]"
                      >
                        <Globe2 size={21} strokeWidth={1.5} />
                        <span className="text-sm">{countryCode}</span>
                        <ChevronDown size={15} />
                      </button>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel-national"
                        inputMode="tel"
                        placeholder={fields.phone.placeholder}
                        required
                        className="h-full min-w-0 flex-1 rounded-r-[11px] bg-transparent px-2 text-base text-[#273334] outline-none placeholder:text-sm placeholder:text-[#849092]"
                      />

                      {isCountryOpen && (
                        <div className="absolute left-0 top-[calc(100%+8px)] z-20 w-56 overflow-hidden rounded-xl border border-[#8c5b53]/15 bg-white py-2 shadow-xl">
                          {form.countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setCountryCode(country.code);
                                setIsCountryOpen(false);
                              }}
                              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-[#273334] transition-colors hover:bg-[#f6ebe6] hover:text-[#8c5b53]"
                            >
                              <span>{country.name}</span>
                              <span>{country.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-medium text-[#273334] transition-colors group-focus-within:text-[#8c5b53]"
                    >
                      {fields.message.label}
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={fields.message.placeholder}
                      className="min-h-[115px] w-full resize-y rounded-[11px] border border-[#374344] bg-transparent px-4 py-3 text-base text-[#273334] outline-none transition-all duration-300 placeholder:text-sm placeholder:text-[#849092] hover:border-[#8c5b53]/70 focus:border-[#8c5b53] focus:bg-white/50 focus:ring-4 focus:ring-[#8c5b53]/10 sm:min-h-[130px]"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-7 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center">
                  <motion.button
                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    type="submit"
                    className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-[#8c5b53] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#8c5b53]/15 transition-all duration-300 hover:bg-[#713c34] hover:shadow-xl sm:w-[270px]"
                  >
                    {form.submitLabel}
                    <ArrowRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
