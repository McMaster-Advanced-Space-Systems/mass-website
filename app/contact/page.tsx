"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../nav";
import Footer from "../footer";

type InquiryType = "sponsorship" | "outreach" | "general" | "join" | "";

const INQUIRY_OPTIONS = [
  { value: "sponsorship", label: "Sponsorship" },
  { value: "outreach",    label: "Outreach"    },
  { value: "general",     label: "General"     },
  { value: "join",        label: "Join Us"     },
] as const;

const BODY_FONT =
  '"Akzidenz-Grotesk", "Akzidenz-Grotesk Pro", var(--font-inter), "Helvetica Neue", Arial, sans-serif';

const FIELD_LABEL: React.CSSProperties = {
  fontFamily: "var(--font-space-mono), ui-monospace, monospace",
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  color: "rgba(245,245,245,0.55)",
  display: "block",
  marginBottom: "0.55rem",
};

const FIELD_ERROR: React.CSSProperties = {
  fontFamily: BODY_FONT,
  fontSize: "0.8rem",
  color: "var(--brand-gray)",
  borderLeft: "2px solid var(--brand-red)",
  paddingLeft: "0.5rem",
  marginTop: "0.4rem",
  display: "block",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: "" as InquiryType,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function selectInquiry(value: InquiryType) {
    setForm((prev) => ({ ...prev, inquiry: value }));
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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          inquiry: form.inquiry || "general",
          message: form.message,
          subject: `[MASS Website] ${form.inquiry || "General"} inquiry from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
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
        .contact-btn-submit:hover:not(:disabled) { background-color: color-mix(in srgb, var(--brand-yellow) 80%, white); }
        .contact-btn-submit:focus-visible { outline: 2px solid var(--brand-yellow); outline-offset: 3px; }
        .contact-pill:focus-visible { outline: 2px solid var(--brand-yellow); outline-offset: 2px; }
        .contact-input[aria-invalid="true"] { border-bottom-color: var(--brand-red); }
        .contact-input[aria-invalid="true"]:focus { border-color: var(--brand-red); }
        @media (prefers-reduced-motion: reduce) {
          .contact-btn-submit, .contact-pill { transition: none; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", backgroundColor: "var(--brand-navy)" }}>
        <Nav />

        {/* Page header */}
        <header
          style={{
            backgroundColor: "var(--brand-navy)",
            color: "var(--brand-gray)",
            padding: "8rem 1.5rem 5.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>
            <p
              style={{
                fontFamily: "var(--font-space-mono), ui-monospace, monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "rgba(245,245,245,0.45)",
                marginBottom: "2rem",
              }}
            >
              MCMASTER ADVANCED SPACE SYSTEMS
            </p>

            <h1
              style={{
                fontFamily: "var(--font-michroma), sans-serif",
                fontSize: "clamp(2.25rem, 7vw, 4.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "2.25rem",
              }}
            >
              Contact the
              <br />
              <span style={{ color: "var(--brand-yellow)" }}>Team.</span>
            </h1>

            <div
              style={{
                width: "4.5rem",
                height: "3px",
                backgroundColor: "var(--brand-yellow)",
              }}
            />
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
            style={{ padding: "4rem 2rem", borderColor: "rgba(245,245,245,0.12)" }}
          >
            <div style={{ maxWidth: "36rem" }}>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  color: "var(--brand-gray)",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  opacity: 0.78,
                  marginBottom: "3rem",
                }}
              >
                Whether you represent a company interested in sponsoring our
                research, a school looking to arrange an outreach visit, a
                student hoping to join the team, or are simply curious about
                what we&rsquo;re building: we&rsquo;d love to hear from you.
              </p>

              {/* Success state */}
              {status === "sent" ? (
                <div>
                  <div
                    style={{
                      width: "3rem",
                      height: "3px",
                      backgroundColor: "var(--brand-yellow)",
                      marginBottom: "2rem",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-michroma), sans-serif",
                      fontSize: "1.6rem",
                      color: "var(--brand-gray)",
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Message received.
                  </p>
                  <p
                    style={{
                      fontFamily: BODY_FONT,
                      color: "var(--brand-gray)",
                      opacity: 0.8,
                      lineHeight: 1.75,
                      marginBottom: "2.5rem",
                    }}
                  >
                    We&rsquo;ll be in touch soon. Thank you for reaching out.
                  </p>
                  <button
                    onClick={resetForm}
                    style={{
                      fontFamily: "var(--font-space-mono), ui-monospace, monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      color: "var(--brand-gray)",
                      textDecorationColor: "var(--brand-yellow)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textDecoration: "underline",
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
                      <label htmlFor="name" style={FIELD_LABEL}>
                        NAME
                      </label>
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
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        className="contact-input"
                      />
                      {errors.name && (
                        <span id="name-error" role="alert" style={FIELD_ERROR}>
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" style={FIELD_LABEL}>
                        EMAIL
                      </label>
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
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className="contact-input"
                      />
                      {errors.email && (
                        <span id="email-error" role="alert" style={FIELD_ERROR}>
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Inquiry type */}
                  <div style={{ marginBottom: "2.25rem" }}>
                    <p id="inquiry-label" style={FIELD_LABEL}>
                      INQUIRY TYPE
                    </p>
                    <div
                      role="group"
                      aria-labelledby="inquiry-label"
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {INQUIRY_OPTIONS.map((opt) => {
                        const active = form.inquiry === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => selectInquiry(opt.value)}
                            aria-pressed={active}
                            className="contact-pill"
                            style={{
                              fontFamily:
                                "var(--font-space-mono), ui-monospace, monospace",
                              fontSize: "0.65rem",
                              letterSpacing: "0.1em",
                              fontWeight: 700,
                              padding: "0.45rem 1.1rem",
                              border: `1.5px solid ${active ? "var(--brand-yellow)" : "rgba(245,245,245,0.25)"}`,
                              backgroundColor: active
                                ? "rgba(247,144,31,0.1)"
                                : "transparent",
                              color: active ? "var(--brand-yellow)" : "rgba(245,245,245,0.7)",
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
                    <label htmlFor="message" style={FIELD_LABEL}>
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className="contact-input"
                    />
                    {errors.message && (
                      <span id="message-error" role="alert" style={FIELD_ERROR}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="contact-btn-submit"
                      style={{
                        fontFamily:
                          "var(--font-space-mono), ui-monospace, monospace",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                        padding: "0.9rem 2.25rem",
                        backgroundColor:
                          status === "sending"
                            ? "rgba(247,144,31,0.55)"
                            : "var(--brand-yellow)",
                        color: "var(--brand-navy)",
                        border: "none",
                        cursor:
                          status === "sending" ? "not-allowed" : "pointer",
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      {status === "sending" ? "SENDING..." : "SEND MESSAGE →"}
                    </button>

                    {status === "error" && (
                      <p
                        role="alert"
                        style={{
                          fontFamily: BODY_FONT,
                          color: "var(--brand-gray)",
                          borderLeft: "2px solid var(--brand-red)",
                          paddingLeft: "0.5rem",
                          fontSize: "0.9rem",
                        }}
                      >
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
            style={{
              backgroundColor: "var(--mass-surface)",
              border: "1px solid rgba(245,245,245,0.1)",
              padding: "4rem 2.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono), ui-monospace, monospace",
                color: "rgba(245,245,245,0.45)",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                marginBottom: "2.5rem",
              }}
            >
              CAN-SBX 2026–2027
            </p>

            <h2
              style={{
                fontFamily: "var(--font-michroma), sans-serif",
                color: "var(--brand-gray)",
                fontSize: "1.5rem",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: "1.25rem",
              }}
            >
              Sending science to the stratosphere.
            </h2>

            <p
              style={{
                fontFamily: BODY_FONT,
                color: "var(--brand-gray)",
                fontSize: "0.95rem",
                lineHeight: 1.85,
                opacity: 0.8,
                marginBottom: "3rem",
              }}
            >
              We&rsquo;re always open to conversations with sponsors, educators,
              curious minds, and future members. Whether it&rsquo;s a funding
              discussion, a classroom visit, a question about our experiment, or
              a desire to join the team: reach out.
            </p>

            <div
              style={{
                borderTop: "1px solid rgba(245,245,245,0.12)",
                paddingTop: "2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono), ui-monospace, monospace",
                    color: "rgba(245,245,245,0.45)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    marginBottom: "0.35rem",
                  }}
                >
                  JOIN US
                </p>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    color: "var(--brand-gray)",
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    opacity: 0.8,
                    marginBottom: "0.6rem",
                  }}
                >
                  Want to get involved? Select &ldquo;Join Us&rdquo; in the form
                  above, or see open roles across our subteams.
                </p>
                <Link
                  href="/recruitment"
                  style={{
                    fontFamily: "var(--font-space-mono), ui-monospace, monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    fontWeight: 700,
                    color: "var(--brand-yellow)",
                    borderBottom: "1px solid var(--brand-yellow)",
                    paddingBottom: "2px",
                    textDecoration: "none",
                  }}
                >
                  VIEW OPEN ROLES →
                </Link>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono), ui-monospace, monospace",
                    color: "rgba(245,245,245,0.45)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    marginBottom: "0.35rem",
                  }}
                >
                  EMAIL
                </p>
                <a
                  href="mailto:mass@mcmaster.ca"
                  style={{
                    fontFamily: BODY_FONT,
                    color: "var(--brand-gray)",
                    fontSize: "0.92rem",
                    textDecoration: "underline",
                    textDecorationColor: "rgba(245,245,245,0.35)",
                    textUnderlineOffset: "3px",
                  }}
                >
                  mass@mcmaster.ca
                </a>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-space-mono), ui-monospace, monospace",
                    color: "rgba(245,245,245,0.45)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    marginBottom: "0.35rem",
                  }}
                >
                  LOCATION
                </p>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    color: "var(--brand-gray)",
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
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
                    fontFamily: "var(--font-space-mono), ui-monospace, monospace",
                    color: "rgba(245,245,245,0.45)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    marginBottom: "0.35rem",
                  }}
                >
                  OUTREACH
                </p>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    color: "var(--brand-gray)",
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    opacity: 0.8,
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
      <Footer />
    </>
  );
}