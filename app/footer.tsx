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
      <div className="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <h2 className="text-base font-semibold tracking-tight text-white">
              McMaster Advanced Space Systems
            </h2>
            <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
              Designing, building, and testing autonomous technologies for various challenges.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs uppercase tracking-[0.32em] text-slate-400">Connect</h3>
            <a
              href="https://www.instagram.com/mcmasteradvancedspacesystems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MASS on Instagram"
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2Zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.5a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm4.95-.3a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
              </svg>
              @mac.spacesystems
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-slate-400">
          © 2026 McMaster Advanced Space Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
