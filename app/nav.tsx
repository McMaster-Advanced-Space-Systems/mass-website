"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PROJECTS } from "./projects/data";

const NAV_LINKS = [
  { label: "CONTACT US", href: "/contact" },
  { label: "OUR TEAM", href: "/our-team" },
  { label: "ABOUT US", href: "/about" },
];

const PROJECT_GROUPS = [
  { label: "CURRENT", status: "current" },
  { label: "PAST", status: "past" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => href !== "#" && pathname === href;
  const isProjectsActive = pathname.startsWith("/projects");

  const linkClass = (href: string) =>
    `rounded-lg px-3 py-2 text-xs font-semibold transition-colors lg:text-sm ${
      isActive(href)
        ? "bg-[#f7901f]/10 text-[var(--mass-highlight)]"
        : "text-slate-200 hover:bg-[#f7901f]/10 hover:text-[var(--mass-highlight)]"
    }`;

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur"
      style={{
        backgroundColor: "rgba(16, 16, 16, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        fontFamily: "var(--font-julius-sans-one)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/emblem.png"
            alt="MASS — home"
            width={182}
            height={198}
            priority
            className="h-10 w-auto"
          />
          <span className="text-lg font-bold tracking-wide text-[var(--mass-paper)]">
            MASS
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={linkClass("/")}
          >
            HOME
          </Link>
          <div className="group relative">
            <Link
              href="/projects"
              aria-current={isProjectsActive ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors lg:text-sm ${
                isProjectsActive
                  ? "bg-[#f7901f]/10 text-[var(--mass-highlight)]"
                  : "text-slate-200 hover:bg-[#f7901f]/10 hover:text-[var(--mass-highlight)]"
              }`}
            >
              PROJECTS
            </Link>
            <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition-opacity duration-300 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-lg border border-white/10 bg-[#1a1a1a] p-3 shadow-xl">
                {PROJECT_GROUPS.map(({ label, status }) => {
                  const projects = PROJECTS.filter(
                    (project) => project.status === status,
                  );
                  if (projects.length === 0) return null;

                  return (
                    <section key={status} className="py-1">
                      <h2 className="px-3 py-2 text-[10px] font-bold tracking-wider text-slate-400">
                        {label}
                      </h2>
                      {projects.map((project) => (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="block rounded-md px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-[#f7901f]/10 hover:text-[var(--mass-highlight)] lg:text-sm"
                        >
                          {project.name}
                        </Link>
                      ))}
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
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
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-current={isActive("/") ? "page" : undefined}
            className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${
              isActive("/")
                ? "bg-[#f7901f]/10 text-[var(--mass-highlight)]"
                : "text-slate-200 hover:bg-[#f7901f]/10 hover:text-[var(--mass-highlight)]"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            aria-current={isProjectsActive ? "page" : undefined}
            className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${
              isProjectsActive
                ? "bg-[#f7901f]/10 text-[var(--mass-highlight)]"
                : "text-slate-200 hover:bg-[#f7901f]/10 hover:text-[var(--mass-highlight)]"
            }`}
          >
            PROJECTS
          </Link>
          <div className="pl-3">
            {PROJECT_GROUPS.map(({ label, status }) => {
              const projects = PROJECTS.filter(
                (project) => project.status === status,
              );
              if (projects.length === 0) return null;

              return (
                <section key={status} className="py-1">
                  <h2 className="px-3 py-2 text-[10px] font-bold tracking-wider text-slate-400">
                    {label}
                  </h2>
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      onClick={() => setOpen(false)}
                      aria-current={pathname === `/projects/${project.slug}` ? "page" : undefined}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-[#f7901f]/10 hover:text-[var(--mass-highlight)]"
                    >
                      {project.name}
                    </Link>
                  ))}
                </section>
              );
            })}
          </div>
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isActive(href) ? "page" : undefined}
              className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${
                isActive(href)
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
