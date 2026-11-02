"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { site } from "@/data";

const normalizePath = (path: string) => path === "/" ? "/" : path.replace(/\/+$/, "");

export default function Navbar() {
  const navLinks = site.nav.links;
  const mobileMenu = site.site.mobileMenu;
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = normalizePath(pathname ?? "/");

  const isNavLinkActive = (href: string) => {
    const normalizedHref = normalizePath(href);

    if (normalizedHref === "/") {
      return currentPath === "/";
    }

    return (
      currentPath === normalizedHref ||
      currentPath.startsWith(`${normalizedHref}/`)
    );
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10 lg:py-6 xl:px-14">
        <Link
          href={site.nav.links[0].href}
          aria-label={`${site.site.name} home`}
          className="relative z-10 flex h-12 w-[148px] shrink-0 items-center justify-center rounded-full bg-[#8c5b53] px-4 transition-transform duration-300 hover:scale-[1.03] sm:h-14 sm:w-[184px]"
        >
          <Image
            src={site.site.logoWhite}
            alt={site.site.name}
            fill
            sizes="184px"
            className="object-contain px-4 py-2"
            priority
          />
        </Link>

        <nav
          aria-label={site.nav.ariaLabel}
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-[#fdf2f7]/95 px-3 py-2 shadow-sm backdrop-blur-md lg:flex"
        >
          {navLinks.map((link, index) => {
            const isActive = isNavLinkActive(link.href);

            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold tracking-[0.04em] transition-colors duration-200 2xl:px-4 2xl:text-base ${
                    isActive
                      ? "bg-white/70 text-[#8c5b53]"
                      : "text-[#71504a] hover:bg-white/60 hover:text-[#8c5b53]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div
          className="relative z-10 hidden lg:block"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <Link
          href={site.nav.button.href}
            className="flex min-h-12 items-center justify-center rounded-full bg-[#fdf2f7] px-7 text-sm font-medium text-[#71504a] shadow-sm transition-colors duration-200 hover:bg-white sm:min-h-14 sm:min-w-[172px] sm:text-base"
          >
            {site.nav.button.label}
          </Link>
        </motion.div>

        <button
          type="button"
          aria-label={menuOpen ? mobileMenu.closeLabel : mobileMenu.openLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#f9dce9] bg-white/90 text-[#8c5b53] shadow-sm transition-colors hover:bg-[#fdf2f7] lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label={mobileMenu.ariaLabel}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-4 overflow-hidden rounded-2xl border border-[#f9dce9] bg-white/95 shadow-lg backdrop-blur-md sm:mx-6 lg:hidden"
          >
            <div className="px-5 pb-5 pt-2">
              {navLinks.map((link, index) => {
                const isActive = isNavLinkActive(link.href);

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-slate-100 py-3.5 text-sm font-semibold transition-colors hover:text-[#8c5b53] ${
                        isActive ? "text-[#8c5b53]" : "text-slate-600"
                      }`}
                    >
                      {link.label}
                      <ArrowRight size={16} className="opacity-60" />
                    </Link>
                  </motion.div>
                );
              })}

              <Link
                href={mobileMenu.contactHref}
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex w-full items-center justify-center rounded-full bg-[#8c5b53] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#754840]"
              >
                {mobileMenu.contactLabel}
              </Link>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-500">
                <a href={mobileMenu.phoneHref} className="flex items-center gap-2">
                  <Phone size={14} className="text-[#8c5b53]" />
                  {mobileMenu.phoneLabel}
                </a>
                <a
                  href={mobileMenu.emailHref}
                  className="flex items-center gap-2"
                >
                  <Mail size={14} className="text-[#8c5b53]" />
                  {mobileMenu.emailLabel}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
