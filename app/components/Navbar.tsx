"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/",            label: "Home"        },
  { href: "/about",       label: "About"       },
  { href: "/team",        label: "Our Team"    },
  { href: "/project",     label: "Project"     },
  { href: "/sponsors",    label: "Sponsors"    },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/contact",     label: "Contact Us"  },
  { href: "/data",        label: "Data"        },
];

type NavbarProps = {
  activeHref?: string;
};

export default function Navbar({ activeHref = "/" }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .mass-nav-link {
          color: rgba(242,242,240,0.6);
          transition: color 0.15s ease;
          text-decoration: none;
        }
        .mass-nav-link[data-active] {
          color: #F2F2F0;
          font-weight: 700;
        }
        .mass-nav-link:hover {
          color: rgba(242,242,240,0.9);
        }
        .mass-nav-link[data-active]:hover {
          color: #F2F2F0;
        }
        @media (prefers-reduced-motion: reduce) {
          .mass-nav-link { transition: none; }
        }
      `}</style>

      <nav style={{ backgroundColor: "#010109", position: "sticky", top: 0, zIndex: 50 }}>
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0 2rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-archivo-narrow), sans-serif",
              color: "#F2F2F0",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.1em",
            }}
          >
            MASS
          </span>

          <div className="hidden md:flex" style={{ gap: "2rem" }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                data-active={link.href === activeHref ? "" : undefined}
                className="mass-nav-link"
                style={{
                  fontFamily: "var(--font-archivo-narrow), sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.07em",
                }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>

          <button
            className="flex md:hidden"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: "#F2F2F0", transition: "transform 0.2s ease", transform: mobileOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: "#F2F2F0", transition: "opacity 0.15s ease", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: "#F2F2F0", transition: "transform 0.2s ease", transform: mobileOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden"
            style={{ backgroundColor: "#010109", borderTop: "1px solid rgba(242,242,240,0.08)", padding: "0.5rem 2rem 1.25rem" }}
          >
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                data-active={link.href === activeHref ? "" : undefined}
                className="mass-nav-link"
                style={{
                  fontFamily: "var(--font-archivo-narrow), sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.07em",
                  display: "block",
                  padding: "0.7rem 0",
                  borderBottom: "1px solid rgba(242,242,240,0.06)",
                }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
