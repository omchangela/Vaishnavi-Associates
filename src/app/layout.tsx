import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@src/components/Navbars/navbar";
import Footer from "@src/components/layout/footer";
import ScrollButton from "@src/components/scrollButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaishnavi Associates | Trusted Loans & Business Consultancy Services",
  description: "Vaishnavi Associates offers premier business loans, home loans, loan against property, business consultancy, and company registration services.",
  keywords: "business loans, home loan, loan against property, business consultancy hyderabad, trade license, gst registration, vaishnavi associates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${jakarta.variable} ${outfit.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans antialiased text-slate-800 bg-[#FAFAFA] min-h-screen flex flex-col selection:bg-gold-500 selection:text-white"
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollButton />
      </body>
    </html>
  );
}