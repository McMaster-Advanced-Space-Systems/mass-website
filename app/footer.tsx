import Image from "next/image";

// Simple Icons paths (24×24).
const LINKS = [
  {
    label: "Instagram",
    handle: "@mac.spacesystems",
    href: "https://www.instagram.com/mcmasteradvancedspacesystems",
    icon: "M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2Zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.5a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm4.95-.3a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z",
  },
  {
    label: "LinkedIn",
    handle: "McMaster Advanced Space Systems",
    href: "https://www.linkedin.com/company/mcmaster-advanced-space-systems/home/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "TikTok",
    handle: "@mac.advancedspacesystems",
    href: "https://www.tiktok.com/@mac.advancedspacesystems",
    icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
  {
    label: "Email",
    handle: "mass@mcmaster.ca",
    href: "mailto:mass@mcmaster.ca",
    icon: "M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.51l10 6.25 10-6.25V6H2Zm20 2.87-10 6.25-10-6.25V18h20V8.87Z",
  },
];

function SocialLink({ link }: { link: (typeof LINKS)[number] }) {
  const external = link.href.startsWith("http");
  return (
    <a
      href={link.href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      aria-label={`MASS on ${link.label}`}
      className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-1 text-sm text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5 shrink-0">
        <path d={link.icon} />
      </svg>
      <span className="font-semibold text-white">{link.label}</span>
      <span className="truncate text-xs text-slate-400">{link.handle}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{
        backgroundColor: "var(--mass-black)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        color: "var(--mass-white)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-5 sm:px-10">
        <div className="grid items-center gap-4 md:grid-cols-3">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Image src="/emblem.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <h2 className="text-base font-semibold tracking-tight text-white">
              McMaster Advanced
              <br />
              Space Systems
            </h2>
          </div>

          {/* Connect spans the middle + right columns; its links split 2/2. */}
          <div className="md:col-span-2">
            <h3 className="px-3 text-xs uppercase tracking-[0.32em] text-slate-400">Connect</h3>
            <div className="mt-1 grid sm:grid-cols-2">
              <div className="flex flex-col">
                {LINKS.slice(0, 2).map((link) => (
                  <SocialLink key={link.label} link={link} />
                ))}
              </div>
              <div className="flex flex-col">
                {LINKS.slice(2).map((link) => (
                  <SocialLink key={link.label} link={link} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-3 text-center text-xs text-slate-400">
          © 2026 McMaster Advanced Space Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
