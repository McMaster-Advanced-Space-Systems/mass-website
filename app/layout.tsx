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
import { Geist, Geist_Mono, Archivo_Narrow, Alice, Julius_Sans_One, Space_Grotesk, Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivoNarrow = Archivo_Narrow({
  weight: ["400", "500", "600", "700"],
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

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "McMaster Advanced Space Systems",
  description:
    "McMaster Advanced Space Systems (MASS): designing, building, and testing autonomous technologies for various challenges.",
  openGraph: {
    title: "McMaster Advanced Space Systems",
    description:
      "McMaster Advanced Space Systems (MASS): designing, building, and testing autonomous technologies for various challenges.",
    type: "website",
  },
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
      <body className={`${hankenGrotesk.variable} ${spaceGrotesk.variable} ${alice.variable} ${archivoNarrow.variable} ${juliusSansOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
