import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo_Narrow, Alice, Julius_Sans_One } from "next/font/google";
import "./globals.css";

const alice = Alice({
  variable: "--font-alice",
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  variable: "--font-julius-sans-one",
  weight: "400",
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
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
      <body className={`${alice.variable} ${archivoNarrow.variable} ${juliusSansOne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
