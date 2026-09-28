import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@src/components/breadcrumb";
import {
  BookOpen,
  Calendar,
  Receipt,
  FileSpreadsheet,
  Layers,
  Scale,
  UserCheck,
  Clock,
  Laptop,
  FileText,
  Percent,
  CheckCircle,
  FileCheck2,
  BarChart3,
  Sparkles,
  ArrowRight,
  Phone,
  ChevronRight,
  Award,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { InformationData } from "@src/constant";

export const metadata: Metadata = {
  title: "Accounting & Taxation Services | Vaishnavi Associates Hyderabad",
  description: "Complete accounting, bookkeeping, GST, Income Tax Returns (ITR), TDS compliance, virtual accountant, and MIS financial reporting services in Hyderabad.",
};

export default function AccountingPage() {
  const accountingServices = [
    {
      title: "Bookkeeping",
      description: "Structured recording of all financial transactions, invoicing, and bills in compliance with Indian Accounting Standards (Ind AS).",
      icon: <BookOpen className="w-6 h-6 text-gold-500" />,
      tag: "Foundational Record",
    },
    {
      title: "Day-to-Day Accounting",
      description: "Continuous daily entries, cash register management, debit/credit vouchers, and automated software ledger sync.",
      icon: <Calendar className="w-6 h-6 text-gold-500" />,
      tag: "Daily Operations",
    },
    {
      title: "Purchase, Sales, Expense, Receipt & Payment Entries",
      description: "Meticulous documentation and classification of commercial receipts, vendor bills, utility expenses, and sales invoices.",
      icon: <Receipt className="w-6 h-6 text-gold-500" />,
      tag: "Transaction Tracking",
    },
    {
      title: "Bank Reconciliation",
      description: "Monthly and periodic matching of bank statements with ledger books to eliminate timing differences and duplicate entries.",
      icon: <FileSpreadsheet className="w-6 h-6 text-gold-500" />,
      tag: "Reconciliation",
    },
    {
      title: "Ledger Maintenance",
      description: "Real-time tracking of customer accounts receivables, vendor accounts payables, and general ledger accounts.",
      icon: <Layers className="w-6 h-6 text-gold-500" />,
      tag: "Ledger Accounts",
    },
    {
      title: "Profit & Loss, Balance Sheet & Trial Balance",
      description: "Preparation of accurate monthly, quarterly, and annual financial statements ready for banking and board reviews.",
      icon: <Scale className="w-6 h-6 text-gold-500" />,
      tag: "Financial Statements",
    },
    {
      title: "Full-Time Accountant",
      description: "Dedicated full-time accounting professionals deployed to manage your organization's finance desk seamlessly.",
      icon: <UserCheck className="w-6 h-6 text-gold-500" />,
      tag: "Dedicated On-Site",
    },
    {
      title: "Part-Time Accountant",
      description: "Cost-effective part-time accounting support for small businesses needing periodic visits and weekly books updates.",
      icon: <Clock className="w-6 h-6 text-gold-500" />,
      tag: "Flexible Support",
    },
    {
      title: "Virtual Accounting",
      description: "Modern cloud-based accounting solutions using Zoho Books, Tally Prime, and QuickBooks with secure remote data access.",
      icon: <Laptop className="w-6 h-6 text-gold-500" />,
      tag: "Cloud Solutions",
    },
    {
      title: "GST Registration & Monthly GST Returns",
      description: "End-to-end GST support: new GSTIN registration, monthly GSTR-1 & GSTR-3B filings, and 2B Input Tax Credit (ITC) reconciliation.",
      icon: <FileText className="w-6 h-6 text-gold-500" />,
      tag: "GST Compliance",
    },
    {
      title: "Income Tax Returns",
      description: "Expert ITR filing for individuals, professionals, firms, and companies with strategic tax planning and deduction optimization.",
      icon: <Percent className="w-6 h-6 text-gold-500" />,
      tag: "Direct Tax",
    },
    {
      title: "Income Tax Audit Assistance",
      description: "Comprehensive assistance in tax audit preparations under Section 44AB, compiling schedules and liaising with Chartered Accountants.",
      icon: <CheckCircle className="w-6 h-6 text-gold-500" />,
      tag: "Audit Support",
    },
    {
      title: "TDS Returns & Compliance",
      description: "Quarterly TDS calculation, challan generation (26QB/26QC), Form 24Q & 26Q return filings, and Form 16/16A generation.",
      icon: <FileCheck2 className="w-6 h-6 text-gold-500" />,
      tag: "TDS Filings",
    },
    {
      title: "MIS & Financial Reporting",
      description: "Customized Management Information System (MIS) reports, cash flow forecasts, budget variance, and executive financial dashboards.",
      icon: <BarChart3 className="w-6 h-6 text-gold-500" />,
      tag: "Business Intelligence",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* 1. Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
        }}
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 text-white overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          <div className="mb-6">
            <Breadcrumb route="/accounting" name="Accounting & Taxation" />
          </div>

          <div className="max-w-3xl space-y-6 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>ACCOUNTING & TAXATION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Complete Accounting &{" "}
              <span className="gold-gradient-text">Compliance Support</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              We provide accounting and taxation support for businesses, professionals, entrepreneurs and organizations.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 justify-center lg:justify-start">
              {["Bookkeeping", "GST Returns", "Income Tax Returns", "Virtual Accounting", "MIS Reporting"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gold-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mainContainer">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold mb-2">
                <Award className="w-4 h-4 text-gold-500" />
                <span>14 Dedicated Services</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
                Accounting, GST & Tax Solutions
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              Keep your financial records pristine, your tax filings 100% on-time, and your business operations fully compliant with statutory authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accountingServices.map((srv, idx) => (
              <div
                key={idx}
                className="group rounded-3xl p-6 sm:p-7 bg-slate-50/70 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-800 border border-gold-500/20">
                      {srv.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-900/5 group-hover:bg-gold-500/15 flex items-center justify-center transition-colors">
                      {srv.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors font-display">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <Link
                  href={`/contact-us?service=${encodeURIComponent(srv.title)}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-navy-950 text-white font-bold text-xs sm:text-sm hover:bg-gold-500 hover:text-navy-950 transition-colors group/btn"
                >
                  <span>Enquire for Service</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Compliance Assurance Box */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-navy-950 mb-1">
                Zero Default & Professional Compliance Standards
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our accounting and compliance teams ensure accurate reconciliations, timely return submissions before statutory deadlines, and complete audit readiness for all business structures.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #061527 0%, #0B2545 50%, #061527 100%)",
        }}
        className="py-16 sm:py-20 text-white text-center"
      >
        <div className="mainContainer max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
            Streamline Your <span className="gold-gradient-text">Accounting & Taxes</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Get in touch today for bookkeeping, virtual accounting, GST or Income Tax filing support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact-us"
              style={{
                background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                color: "#061527",
              }}
              className="px-8 py-4 rounded-xl font-extrabold text-sm shadow-gold-glow hover:brightness-110 transition-all"
            >
              Get Free Accounting Consultation
            </Link>
            <a
              href={`tel:${InformationData.contactNumber}`}
              className="px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {InformationData.contactNumber}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
