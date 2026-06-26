import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Competitions", href: "/competitions" },
];

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
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              McMaster Advanced Space Systems
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              Designing, building, and testing autonomous technologies for various challenges.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="md:justify-self-center">
            <h3 className="text-sm uppercase tracking-[0.32em] text-slate-400">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-200 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="md:justify-self-end">
            <h3 className="text-sm uppercase tracking-[0.32em] text-slate-400">Connect</h3>
            <a
              href="https://www.instagram.com/mcmasteradvancedspacesystems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MASS on Instagram"
              className="mt-4 inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-white transition-colors hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2Zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.5a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm4.95-.3a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
              </svg>
              @mac.spacesystems
            </a>
          </div>
        </div>

        <div className="mt-18 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © 2026 McMaster Advanced Space Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
