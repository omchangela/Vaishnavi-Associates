import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@src/components/breadcrumb";
import {
  Building2,
  FileText,
  Landmark,
  FileCheck2,
  Coins,
  Network,
  Scale,
  FileSignature,
  FileCode,
  Home,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  ChevronRight,
  Award,
  CheckCircle2
} from "lucide-react";
import { InformationData } from "@src/constant";

export const metadata: Metadata = {
  title: "Corporate Banking & Legal Support | Vaishnavi Associates Hyderabad",
  description: "Corporate banking, company registration, current accounts, business contracts, loan documentation, property documentation, and corporate legal support in Hyderabad.",
};

export default function CorporateBankingPage() {
  const corporateServices = [
    {
      title: "Business Registration Assistance",
      description: "Incorporation support for Private Limited, LLP, One Person Company, Partnership, and Udyam MSME certification with MCA compliance.",
      icon: <Building2 className="w-6 h-6 text-gold-500" />,
      tag: "Entity Formation",
    },
    {
      title: "Corporate Documentation",
      description: "Drafting board resolutions, share certificates, annual returns, statutory register maintenance, and official company records.",
      icon: <FileText className="w-6 h-6 text-gold-500" />,
      tag: "ROC & Governance",
    },
    {
      title: "Current Account & Banking Assistance",
      description: "End-to-end facilitation for opening business current accounts with top partner commercial banks with optimal limits and CMS platforms.",
      icon: <Landmark className="w-6 h-6 text-gold-500" />,
      tag: "Banking Setup",
    },
    {
      title: "Loan Documentation",
      description: "Preparation of bankable project reports, CMA data, asset-liability statements, and legal title scrutiny for business borrowing.",
      icon: <FileCheck2 className="w-6 h-6 text-gold-500" />,
      tag: "Credit Docket",
    },
    {
      title: "Corporate Funding Assistance",
      description: "Specialized debt syndication, term loans, working capital limits, and consortium banking liaison for medium and large enterprises.",
      icon: <Coins className="w-6 h-6 text-gold-500" />,
      tag: "Capital Advisory",
    },
    {
      title: "Business Structuring Assistance",
      description: "Advising on optimal corporate holding structures, founder equity split, holding vs subsidiary models, and expansion frameworks.",
      icon: <Network className="w-6 h-6 text-gold-500" />,
      tag: "Corporate Advisory",
    },
    {
      title: "Business Agreements",
      description: "Drafting robust Shareholder Agreements (SHA), Co-Founder Agreements, Non-Disclosure Agreements (NDA), and Vendor MoUs.",
      icon: <FileSignature className="w-6 h-6 text-gold-500" />,
      tag: "Commercial Contracts",
    },
    {
      title: "Legal Documentation",
      description: "Legal drafting of power of attorneys (PoA), indemnity bonds, affidavits, employment contracts, and statutory letters.",
      icon: <Scale className="w-6 h-6 text-gold-500" />,
      tag: "Statutory Legal",
    },
    {
      title: "Contract-Related Assistance",
      description: "Contract review, risk mitigation analysis, service level agreements (SLA), master service agreements (MSA), and breach avoidance.",
      icon: <FileCode className="w-6 h-6 text-gold-500" />,
      tag: "Contract Review",
    },
    {
      title: "Property Documentation Assistance",
      description: "Title deed verification, 30-year link document search, sale deeds, lease deeds, and municipal approval verification for real estate.",
      icon: <Home className="w-6 h-6 text-gold-500" />,
      tag: "Real Estate Legal",
    },
    {
      title: "Corporate Legal Support",
      description: "Continuous corporate legal advisory, regulatory notice response drafting, and coordination with practicing advocates and legal counsels.",
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      tag: "Legal Counsel",
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
            <Breadcrumb route="/corporate-banking" name="Corporate Banking & Legal" />
          </div>

          <div className="max-w-3xl space-y-6 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>CORPORATE BANKING & LEGAL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Corporate Banking &{" "}
              <span className="gold-gradient-text">Legal Support</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              We assist businesses with eligible corporate, banking, documentation and legal-support requirements through appropriate professionals and service providers.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 justify-center lg:justify-start">
              {["Business Registration", "Current Accounts", "Loan Documentation", "Business Agreements", "Legal Drafting"].map((item, idx) => (
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
                <span>11 Core Support Services</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
                Corporate Banking & Legal Services
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              Comprehensive legal and banking support to safeguard your corporate governance, accelerate funding, and ensure airtight agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {corporateServices.map((srv, idx) => (
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
                  <span>Request Support</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Legal Compliance Disclaimer Box */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-navy-950 mb-1">
                Professional & Statutory Compliance Notice
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Vaishnavi Associates assists with eligible corporate, banking, documentation and legal-support requirements through appropriate professionals and service providers. Statutory approvals, bank sanctions, and legal outcomes are subject to applicable institutional policies and regulatory guidelines.
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
            Strengthen Your <span className="gold-gradient-text">Corporate & Legal Foundation</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Reach out to our corporate advisors to structure business entities, draft key agreements, or access corporate credit facilities.
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
              Get Corporate Consultation
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
