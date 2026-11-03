"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Heart,
  CheckCircle2,
  ChevronDown,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Video,
} from "lucide-react";
import { site } from "@/data";

const pointIcons = {
  heart: Heart,
  "shield-check": ShieldCheck,
};

const appointmentIcons = {
  "In-clinic": Heart,
  Online: Video,
};

export default function BookNowForm() {
  const page = site.enquire;
  const form = site.Insurance.commerce.enquiryNow.section.form;
  const fields = form.fields;
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [appointmentType, setAppointmentType] = useState(
    fields.appointmentType.options[0].value,
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");


  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf7] text-[#332a28] w-[100%]">
      <section id="book-appointment" className="relative flex min-h-screen items-center py-12 sm:py-16 lg:py-8 px-6 sm:px-6 lg:px-10 xl:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 top-10 h-96 w-96 rounded-full bg-[#ead6ce]/45 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#8c5b53]/10 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-20">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative"
          >
            <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[#302624] sm:text-5xl lg:text-6xl">
              {page.title[0]}
              <br />
              <span className="italic text-[#8c5b53]">{page.title[1]}</span>
              <br />
              {page.highlight}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#786c67] sm:text-lg sm:leading-9">
              {page.text}
            </p>

            
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
              {page.points.slice(0, 2).map((point) => {
                const Icon = pointIcons[point.icon as keyof typeof pointIcons];
                if (!Icon) {
                  throw new Error(`Unknown appointment benefit icon: ${point.icon}`);
                }

                return (
                  <motion.div
                    key={point.title}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    className="rounded-2xl border border-[#8c5b53]/10 bg-white/80 p-4 shadow-sm transition-shadow hover:shadow-lg sm:p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f3e5df] text-[#8c5b53] sm:h-14 sm:w-14">
                      <Icon size={28} strokeWidth={1.7} />
                    </div>
                    <h2 className="mt-4 font-serif text-xl text-[#713c34] sm:text-2xl">
                      {point.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#82746e]">
                      {point.text.join(" ")}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 35,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.12,
              ease: "easeOut",
            }}
            className="relative rounded-[26px] border border-white bg-[#ffffff]/90 p-5 shadow-[0_25px_90px_rgba(83,48,39,0.12)] backdrop-blur-xl sm:rounded-[32px] sm:p-8 lg:p-7 xl:p-9"
          >
            
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c5b53] sm:text-sm">
                  {form.eyebrow}
                </p>
                <h2 className="mt-2 font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl">
                  {form.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#82746e] sm:text-base">
                  {form.description}
                </p>
              </div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -5, 0], rotate: [0, 4, 0] }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f3e5df] text-[#8c5b53] sm:flex sm:h-16 sm:w-16"
              >
                <CalendarDays size={32} strokeWidth={1.6} />
              </motion.div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[390px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f3e5df] text-[#8c5b53]">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>

                <h3 className="mt-6 font-serif text-3xl text-[#713c34] sm:text-4xl">
                  {form.appointment.successTitle}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#82746e] sm:text-base">
                  {form.appointment.successText}
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-[#8c5b53] px-7 py-3.5 font-semibold text-white transition-all hover:bg-[#713c34]"
                >
                  {form.appointment.successButton}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-semibold text-[#493a36]"
                    >
                      {fields.fullName.label}
                    </label>
                    <div className="relative">
                      <UserRound
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a58a81]"
                      />
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        placeholder={fields.fullName.placeholder}
                        required
                        className="h-12 w-full rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] pl-11 pr-4 text-sm outline-none transition-all placeholder:text-[#b2a19b] hover:border-[#8c5b53]/50 focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-semibold text-[#493a36]"
                    >
                      {fields.lastName.label}
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder={fields.lastName.placeholder}
                      required
                      className="h-12 w-full rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] px-4 text-sm outline-none transition-all placeholder:text-[#b2a19b] hover:border-[#8c5b53]/50 focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                    />
                  </div>
                </div>

                
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#493a36]"
                    >
                      {fields.email.label}
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a58a81]"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder={fields.email.placeholder}
                        required
                        className="h-12 w-full rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] pl-11 pr-4 text-sm outline-none transition-all placeholder:text-[#b2a19b] hover:border-[#8c5b53]/50 focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#493a36]"
                    >
                      {fields.phone.label}
                    </label>
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a58a81]"
                      />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder={fields.phone.placeholder}
                        required
                        className="h-12 w-full rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] pl-11 pr-4 text-sm outline-none transition-all placeholder:text-[#b2a19b] hover:border-[#8c5b53]/50 focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                      />
                    </div>
                  </div>
                </div>


                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-[#493a36]"
                  >
                    {fields.interest.label}
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] px-4 pr-11 text-sm text-[#493a36] outline-none transition-all hover:border-[#8c5b53]/50 focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                    >
                      <option value="" disabled>
                        {fields.interest.placeholder}
                      </option>
                      {fields.interest.options.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8c5b53]"
                    />
                  </div>
                </div>

                
                <div>
                  <label
                    htmlFor="doctor"
                    className="mb-2 block text-sm font-semibold text-[#493a36]"
                  >
                    {fields.doctor.label}
                  </label>
                  <div className="relative">
                    <select
                      id="doctor"
                      name="doctor"
                      defaultValue={fields.doctor.options[0]}
                      className="h-12 w-full appearance-none rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] px-4 pr-11 text-sm text-[#493a36] outline-none transition-all hover:border-[#8c5b53]/50 focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                    >
                      {fields.doctor.options.map((doctor) => (
                        <option key={doctor} value={doctor}>
                          {doctor}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8c5b53]"
                    />
                  </div>
                </div>

                
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-semibold text-[#493a36]"
                    >
                      {fields.date.label}
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={selectedDate}
                      onChange={(event) => {
                        setSelectedDate(event.target.value);
                        setSelectedTime("");
                      }}
                      required
                      className="h-12 w-full rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] px-3 text-sm text-[#493a36] outline-none transition-all focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block text-sm font-semibold text-[#493a36]"
                    >
                      {fields.time.label}
                    </label>
                    <div className="relative">
                      <select
                        id="time"
                        name="time"
                        value={selectedTime}
                        onChange={(event) =>
                          setSelectedTime(event.target.value)
                        }
                        required
                        className="h-12 w-full appearance-none rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] px-4 pr-10 text-sm text-[#493a36] outline-none transition-all focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                      >
                        <option value="" disabled>
                          {fields.time.placeholder}
                        </option>

                        {fields.time.options.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      <Clock3
                        size={17}
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8c5b53]"
                      />
                    </div>
                  </div>
                </div>

               
                <fieldset>
                  <legend className="mb-3 text-sm font-semibold text-[#493a36]">
                    {fields.appointmentType.label}
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {fields.appointmentType.options.map((option) => {
                      const Icon =
                        appointmentIcons[
                          option.value as keyof typeof appointmentIcons
                        ];
                      if (!Icon) {
                        throw new Error(
                          `Unknown appointment type: ${option.value}`,
                        );
                      }
                      const active = appointmentType === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setAppointmentType(option.value)}
                          aria-pressed={active}
                          className={`flex min-h-[58px] items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-all duration-300 ${
                            active
                              ? "border-[#8c5b53] bg-[#f6eae5] text-[#713c34] shadow-sm"
                              : "border-[#8c5b53]/15 bg-white text-[#82746e] hover:border-[#8c5b53]/50 hover:bg-[#fffaf7]"
                          }`}
                        >
                          <Icon size={20} />
                          <span>{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <input
                    type="hidden"
                    name="appointmentType"
                    value={appointmentType}
                  />
                </fieldset>

                
                <div>
                  <label
                    htmlFor="notes"
                    className="mb-2 block text-sm font-semibold text-[#493a36]"
                  >
                    {fields.message.label}
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={2}
                    placeholder={fields.message.placeholder}
                    className="min-h-[78px] w-full resize-y rounded-xl border border-[#8c5b53]/20 bg-[#fffdfb] px-4 py-3 text-sm outline-none transition-all placeholder:text-[#b2a19b] hover:border-[#8c5b53]/50 focus:border-[#8c5b53] focus:ring-4 focus:ring-[#8c5b53]/10"
                  />
                </div>

                
                <motion.button
                  type="submit"
                  whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                  className="group flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#8c5b53] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#8c5b53]/20 transition-all duration-300 hover:bg-[#713c34] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8c5b53]/25"
                >
                  {form.appointment.submitLabel}
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#92817a]">
                  <ShieldCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-[#8c5b53]"
                  />
                  {form.privacyNotice}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
