import React from "react";
import Link from "next/link";
import { User, Rocket, Building, Landmark, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhoWeServe() {
  const segments = [
    {
      title: "Individuals",
      subtitle: "Personal Finance & Wealth Solutions",
      description: "Home loans, personal finance, CIBIL, demat/trading and income-tax services.",
      icon: <User className="w-6 h-6 text-gold-500" />,
      features: [
        "Home Loans & LAP",
        "Personal Loans",
        "CIBIL Score Analysis",
        "Demat & Trading Accounts",
        "Income Tax Returns (ITR)",
      ],
      link: "/contact-us?segment=individuals",
    },
    {
      title: "Entrepreneurs",
      subtitle: "New Ventures & Startup Setup",
      description: "Business loans, accounting, GST, taxation, compliance and digital marketing.",
      icon: <Rocket className="w-6 h-6 text-gold-500" />,
      features: [
        "Business Startup Capital",
        "GST Registration & Returns",
        "Accounting & Bookkeeping",
        "Statutory Compliance",
        "Brand & Digital Marketing",
      ],
      link: "/contact-us?segment=entrepreneurs",
    },
    {
      title: "Small & Medium Businesses",
      subtitle: "Operational Scale & Compliance",
      description: "Bookkeeping, virtual accounting, GST, TDS, funding and digital marketing.",
      icon: <Building className="w-6 h-6 text-gold-500" />,
      features: [
        "Bookkeeping & Ledger Mgmt",
        "Virtual CFO & Accounting",
        "GST & TDS Filing Compliance",
        "Working Capital & Funding",
        "Lead Generation & SEO",
      ],
      link: "/contact-us?segment=smb",
    },
    {
      title: "Corporates",
      subtitle: "Enterprise Finance & Legal Governance",
      description: "Corporate banking, funding assistance, accounting, taxation, legal support and digital solutions.",
      icon: <Landmark className="w-6 h-6 text-gold-500" />,
      features: [
        "Corporate Banking & Current Accounts",
        "Large-Ticket Funding Assistance",
        "Audit & Corporate Taxation",
        "Contracts & Legal Documentation",
        "Enterprise Digital Solutions",
      ],
      link: "/contact-us?segment=corporates",
    },
  ];

  return (
    <section id="who-we-serve" className="py-20 sm:py-28 bg-slate-50/70 relative">
      <div className="mainContainer">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-gold-500/30 text-navy-900 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Targeted Customer Segments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight leading-tight">
            Who We <span className="gold-gradient-text">Serve</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Solutions for Different Customer Needs — from individuals and aspiring entrepreneurs to growing SMBs and established corporate enterprises.
          </p>
        </div>

        {/* 4 Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {segments.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-900/5 group-hover:bg-gold-500/15 flex items-center justify-center mb-6 transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold font-display text-navy-950 group-hover:text-gold-600 transition-colors mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-gold-600 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={item.link}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-navy-950 text-white font-bold text-xs sm:text-sm hover:bg-gold-500 hover:text-navy-950 transition-colors group/btn"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
