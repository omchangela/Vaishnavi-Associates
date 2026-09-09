"use client";

import React, { useState } from "react";
import Link from "next/link";
import Banner from "@src/components/banner";
import {
  CheckCircle2,
  FileText,
  Briefcase,
  IndianRupee,
  Clock,
  ShieldCheck,
  ArrowRight,
  Calculator,
  Building2,
  HelpCircle
} from "lucide-react";

const loanVariants = [
  {
    title: "Unsecured Business Loan",
    amount: "Up to ₹75 Lakh",
    tenure: "12 to 60 Months",
    rate: "From 11.25%",
    desc: "Collateral-free instant capital for business expansion, operational scaling, and short-term liquidity needs.",
  },
  {
    title: "Working Capital (Cash Credit / OD)",
    amount: "Up to ₹20 Crore",
    tenure: "Annual Renewal",
    rate: "From 8.85%",
    desc: "Flexible revolving credit line against receivables and inventory stock to manage everyday operational cycles.",
  },
  {
    title: "Machinery & Equipment Loan",
    amount: "Up to ₹10 Crore",
    tenure: "Up to 84 Months",
    rate: "From 9.50%",
    desc: "Specialized asset financing for manufacturing, medical, processing, or printing equipment purchase.",
  },
  {
    title: "CGTMSE Scheme Loan",
    amount: "Up to ₹5 Crore",
    tenure: "Up to 10 Years",
    rate: "From 8.50%",
    desc: "Government credit guarantee scheme for MSME micro and small enterprises with minimal promoter margin.",
  },
];

const documents = [
  {
    title: "KYC Documents",
    text: "PAN Card & Aadhaar Card of all business promoters, partners, or directors.",
  },
  {
    title: "Business Proof",
    text: "GST Registration Certificate, Municipal Trade License, or Udyam MSME Certificate.",
  },
  {
    title: "Financial Statements",
    text: "Last 2-3 years audited Balance Sheet and Profit & Loss statement along with CA Computation of Income.",
  },
  {
    title: "Bank Statements",
    text: "Last 12 months operating bank account statements in original PDF format.",
  },
  {
    title: "ITR Acknowledgments",
    text: "Income Tax Returns for the last 2 assessment years for both firm and promoters.",
  },
  {
    title: "Existing Loan Sanctions",
    text: "Sanction letters and loan repayment tracks for any active business or personal borrowing.",
  },
];

const faqs = [
  {
    q: "What is the minimum turnover required for a Business Loan?",
    a: "Most partner banks require a minimum annual turnover of ₹20 Lakh to ₹40 Lakh, though early-stage businesses can qualify under specialized CGTMSE or MSME programs.",
  },
  {
    q: "How fast can a business loan get disbursed?",
    a: "Unsecured loans can be sanctioned within 48 to 72 hours. Secured working capital or machinery loans typically require 5 to 7 working days for site inspection and legal verification.",
  },
  {
    q: "Can I apply without collateral security?",
    a: "Yes! We facilitate collateral-free business loans up to ₹75 Lakh under unsecured banking schemes and up to ₹5 Crore under the government CGTMSE guarantee.",
  },
];

export default function BusinessLoan() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Page Banner */}
      <Banner
        route="/loans"
        name="Business Loans"
        title="Commercial & Business Financing"
      />

      {/* Main Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mainContainer space-y-20">
          
          {/* Top Intro Grid */}
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-gold-700">
                <Briefcase className="w-4 h-4" />
                Institutional Business Lending
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 leading-tight">
                Fuel Your Business Growth with{" "}
                <span className="gold-gradient-text">Tailored Credit</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Whether you need immediate working capital to fulfill large orders, purchase modern machinery, or expand to new branch locations, Vaishnavi Associates structures the right credit facility with 30+ leading private and nationalized banks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-navy-950 font-bold shadow-gold-glow hover:brightness-110 transition duration-300"
                >
                  <span>Apply for Business Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 px-6 py-4 text-navy-950 font-semibold transition"
                >
                  <Calculator className="w-4 h-4 text-gold-600" />
                  <span>Calculate Business EMI</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-luxury space-y-6">
              <h3 className="text-2xl font-bold font-display text-navy-950">
                Why Apply Through Vaishnavi?
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Tie-ups with SBI, HDFC, ICICI, Axis & leading NBFCs",
                  "Lowest interest rates starting from 8.85% p.a.",
                  "Zero upfront file rejection risk through pre-underwriting",
                  "Dedicated loan relationship manager for your enterprise",
                  "Fast disbursal within 48 to 72 hours",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Loan Variants Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-950">
                Business Loan Facilities We Provide
              </h3>
              <p className="text-slate-600 text-sm">
                Tailored lending structures designed to suit every business stage and cash flow cycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanVariants.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-luxury hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-2">
                      {item.rate}
                    </span>
                    <h4 className="text-lg font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 space-y-1.5 text-xs font-semibold text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Sanction:</span>
                      <span className="text-navy-950 font-bold">{item.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tenure:</span>
                      <span>{item.tenure}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation Checklist */}
          <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Checklist & Requirements
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
                  Required Documents for Fast-Track Sanction
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  Keep these papers ready. Our field executive will verify and collect them directly from your office.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc, idx) => (
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

              <div className="text-center pt-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:brightness-110 shadow-gold-glow transition"
                >
                  <span>Request Document Verification</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-950">
                Frequently Asked Questions
              </h3>
              <p className="text-slate-600 text-sm">
                Common questions about business loan eligibility and processing.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-navy-950 flex justify-between items-center"
                  >
                    <span>{faq.q}</span>
                    <span className="text-gold-600 text-lg font-bold">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
