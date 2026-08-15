import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* MASS branding standards: logo and titles */
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

/* MASS branding standards: highlights */
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

/* MASS branding standards: subtitles and body text. Akzidenz-Grotesk is a
   licensed Berthold face and is not served by Google Fonts, so Inter stands
   in for it; globals.css prefers a locally licensed copy when one exists. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MASS | McMaster Advanced Space Systems",
  description: "McMaster Advanced Space Systems — CAN-SBX 2026 Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} ${spaceMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
