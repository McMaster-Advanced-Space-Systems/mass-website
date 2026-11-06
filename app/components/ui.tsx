import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/* Shared building blocks for the content pages (project pages, About, Our
   Team) so they read as one system. Fonts come from the root layout. */

export const DISPLAY = "var(--font-michroma), sans-serif";
export const MONO = "var(--font-space-mono), ui-monospace, monospace";
export const BODY =
  '"Akzidenz-Grotesk", "Akzidenz-Grotesk Pro", var(--font-inter), "Helvetica Neue", Arial, sans-serif';

/* globals.css sets an unlayered h1–h6 font that utility classes cannot
   override, so card titles take the body face inline. */
export const TITLE = { fontFamily: BODY };

export const CARD = "rounded-2xl border border-white/10";
export const CARD_BG = { backgroundColor: "var(--mass-surface)" };

export function Eyebrow({
  children,
  color = "var(--mass-highlight)",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <p className="text-[0.7rem] tracking-[0.18em] uppercase" style={{ fontFamily: MONO, color }}>
      {children}
    </p>
  );
}

/* A page section: Michroma heading, small mono note on the right, and a rule
   above. */
export function Section({
  heading,
  eyebrow,
  children,
}: {
  heading: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-white/[0.07] py-16 sm:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <h2
          style={{
            fontFamily: DISPLAY,
            color: "var(--mass-paper)",
            fontSize: "clamp(1.35rem, 2.6vw, 1.9rem)",
            lineHeight: 1.2,
          }}
        >
          {heading}
        </h2>
        {eyebrow && (
          <p className="text-xs tracking-[0.08em] text-slate-500" style={{ fontFamily: MONO }}>
            {eyebrow}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

/* Small status chip: a dot, then a short label. Active ones read in the
   highlight colour. */
export function Pill({ active = false, children }: { active?: boolean; children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.65rem] tracking-[0.14em] uppercase"
      style={{
        fontFamily: MONO,
        color: active ? "var(--mass-highlight)" : "var(--mass-paper)",
        borderColor: active ? "rgba(247,144,31,0.5)" : "rgba(245,245,245,0.3)",
        backgroundColor: "rgba(10,10,10,0.6)",
      }}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: active ? "var(--mass-highlight)" : "var(--mass-primary)" }}
      />
      {children}
    </span>
  );
}

/* Wide photo banner that opens a page. */
export function Banner({
  src,
  alt,
  position,
  pill,
  caption,
  credit,
}: {
  src: StaticImageData | string;
  alt: string;
  /** CSS object-position, to keep faces in frame when cropped. */
  position?: string;
  pill?: string;
  caption: string;
  credit?: string;
}) {
  return (
    <div className={`animate-fade-up relative h-[19rem] overflow-hidden sm:h-[26rem] ${CARD}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        placeholder={typeof src === "string" ? undefined : "blur"}
        sizes="(max-width: 1344px) 100vw, 1344px"
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.1) 60%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-8">
        <div>
          {pill && <Pill>{pill}</Pill>}
          <p className="mt-3 text-lg font-semibold text-white sm:text-2xl">{caption}</p>
        </div>
        {credit && (
          <span
            className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] tracking-[0.1em] text-slate-300"
            style={{ fontFamily: MONO, backgroundColor: "rgba(10,10,10,0.6)" }}
          >
            {credit}
          </span>
        )}
      </div>
    </div>
  );
}

/* Same look as the homepage hero buttons and the contact form's submit
   button: Space Mono capitals with an arrow, square corners. */
export function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mass-paper)]";
  const look =
    variant === "primary"
      ? "bg-[var(--mass-paper)] text-[var(--mass-ink)] hover:bg-white/80"
      : "border border-white/40 text-[var(--mass-paper)] hover:border-[var(--mass-paper)] hover:bg-white/10";
  return (
    <Link href={href} className={`${base} ${look}`} style={{ fontFamily: MONO }}>
      {children} <span aria-hidden>→</span>
    </Link>
  );
}

/* Closing call to action at the bottom of a page. */
export function CtaBand({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`mt-4 flex flex-wrap items-center justify-between gap-x-12 gap-y-8 p-8 sm:p-12 ${CARD}`}
      style={CARD_BG}
    >
      <div className="max-w-2xl">
        <div className="mb-6 h-[3px] w-14" style={{ backgroundColor: "var(--mass-secondary)" }} />
        <h2
          style={{
            fontFamily: DISPLAY,
            color: "var(--mass-paper)",
            fontSize: "clamp(1.35rem, 2.6vw, 1.9rem)",
            lineHeight: 1.25,
          }}
        >
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-300">{body}</p>
      </div>
      <div className="flex flex-wrap gap-4">{children}</div>
    </section>
  );
}
