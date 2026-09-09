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
  ShieldCheck
} from "lucide-react";

export default function Technologies() {
  const pillars = [
    {
      title: "Business & MSME Loans",
      description: "Fast collateral-free and secured business capital up to ₹20 Crore with low interest rates and flexible tenures.",
      icon: <Briefcase className="w-6 h-6 text-gold-500" />,
      features: ["Working Capital & Term Loans", "Machinery & Equipment Finance", "CGTMSE Collateral-Free Schemes"],
      link: "/loans/business-loan",
      badge: "Popular"
    },
    {
      title: "Home Loans & Mortgage",
      description: "Realize your dream home with end-to-end guidance, 8.40% starting interest, and maximum eligibility sanction.",
      icon: <Home className="w-6 h-6 text-gold-500" />,
      features: ["New Flats & Villas", "Plot Purchase & Construction", "Balance Transfer with Top-up"],
      link: "/contact-us",
      badge: "Lowest Rates"
    },
    {
      title: "Loan Against Property (LAP)",
      description: "Unlock up to 75% market value of your residential, commercial, or industrial real estate at attractive rates.",
      icon: <Building className="w-6 h-6 text-gold-500" />,
      features: ["High Sanction Ticket Sizes", "Longer Tenures up to 15 Years", "Residential & Commercial Assets"],
      link: "/contact-us",
    },
    {
      title: "Real Estate Advisory",
      description: "Curated portfolio of prime commercial spaces, residential gated communities, and high-growth open plots in Telangana.",
      icon: <Scale className="w-6 h-6 text-gold-500" />,
      features: ["Commercial Leasing & Retail", "Verified Gated Community Plots", "Legal & Title Verification"],
      link: "/contact-us",
    },
    {
      title: "Corporate Registrations",
      description: "Start and scale your business legally. Comprehensive trade licenses, GSTIN, and company incorporation.",
      icon: <FileCheck2 className="w-6 h-6 text-gold-500" />,
      features: ["Municipal Trade License", "Pvt Ltd & LLP Incorporation", "MSME / Udyam & FSSAI"],
      link: "/registrations/trade-license",
      badge: "Fast Track"
    },
    {
      title: "Taxation & Compliance",
      description: "Dedicated CA and financial advisory for timely ITR filing, GST reconciliation, and regulatory audits.",
      icon: <Receipt className="w-6 h-6 text-gold-500" />,
      features: ["Business & Salaried ITR", "Monthly & Annual GST Returns", "CA Net Worth Certifications"],
      link: "/compliance/itr-filing",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="mainContainer">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-gold-500/30 text-navy-900 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Comprehensive Financial & Property Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight leading-tight">
            Our Core <span className="gold-gradient-text">Specializations</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Whether you need emergency working capital, your dream property sanction, or hassle-free government trade licensing, Vaishnavi Associates provides seamless execution.
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
