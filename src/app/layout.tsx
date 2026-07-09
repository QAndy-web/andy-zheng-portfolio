import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Andy Zheng | Economics, Finance, Global Markets",
  description:
    "A premium personal portfolio for Andy Zheng, an Economics student focused on finance, valuation, markets, and global business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main className="relative z-10 min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
