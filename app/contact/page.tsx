"use client";

import { useState } from "react";
import Link from "next/link";

type InquiryType = "sponsorship" | "outreach" | "general" | "";

/* MASS branding standards 2025-2026
   Red #bf472f and Blue #1050bf are decorative colours only, never font
   colours. Yellow #f7901f is the highlight colour and may be set in type.
   Dark Azure #101010 and Light Gray #f5f5f5 are the text colours, and the
   background colours when inverted.
   Michroma: logo and titles. Space Mono: highlights. Akzidenz-Grotesk:
   subtitles and body text. */
const INK = "#101010";
const PAPER = "#f5f5f5";
const BLUE = "#1050bf";
const RED = "#bf472f";
const YELLOW = "#f7901f";

const DISPLAY = "var(--font-michroma), sans-serif";
const HIGHLIGHT = "var(--font-space-mono), ui-monospace, monospace";
const BODY =
  '"Akzidenz-Grotesk", "Akzidenz-Grotesk Pro", var(--font-inter), "Helvetica Neue", Arial, sans-serif';

const INQUIRY_OPTIONS = [
  { value: "sponsorship", label: "Sponsorship" },
  { value: "outreach",    label: "Outreach"    },
  { value: "general",     label: "General"     },
] as const;

const NAV_LINKS = [
  { href: "/",            label: "Home"        },
  { href: "/team",        label: "Our Team"    },
  { href: "/project",     label: "Project"     },
  { href: "/sponsors",    label: "Sponsors"    },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/contact",     label: "Contact Us"  },
  { href: "/data",        label: "Data"        },
];

const FIELD_LABEL: React.CSSProperties = {
  fontFamily: HIGHLIGHT,
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  color: INK,
  fontWeight: 700,
  display: "block",
  marginBottom: "0.55rem",
};

/* Dark Azure text with a red marker — red carries the signal decoratively
   rather than as a font colour. */
const FIELD_ERROR: React.CSSProperties = {
  fontFamily: HIGHLIGHT,
  fontSize: "0.72rem",
  color: INK,
  marginTop: "0.5rem",
  display: "flex",
  alignItems: "baseline",
  gap: "0.45rem",
};

