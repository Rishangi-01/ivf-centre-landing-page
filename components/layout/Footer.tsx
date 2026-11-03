"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { site } from "@/data";

const socialIcons: Record<string, IconType> = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebookF,
  twitter: FaTwitter,
};

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const socialLinks = site.site.socials;
  const quickLinks = [
    ...site.footer.columns[0].links.slice(1).map((link) =>
      link.label === "Contact Us" ? { ...link, label: "Contact" } : link,
    ),
  ];
  const phone = site.site.phones[0];
  const email = site.site.emails[0];
  const address = site.site.addressLines.join(" ");
  const poweredByIndex = site.footer.copyright.indexOf(" Powered By ");
  const copyright =
    poweredByIndex === -1
      ? site.footer.copyright
      : site.footer.copyright.slice(0, poweredByIndex);
  const poweredBy =
    poweredByIndex === -1
      ? null
      : site.footer.copyright.slice(poweredByIndex + 1);

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <footer
      className="relative isolate overflow-hidden bg-[#8c5b53] text-[#f7f0e9] px-6 sm:px-6 lg:px-10 xl:px-14"
      aria-label={site.footer.ariaLabel}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-[#5f3832]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px] pb-6 pt-14 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid-cols-3 lg:gap-14">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start"
          >
            <Link
              href={site.nav.links[0].href}
              aria-label={`${site.site.name} home`}
              className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
            >
              <Image
                src={site.site.logoWhite}
                alt=""
                width={184}
                height={64}
                className="w-[230px] object-contain"
              />
              {/* <span className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {site.site.name}
              </span> */}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#f7f0e9]/80 sm:text-base">
              Compassionate, personalized fertility care and advanced IVF
              treatment, supporting you at every step of your journey to
              parenthood.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = socialIcons[social.icon];
                if (!Icon) {
                  throw new Error(`Unknown footer social icon: ${social.icon}`);
                }

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                      delay: reduceMotion ? 0 : index * 0.06,
                    }}
                    whileHover={
                      reduceMotion ? undefined : { y: -4, scale: 1.06 }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 hover:border-white/50 hover:bg-white hover:text-[#8c5b53]"
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:pt-1"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
              Quick Links
            </h2>
            <nav
              aria-label={site.footer.policyAriaLabel}
              className="mt-5 flex flex-col items-start gap-3"
            >
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-[#f7f0e9]/85 transition-colors duration-300 hover:text-white"
                  >
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
              Contact Information
            </h2>
            <address className="mt-5 not-italic">
              <ul className="space-y-5">
                <li>
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="group flex items-start gap-3 text-sm text-[#f7f0e9]/85 transition-colors duration-300 hover:text-white sm:text-base"
                  >
                    <Phone
                      size={19}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-white/75 transition-colors group-hover:text-white"
                    />
                    <span>{phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-start gap-3 text-sm text-[#f7f0e9]/85 transition-colors duration-300 hover:text-white sm:text-base"
                  >
                    <Mail
                      size={19}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-white/75 transition-colors group-hover:text-white"
                    />
                    <span>{email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm leading-6 text-[#f7f0e9]/85 sm:text-base">
                  <MapPin
                    size={19}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-white/75"
                  />
                  <span>{address}</span>
                </li>
              </ul>
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mt-12 flex flex-col gap-2 border-t border-white/20 pt-5 text-sm text-[#f7f0e9]/75 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-6"
        >
          <p className="mx-auto">{copyright} {poweredBy}</p>
        </motion.div>
      </div>
    </footer>
  );
}
