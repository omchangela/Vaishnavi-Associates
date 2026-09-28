import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Home,
  Building,
  FileCheck2,
  Receipt,
  Scale,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Globe,
  Coins
} from "lucide-react";

export default function Technologies() {
  const pillars = [
    {
      title: "Loan & Financial Solutions",
      description: "Structured debt and financing options for individuals and enterprises — Business Loans, Home Loans, LAP, and project financing with leading banks.",
      icon: <Coins className="w-6 h-6 text-gold-500" />,
      features: ["Business & MSME Capital", "Home Loans & Mortgage", "Loan Against Property (LAP)"],
      link: "/loans",
      badge: "Popular"
    },
    {
      title: "CIBIL & Credit Services",
      description: "Comprehensive credit score analysis, error correction, dispute resolution, and tailored guidance to enhance your creditworthiness.",
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      features: ["CIBIL Score Analysis", "Dispute Resolution Support", "Credit Profile Restoration"],
      link: "/cibil",
      badge: "Essential"
    },
    {
      title: "Accounting & Taxation Services",
      description: "Full-scale accounting, bookkeeping, and statutory compliance — GST returns, Income Tax Returns (ITR), TDS, and audit coordination.",
      icon: <Receipt className="w-6 h-6 text-gold-500" />,
      features: ["Bookkeeping & Virtual Accounting", "Monthly & Annual GST Filings", "Income Tax Returns (ITR)"],
      link: "/accounting",
    },
    {
      title: "Demat & Trading Services",
      description: "Seamless setup and onboarding for capital market investments. Demat and trading account opening with dedicated portfolio assistance.",
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
      features: ["Demat & Trading Accounts", "Equity & Mutual Fund Setup", "Portfolio Guidance"],
      link: "/demat",
    },
    {
      title: "Corporate Banking & Legal Services",
      description: "Complete corporate legal and banking advisory: company incorporation, municipal trade licenses, MSME registrations, and statutory documentation.",
      icon: <FileCheck2 className="w-6 h-6 text-gold-500" />,
      features: ["Company & LLP Incorporation", "Municipal Trade License", "Corporate Banking Assistance"],
      link: "/corporate-banking",
      badge: "Fast Track"
    },
    {
      title: "Digital Marketing Services",
      description: "Modern digital marketing and branding solutions to accelerate online visibility, generate quality leads, and expand business reach.",
      icon: <Globe className="w-6 h-6 text-gold-500" />,
      features: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Website & Brand Growth"],
      link: "/digital-marketing",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="mainContainer">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-gold-500/30 text-navy-900 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Comprehensive Professional Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight leading-tight">
            Our Core <span className="gold-gradient-text">Solutions</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Professional financial, accounting, taxation, corporate, investment and digital solutions for individuals, entrepreneurs, businesses and corporates.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-8 hover:bg-white hover:border-gold-400 hover:shadow-luxury transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900/5 group-hover:bg-gold-500/15 flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  {item.badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-500/15 text-gold-700 border border-gold-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-display text-navy-950 group-hover:text-gold-600 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-slate-200/60 pt-4">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={item.link}
                className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-navy-950 group-hover:text-gold-600 transition-colors"
              >
                <span>Learn Details & Eligibility</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
