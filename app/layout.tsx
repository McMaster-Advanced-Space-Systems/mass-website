import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo_Narrow, Alice, Julius_Sans_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
});

const alice = Alice({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alice",
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-julius-sans-one",
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
        className={`${geistSans.variable} ${geistMono.variable} ${archivoNarrow.variable} ${alice.variable} ${juliusSansOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
