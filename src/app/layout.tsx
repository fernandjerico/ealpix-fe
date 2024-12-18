import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Nunito } from "next/font/google";
import { twMerge } from "tailwind-merge";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ealpix - Solusi Pengawasan Anak yang Efektif",
  description: "Solusi Pengawasan Anak yang Efektif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          roboto.variable,
          nunito.variable,
          "bg-white text-white antialiased font-sans"
        )}>
        {children}
      </body>
    </html>
  );
}
