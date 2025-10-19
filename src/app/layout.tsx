import type { Metadata } from "next";
import { Geist, Geist_Mono, Kaushan_Script, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kaushanScript = Kaushan_Script({
  weight: "400",
  variable: "--font-kaushan-script",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stáj Půlpecen",
  description: "Rodinný statek v malé obci Půlpecen na Svitavsku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kaushanScript.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />  
        {children}
      </body>
    </html>
  );
}
