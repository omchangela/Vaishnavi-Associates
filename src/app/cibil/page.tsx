import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@src/components/breadcrumb";
import {
  ShieldCheck,
  FileSearch,
  UserX,
  CopyX,
  AlertTriangle,
  History,
  FileCheck2,
  FileWarning,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  ChevronRight,
  Award,
  CheckCircle2
} from "lucide-react";
import { InformationData } from "@src/constant";

export const metadata: Metadata = {
  title: "CIBIL Services & Credit Profile Assistance | Vaishnavi Associates",
  description: "Professional CIBIL report analysis, dispute filing, error correction, and credit profile improvement guidance in Hyderabad across CIBIL, Experian, Equifax & CRIF.",
};

export default function CibilPage() {
  const cibilServices = [
    {
      title: "CIBIL Report Analysis",
      description: "Thorough line-by-line examination of your CIBIL CIR (Credit Information Report) to decode negative marks, repayment trends, and credit utilization ratios.",
      icon: <FileSearch className="w-6 h-6 text-gold-500" />,
      tag: "Comprehensive Audit",
    },
    {
      title: "Incorrect Personal/PAN Details Review",
      description: "Identifying and resolving clerical errors, misspelled names, mismatched dates of birth, or incorrect PAN linkages that depress your score.",
      icon: <UserX className="w-6 h-6 text-gold-500" />,
      tag: "Identity Rectification",
    },
    {
      title: "Unknown or Duplicate Account Review",
      description: "Detecting fraudulent, unrecognized, or duplicated loan/credit card accounts mistakenly tagged to your credit bureau profile.",
      icon: <CopyX className="w-6 h-6 text-gold-500" />,
      tag: "Account Verification",
    },
    {
      title: "Overdue and DPD Review",
      description: "Analyzing historical Days Past Due (DPD), payment delays, and outstanding overdues to structure proper regularization with lenders.",
      icon: <AlertTriangle className="w-6 h-6 text-gold-500" />,
      tag: "Overdue Audit",
    },
    {
      title: "Credit Enquiry Review",
      description: "Auditing excessive hard inquiries caused by multiple simultaneous loan applications and advising on cooling-off mitigation.",
      icon: <History className="w-6 h-6 text-gold-500" />,
      tag: "Enquiry Cleanup",
    },
    {
      title: "Closure / Settlement / Written-off Status Review",
      description: "Resolving lingering 'Settled', 'Written-off', or 'Post-Write-off Settled' flags by coordinating NDC (No Dues Certificates) and closure updates.",
      icon: <FileWarning className="w-6 h-6 text-gold-500" />,
      tag: "Status Correction",
    },
    {
      title: "Dispute Filing Assistance",
      description: "Drafting, compiling supporting proofs, and filing official online bureau disputes with TransUnion CIBIL and concerned banking institutions.",
      icon: <FileCheck2 className="w-6 h-6 text-gold-500" />,
      tag: "Bureau Liaison",
    },
    {
      title: "Experian, Equifax & CRIF Assistance",
      description: "Cross-bureau support covering all four RBI-licensed credit bureaus in India — TransUnion CIBIL, Experian, Equifax, and CRIF High Mark.",
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      tag: "Multi-Bureau",
    },
    {
      title: "Credit Profile Improvement Guidance",
      description: "Strategic advisory roadmap to organically restore your score to 750+ through optimal credit mix, disciplined repayment, and utilization limits.",
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
      tag: "Score Enhancement",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* 1. Hero Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
        }}
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 text-white overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          <div className="mb-6">
            <Breadcrumb route="/cibil" name="CIBIL Services" />
          </div>

          <div className="max-w-3xl space-y-6 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>CIBIL SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              CIBIL & Credit Profile{" "}
              <span className="gold-gradient-text">Assistance</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              We provide credit-report analysis and assistance in identifying potential inaccuracies or issues in credit reports.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 justify-center lg:justify-start">
              {["CIBIL Score Analysis", "Dispute Filing", "DPD & Overdue Review", "Score Improvement"].map((item, idx) => (
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
                <span>Credit Health Restoration</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
                Credit Profile Services
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              Discover end-to-end assistance for identifying report discrepancies, correcting lender reporting mistakes, and rebuilding creditworthiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cibilServices.map((srv, idx) => (
              <div
                key={idx}
                className="group rounded-3xl p-7 sm:p-8 bg-slate-50/70 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gold-500/10 text-gold-800 border border-gold-500/20">
                      {srv.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-900/5 group-hover:bg-gold-500/15 flex items-center justify-center transition-colors">
                      {srv.icon}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors font-display">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <Link
                  href={`/contact-us?service=${encodeURIComponent(srv.title)}`}
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-navy-950 text-white font-bold text-xs sm:text-sm hover:bg-gold-500 hover:text-navy-950 transition-colors group/btn"
                >
                  <span>Request Profile Review</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Important Regulatory Notice */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-navy-950 mb-1">
                Transparency & Credit Bureau Compliance
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Vaishnavi Associates assists clients in identifying genuine reporting errors, compiling legitimate documentary proof, and submitting disputes according to RBI guidelines. Credit score changes and lender dispute resolutions are subject to the policies of credit information companies and financial institutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #061527 0%, #0B2545 50%, #061527 100%)",
        }}
        className="py-16 sm:py-20 text-white text-center"
      >
        <div className="mainContainer max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
            Need Expert <span className="gold-gradient-text">CIBIL & Credit Analysis</span>?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Connect with our credit consultants for a confidential review of your report and structured guidance.
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
              Get Credit Consultation
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
