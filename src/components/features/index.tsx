import React from "react";
import Link from "next/link";
import {
  FileSearch,
  CheckCheck,
  SendHorizontal,
  Landmark,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Award,
  Clock4,
  Users2
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Initial Profile Review",
    desc: "Share your requirement. Our credit advisors analyze your income, financials, and CIBIL score for optimal lender matching.",
    icon: <FileSearch className="w-6 h-6 text-gold-500" />,
  },
  {
    step: "02",
    title: "Strategic Bank File Prep",
    desc: "We prepare a structured file meeting the underwriting guidelines of top partner banks to prevent rejections.",
    icon: <CheckCheck className="w-6 h-6 text-gold-500" />,
  },
  {
    step: "03",
    title: "Multi-Bank Sanction",
    desc: "Receive formal loan sanctions from multiple lenders. We help you negotiate the lowest interest rate and fee.",
    icon: <Landmark className="w-6 h-6 text-gold-500" />,
  },
  {
    step: "04",
    title: "Disbursal to Account",
    desc: "Sign the loan agreement with doorstep coordination and get funds credited directly to your bank account.",
    icon: <SendHorizontal className="w-6 h-6 text-gold-500" />,
  },
];

const loanTags = [
  "Unsecured Business Loans",
  "Working Capital (OD/CC)",
  "Home Loans from 8.4%",
  "Loan Against Property (LAP)",
  "CGTMSE MSME Loans",
  "Machinery & Equipment",
  "Commercial Real Estate",
  "Telangana Open Plots",
  "Municipal Trade License",
  "New GST Registration",
  "Private Limited Incorporation",
  "Food Safety (FSSAI)",
  "Income Tax Return (ITR)",
  "Project Report & CA Valuation",
];

export default function Features() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mainContainer relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-gold-500/30 text-navy-900 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Clock4 className="w-4 h-4 text-gold-500" />
            <span>Fast & Transparent Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight leading-tight">
            How We Get Your <span className="gold-gradient-text">Loan Approved</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            A simple 4-step transparent roadmap to secure the capital your business or property needs with zero confusion.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-luxury hover:border-gold-400 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-navy-900/5 group-hover:bg-gold-500/15 flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black font-display text-slate-200 group-hover:text-gold-400 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-gold-600">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero File Rejection Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Loan & Service Tags */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-luxury text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-600 mb-3">
            <Sparkles className="w-4 h-4" />
            Specialized Categories
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-950 mb-6">
            Popular Loan Products & Advisory Services
          </h3>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-8">
            Click on any service category to get an instant eligibility estimate and connect with our senior financial managers.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {loanTags.map((tag, index) => (
              <Link
                key={index}
                href="/contact-us"
                className="px-4 py-2 rounded-xl bg-slate-50 hover:bg-gold-500/15 border border-slate-200 hover:border-gold-400 text-slate-700 hover:text-navy-950 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                {tag}
              </Link>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xs sm:text-sm text-slate-500 font-medium">
              Have a custom loan requirement or existing high-interest debt to refinance?
            </span>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy-900 hover:text-gold-600 underline underline-offset-4"
            >
              <span>Schedule Free Bank Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}