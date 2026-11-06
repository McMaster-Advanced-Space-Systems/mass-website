import type { ReactNode } from "react";
import Nav from "../nav";
import Footer from "../footer";
import { BODY } from "./ui";

/* Page frame for the content pages: nav, footer, and a main area that
   clears the fixed nav and holds content at the shared page width. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        backgroundColor: "var(--mass-ink)",
        backgroundImage: "radial-gradient(ellipse 80% 40rem at 50% 0, rgba(245, 245, 245, 0.05), transparent)",
        fontFamily: BODY,
        color: "var(--mass-paper)",
      }}
    >
      <Nav />
      <main className="flex-1 px-4 pt-28 pb-16 sm:px-8 sm:pt-32">
        <div className="mx-auto w-full max-w-page">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
