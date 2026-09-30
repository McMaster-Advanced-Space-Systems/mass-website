"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import logo from "../public/logo.png";
import name from "../public/name.png";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/current-projects" },
  { label: "OUR TEAM", href: "/mass-team" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => href !== "#" && pathname === href;

  const linkClass = (href: string) =>
    `rounded-lg px-3 py-2 text-xs font-semibold transition-colors lg:text-sm ${isActive(href)
      ? "bg-[#f7901f]/10 text-[var(--mass-highlight)]"
      : "text-slate-200 hover:bg-[#f7901f]/10 hover:text-[var(--mass-highlight)]"
    }`;

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-50"
      style={{ fontFamily: "var(--font-julius-sans-one)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -bottom-20 -z-10 backdrop-blur"
        style={{
          background:
            "linear-gradient(to bottom, rgba(16, 16, 16, 0.9) 0%, rgba(16, 16, 16, 0.82) 60%, rgba(16, 16, 16, 0) 100%)",
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="MASS — McMaster Advanced Space Systems, home"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src={logo}
            alt=""
            width={591}
            height={658}
            priority
            className="h-19 w-auto"
          />
          <Image
            src={name}
            alt=""
            width={1106}
            height={338}
            priority
            className="h-13 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={linkClass(href)}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="flex flex-col gap-1 px-4 pb-4 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isActive(href) ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${isActive(href)
                  ? "bg-[#f7901f]/10 text-[var(--mass-highlight)]"
                  : "text-slate-200 hover:bg-[#f7901f]/10 hover:text-[var(--mass-highlight)]"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