const ERROR_MARK: React.CSSProperties = {
  display: "block",
  width: "0.4rem",
  height: "0.4rem",
  backgroundColor: RED,
  flex: "none",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: "" as InquiryType,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  function validate() {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  function selectInquiry(value: InquiryType) {
    setForm(prev => ({ ...prev, inquiry: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      // TODO: Replace with your submission endpoint (Formspree, EmailJS, or /api/contact)
      await new Promise(res => setTimeout(res, 800));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function resetForm() {
    setStatus("idle");
    setErrors({});
    setForm({ name: "", email: "", inquiry: "", message: "" });
  }

  return (
    <>
      <style>{`
        .contact-nav-link { color: rgba(245,245,245,0.6); transition: color 0.15s ease; text-decoration: none; }
        .contact-nav-link[data-active] { color: ${YELLOW}; font-weight: 700; }
        .contact-nav-link:hover { color: rgba(245,245,245,0.9); }
        .contact-nav-link[data-active]:hover { color: ${YELLOW}; }
        .contact-btn-submit:hover:not(:disabled) { background-color: ${RED}; }
        .contact-btn-submit:focus-visible { outline: 2px solid ${BLUE}; outline-offset: 3px; }
        .contact-pill:focus-visible { outline: 2px solid ${BLUE}; outline-offset: 2px; }
        .contact-input[aria-invalid="true"] { border-bottom-color: ${RED}; }
        .contact-input[aria-invalid="true"]:focus { border-color: ${RED}; }
        @media (prefers-reduced-motion: reduce) {
          .contact-nav-link, .contact-btn-submit, .contact-pill { transition: none; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", backgroundColor: PAPER }}>

        {/* Navbar */}
        <nav style={{ backgroundColor: INK, position: "sticky", top: 0, zIndex: 50 }}>
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
                fontFamily: DISPLAY,
                color: PAPER,
                fontSize: "1.05rem",
                letterSpacing: "0.05em",
              }}
            >
              MASS
            </span>

            {/* Desktop links */}
            <div className="hidden md:flex" style={{ gap: "2rem" }}>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={link.href === "/contact" ? "" : undefined}
                  className="contact-nav-link"
                  style={{
                    fontFamily: HIGHLIGHT,
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
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
              <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: PAPER, transition: "transform 0.2s ease", transform: mobileOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
              <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: PAPER, transition: "opacity 0.15s ease", opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: PAPER, transition: "transform 0.2s ease", transform: mobileOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div
              id="mobile-menu"
              className="md:hidden"
              style={{ backgroundColor: INK, borderTop: "1px solid rgba(245,245,245,0.08)", padding: "0.5rem 2rem 1.25rem" }}
            >
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  data-active={link.href === "/contact" ? "" : undefined}
                  className="contact-nav-link"
                  style={{
                    fontFamily: HIGHLIGHT,
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    display: "block",
                    padding: "0.7rem 0",
                    borderBottom: "1px solid rgba(245,245,245,0.06)",
                  }}
                >
                  {link.label.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* Page header */}
        <header style={{ backgroundColor: INK, padding: "5.5rem 2rem 5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: HIGHLIGHT,
                color: "rgba(245,245,245,0.45)",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                marginBottom: "1.75rem",
              }}
            >
              MCMASTER ADVANCED SPACE SYSTEMS
            </p>

            <h1
              style={{
                fontFamily: DISPLAY,
                color: PAPER,
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                lineHeight: "1.05",
                letterSpacing: "-0.01em",
                marginBottom: "2.25rem",
              }}
            >
              Contact
              <br />
              the Team.
            </h1>

            <div style={{ width: "4.5rem", height: "3px", backgroundColor: YELLOW }} />
          </div>
        </header>

        {/* Body */}
        <div
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr]"
          style={{ maxWidth: "80rem", margin: "0 auto" }}
        >

          {/* Form column */}
          <div
            className="md:border-r"
            style={{ padding: "4rem 2rem", borderColor: "rgba(16,16,16,0.1)" }}
          >
            <div style={{ maxWidth: "36rem" }}>
              <p
                style={{
                  fontFamily: BODY,
                  color: INK,
                  fontSize: "1.05rem",
                  lineHeight: "1.9",
                  opacity: 0.7,
                  marginBottom: "3rem",
                }}
              >
                Whether you represent a company interested in sponsoring our
                research, a school looking to arrange an outreach visit, or are
                simply curious about what we&rsquo;re building: we&rsquo;d love
                to hear from you.
              </p>

              {/* Success state */}
              {status === "sent" ? (
                <div>
                  <div style={{ width: "3rem", height: "3px", backgroundColor: RED, marginBottom: "2rem" }} />
                  <p
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: "1.5rem",
                      lineHeight: "1.3",
                      color: INK,
                      marginBottom: "1rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Message received.
                  </p>
                  <p
                    style={{
                      fontFamily: BODY,
                      color: INK,
                      opacity: 0.55,
                      lineHeight: "1.75",
                      marginBottom: "2.5rem",
                    }}
                  >
                    We&rsquo;ll be in touch soon. Thank you for reaching out.
                  </p>
                  <button
                    onClick={resetForm}
                    style={{
                      fontFamily: HIGHLIGHT,
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      color: INK,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textDecoration: "underline",
                      textDecorationColor: YELLOW,
                      textDecorationThickness: "1.5px",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>

              ) : (

                /* Form */
                <form onSubmit={handleSubmit} noValidate>

                  {/* Name + Email */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: "2.25rem 2rem", marginBottom: "2.25rem" }}
                  >
                    <div>
                      <label htmlFor="name" style={FIELD_LABEL}>NAME</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="contact-input"
                      />
                      {errors.name && (
                        <span id="name-error" role="alert" style={FIELD_ERROR}>
                          <span style={ERROR_MARK} />
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" style={FIELD_LABEL}>EMAIL</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="contact-input"
                      />
                      {errors.email && (
                        <span id="email-error" role="alert" style={FIELD_ERROR}>
                          <span style={ERROR_MARK} />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Inquiry type */}
                  <div style={{ marginBottom: "2.25rem" }}>
                    <p id="inquiry-label" style={FIELD_LABEL}>INQUIRY TYPE</p>
                    <div role="group" aria-labelledby="inquiry-label" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {INQUIRY_OPTIONS.map(opt => {
                        const active = form.inquiry === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => selectInquiry(opt.value)}
                            aria-pressed={active}
                            className="contact-pill"
                            style={{
                              fontFamily: HIGHLIGHT,
                              fontSize: "0.7rem",
                              letterSpacing: "0.1em",
                              padding: "0.5rem 1.15rem",
                              border: `1.5px solid ${active ? BLUE : "rgba(16,16,16,0.22)"}`,
                              backgroundColor: active ? BLUE : "transparent",
                              color: active ? PAPER : INK,
                              cursor: "pointer",
                              transition: "all 0.15s ease",
                            }}
                          >
                            {opt.label.toUpperCase()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "2.75rem" }}>
                    <label htmlFor="message" style={FIELD_LABEL}>MESSAGE</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="contact-input"
                    />
                    {errors.message && (
                      <span id="message-error" role="alert" style={FIELD_ERROR}>
                        <span style={ERROR_MARK} />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="contact-btn-submit"
                      style={{
                        fontFamily: HIGHLIGHT,
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                        padding: "0.9rem 2.25rem",
                        backgroundColor: BLUE,
                        color: PAPER,
                        border: "none",
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        opacity: status === "sending" ? 0.55 : 1,
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      {status === "sending" ? "SENDING..." : "SEND MESSAGE →"}
                    </button>

                    {status === "error" && (
                      <p role="alert" style={FIELD_ERROR}>
                        <span style={ERROR_MARK} />
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </div>

                </form>
              )}
            </div>
          </div>

          {/* Info panel */}
          <div
            className="md:sticky md:top-16 md:self-start"
            style={{ backgroundColor: BLUE, padding: "4rem 2.5rem" }}
          >
            <p
              style={{
                fontFamily: HIGHLIGHT,
                color: PAPER,
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                opacity: 0.6,
                marginBottom: "2.5rem",
              }}
            >
              CAN-SBX 2026–2027
            </p>

            <h2
              style={{
                fontFamily: DISPLAY,
                color: PAPER,
                fontSize: "1.5rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
              }}
            >
              Sending science to the stratosphere.
            </h2>

            <p
              style={{
                fontFamily: BODY,
                color: PAPER,
                fontSize: "0.95rem",
                lineHeight: "1.85",
                opacity: 0.82,
                marginBottom: "3rem",
              }}
            >
              We&rsquo;re always open to conversations with sponsors, educators,
              and curious minds. Whether it&rsquo;s a funding discussion, a
              classroom visit, or just a question about our experiment: reach
              out.
            </p>

            <div
              style={{
                borderTop: "1px solid rgba(245,245,245,0.2)",
                paddingTop: "2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: HIGHLIGHT,
                    color: PAPER,
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    opacity: 0.6,
                    marginBottom: "0.45rem",
                  }}
                >
                  EMAIL
                </p>
                <a
                  href="mailto:mass@mcmaster.ca"
                  style={{
                    fontFamily: BODY,
                    color: PAPER,
                    fontSize: "0.92rem",
                    textDecoration: "underline",
                    textDecorationColor: YELLOW,
                    textDecorationThickness: "1.5px",
                    textUnderlineOffset: "3px",
                  }}
                >
                  mass@mcmaster.ca
                </a>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: HIGHLIGHT,
                    color: PAPER,
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    opacity: 0.6,
                    marginBottom: "0.45rem",
                  }}
                >
                  LOCATION
                </p>
                <p
                  style={{
                    fontFamily: BODY,
                    color: PAPER,
                    fontSize: "0.92rem",
                    lineHeight: "1.65",
                  }}
                >
                  McMaster University
                  <br />
                  Hamilton, Ontario
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: HIGHLIGHT,
                    color: PAPER,
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    opacity: 0.6,
                    marginBottom: "0.45rem",
                  }}
                >
                  OUTREACH
                </p>
                <p
                  style={{
                    fontFamily: BODY,
                    color: PAPER,
                    fontSize: "0.92rem",
                    lineHeight: "1.65",
                    opacity: 0.82,
                  }}
                >
                  Available for school visits and community events. Select
                  &ldquo;Outreach&rdquo; in the form to get started.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
