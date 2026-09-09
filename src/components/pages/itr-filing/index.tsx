"use client";

import React from "react";
import Link from "next/link";
import Banner from "@src/components/banner";
import {
  Receipt,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ArrowRight,
  Calculator,
  UserCheck
} from "lucide-react";

const itrDocs = [
  {
    title: "PAN & Aadhaar Card",
    text: "Mandatory for income identification, e-verification, and tax filing portal access.",
  },
  {
    title: "Bank Account Statements",
    text: "Statements for all operational savings and current accounts active during the financial year.",
  },
  {
    title: "Form 16 & Salary Slips",
    text: "Provided by employer documenting TDS deductions, gross salary, and Section 80C exemptions.",
  },
  {
    title: "Annual Information Statement (AIS/TIS)",
    text: "Income Tax 26AS, AIS, and TIS statements downloaded directly to verify TDS/TCS entries.",
  },
  {
    title: "Business Books / Profit & Loss",
    text: "Balance sheet, sales registers, and expense vouchers for business proprietors and professionals.",
  },
  {
    title: "Capital Gains & Property Papers",
    text: "Sale deed, purchase agreement, mutual fund / stock broker statements for capital gains calculation.",
  },
];

const itrPlans = [
  {
    title: "Salaried Individuals (ITR-1 / 2)",
    desc: "Single or multiple Form 16, interest income, house property deductions, and maximum tax refund claims.",
    badge: "Fast Refund",
  },
  {
    title: "Business & Presumptive (ITR-3 / 4)",
    desc: "For traders, freelancers, doctors, contractors under Section 44AD / 44ADA with optimal expense deduction.",
    badge: "High Savings",
  },
  {
    title: "Companies & LLPs (ITR-5 / 6)",
    desc: "Comprehensive corporate tax computation, MAT compliance, statutory tax audit, and ROC return alignment.",
    badge: "CA Verified",
  },
];

export default function ItrFiling() {
  return (
    <div>
      <Banner
        route="/compliance"
        name="ITR Filing"
        title="Income Tax Return & Compliance Services"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="mainContainer space-y-20">
          
          {/* Top Intro */}
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-gold-700">
                <Receipt className="w-4 h-4" />
                Chartered Tax Advisory
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 leading-tight">
                Accurate, Timely <span className="gold-gradient-text">ITR E-Filing</span> & Maximum Tax Refunds
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Filing your Income Tax Return accurately is critical not just for legal compliance, but also to build a strong financial profile for future high-value Business Loans and Home Loans. Our experienced CA team maximizes your legitimate tax deductions and ensures zero notice risks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-navy-950 font-bold shadow-gold-glow hover:brightness-110 transition duration-300"
                >
                  <span>File Your ITR Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 px-6 py-4 text-navy-950 font-semibold transition"
                >
                  <span>CA Tax Consultation</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-luxury space-y-5">
              <h3 className="text-xl font-bold font-display text-navy-950">
                Why File With Vaishnavi Associates?
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Verified CA review of every computation",
                  "AIS, TIS, and 26AS reconciliation to prevent notices",
                  "Maximize refunds under Old vs New tax regimes",
                  "Strong ITR computation built for bank loan eligibility",
                  "Notice resolution and post-filing support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Filing Categories */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-950">
                Choose Your Filing Category
              </h3>
              <p className="text-slate-600 text-sm">
                Tailored computation packages for salaried employees, business owners, and corporate entities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {itrPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-luxury hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-500/15 text-gold-700 border border-gold-500/30 mb-4 inline-block">
                      {plan.badge}
                    </span>
                    <h4 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                      {plan.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {plan.desc}
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 group-hover:text-gold-600"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Documents Needed
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
                  Checklist for Accurate E-Filing
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {itrDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-gold-400" />
                      <h4 className="font-bold text-sm text-white">{doc.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{doc.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
