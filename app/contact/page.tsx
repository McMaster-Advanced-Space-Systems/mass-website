"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";

type InquiryType = "sponsorship" | "outreach" | "general" | "";

const INQUIRY_OPTIONS = [
  { value: "sponsorship", label: "Sponsorship" },
  { value: "outreach",    label: "Outreach"    },
  { value: "general",     label: "General"     },
] as const;

const FIELD_LABEL: React.CSSProperties = {
  fontFamily: "var(--font-archivo-narrow), sans-serif",
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  color: "#010109",
  fontWeight: 600,
  display: "block",
  marginBottom: "0.55rem",
};

const FIELD_ERROR: React.CSSProperties = {
  fontFamily: "var(--font-alice), serif",
  fontSize: "0.8rem",
  color: "#F63D68",
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

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
        .contact-btn-submit:hover:not(:disabled) { background-color: #3335e0; }
        .contact-btn-submit:focus-visible { outline: 2px solid #000649; outline-offset: 3px; }
        .contact-pill:focus-visible { outline: 2px solid #000649; outline-offset: 2px; }
        .contact-input[aria-invalid="true"] { border-bottom-color: #F63D68; }
        .contact-input[aria-invalid="true"]:focus { border-color: #F63D68; }
        @media (prefers-reduced-motion: reduce) {
          .contact-btn-submit, .contact-pill { transition: none; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", backgroundColor: "#F2F2F0" }}>

        <Navbar activeHref="/contact" />

        {/* Page header */}
        <header style={{ backgroundColor: "#010109", padding: "5.5rem 2rem 5rem" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-julius-sans-one), sans-serif",
                color: "#8083a4",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                marginBottom: "1.75rem",
              }}
            >
              MCMASTER ADVANCED SPACE SYSTEMS
            </p>

            <h1
              style={{
                fontFamily: "var(--font-archivo-narrow), sans-serif",
                color: "#F2F2F0",
                fontWeight: 700,
                fontSize: "clamp(4rem, 11vw, 9rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
                marginBottom: "2.25rem",
              }}
            >
              Contact
              <br />
              the Team.
            </h1>

            <div style={{ width: "4.5rem", height: "3px", backgroundColor: "#8083a4" }} />
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
            style={{ padding: "4rem 2rem", borderColor: "rgba(1,1,9,0.1)" }}
          >
            <div style={{ maxWidth: "36rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-alice), serif",
                  color: "#010109",
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
                  <div style={{ width: "3rem", height: "3px", backgroundColor: "#000649", marginBottom: "2rem" }} />
                  <p
                    style={{
                      fontFamily: "var(--font-archivo-narrow), sans-serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#010109",
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Message received.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-alice), serif",
                      color: "#010109",
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
                      fontFamily: "var(--font-archivo-narrow), sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      color: "#000649",
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
                        <span id="name-error" role="alert" style={FIELD_ERROR}>{errors.name}</span>
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
                        <span id="email-error" role="alert" style={FIELD_ERROR}>{errors.email}</span>
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
                              fontFamily: "var(--font-archivo-narrow), sans-serif",
                              fontSize: "0.7rem",
                              letterSpacing: "0.1em",
                              fontWeight: 500,
                              padding: "0.45rem 1.1rem",
                              border: `1.5px solid ${active ? "#000649" : "rgba(1,1,9,0.22)"}`,
                              backgroundColor: active ? "#000649" : "transparent",
                              color: active ? "#F2F2F0" : "#010109",
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
                      <span id="message-error" role="alert" style={FIELD_ERROR}>{errors.message}</span>
                    )}
                  </div>

                  {/* Submit */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="contact-btn-submit"
                      style={{
                        fontFamily: "var(--font-archivo-narrow), sans-serif",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.12em",
                        padding: "0.9rem 2.25rem",
                        backgroundColor: status === "sending" ? "rgba(70,72,255,0.55)" : "#000649",
                        color: "#F2F2F0",
                        border: "none",
                        cursor: status === "sending" ? "not-allowed" : "pointer",
                        transition: "background-color 0.2s ease",
                      }}
                    >
                      {status === "sending" ? "SENDING..." : "SEND MESSAGE →"}
                    </button>

                    {status === "error" && (
                      <p
                        role="alert"
                        style={{
                          fontFamily: "var(--font-alice), serif",
                          color: "#F63D68",
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
            style={{ backgroundColor: "#000649", padding: "4rem 2.5rem" }}
          >
            <p
              style={{
                fontFamily: "var(--font-julius-sans-one), sans-serif",
                color: "#F2F2F0",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                opacity: 0.5,
                marginBottom: "2.5rem",
              }}
            >
              CAN-SBX 2026–2027
            </p>

            <h2
              style={{
                fontFamily: "var(--font-archivo-narrow), sans-serif",
                color: "#F2F2F0",
                fontWeight: 700,
                fontSize: "1.85rem",
                lineHeight: "1.15",
                letterSpacing: "-0.01em",
                marginBottom: "1.25rem",
              }}
            >
              Sending science to the stratosphere.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-alice), serif",
                color: "#F2F2F0",
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
                borderTop: "1px solid rgba(242,242,240,0.2)",
                paddingTop: "2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-archivo-narrow), sans-serif",
                    color: "#F2F2F0",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    opacity: 0.5,
                    marginBottom: "0.35rem",
                  }}
                >
                  EMAIL
                </p>
                <a
                  href="mailto:mass@mcmaster.ca"
                  style={{
                    fontFamily: "var(--font-alice), serif",
                    color: "#F2F2F0",
                    fontSize: "0.92rem",
                    textDecoration: "underline",
                    textDecorationColor: "rgba(242,242,240,0.35)",
                    textUnderlineOffset: "3px",
                  }}
                >
                  mass@mcmaster.ca
                </a>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-archivo-narrow), sans-serif",
                    color: "#F2F2F0",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    opacity: 0.5,
                    marginBottom: "0.35rem",
                  }}
                >
                  LOCATION
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-alice), serif",
                    color: "#F2F2F0",
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
                    fontFamily: "var(--font-archivo-narrow), sans-serif",
                    color: "#F2F2F0",
                    fontSize: "0.6rem",
                    letterSpacing: "0.22em",
                    opacity: 0.5,
                    marginBottom: "0.35rem",
                  }}
                >
                  OUTREACH
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-alice), serif",
                    color: "#F2F2F0",
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
