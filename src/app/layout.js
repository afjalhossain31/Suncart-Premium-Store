import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Toast } from "@heroui/react";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Suncart Premium Store",
  description:
    "Discover Solis, where luxury meets leisure. Explore our curated collection of premium men’s seasonal essentials, designed for the modern gentleman who values both style and comfort. Crafted with exceptional materials and timeless design, Solis redefines seasonal wear for the discerning individual.",
  icons: {
    icon: [
      { url: "/Favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/Favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" data-theme="light">
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Toast.Provider placement="top" />
      </body>
    </html>
  );
}
