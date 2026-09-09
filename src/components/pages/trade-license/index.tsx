"use client";

import React, { useState } from "react";
import Link from "next/link";
import Banner from "@src/components/banner";
import {
  FileCheck2,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Building,
  ArrowRight,
  Clock,
  Sparkles
} from "lucide-react";

const tradeDocs = [
  {
    title: "Applicant KYC",
    text: "Aadhaar Card and PAN Card of the applicant or authorized director / partner.",
  },
  {
    title: "Premises Ownership / Rental Proof",
    text: "Latest registered Rental Agreement or No Objection Certificate (NOC) along with owner's identity.",
  },
  {
    title: "Property Tax Receipt",
    text: "Recent municipal property tax receipt or assessment order of the commercial business premises.",
  },
  {
    title: "Electricity Bill",
    text: "Latest commercial electricity bill for the physical premises showing accurate address.",
  },
  {
    title: "Business Establishment Proof",
    text: "Certificate of Incorporation, Partnership Deed, or GSTIN certificate of the enterprise.",
  },
  {
    title: "Site Photos & Plinth Area",
    text: "Clear front photograph of the establishment with name board and square footage / plinth area measurement.",
  },
];

const steps = [
  {
    num: "1",
    title: "Document Collection",
    desc: "We review your rental agreement, property tax receipt, and commercial location documents.",
  },
  {
    num: "2",
    title: "Portal Filing",
    desc: "Our regulatory team files the official application on the municipal trade licensing portal.",
  },
  {
    num: "3",
    title: "Fee Payment & Inspection",
    desc: "Coordination with municipal inspectors and prompt settlement of government statutory fees.",
  },
  {
    num: "4",
    title: "Certificate Allotment",
    desc: "Receive your digitally signed Trade License certificate with immediate legal validity.",
  },
];

export default function TradeLicense() {
  return (
    <div>
      <Banner
        route="/registrations"
        name="Trade License"
        title="Municipal Trade License Registration"
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="mainContainer space-y-20">
          
          {/* Top Overview Grid */}
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-gold-700">
                <FileCheck2 className="w-4 h-4" />
                Statutory Municipal Licensing
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 leading-tight">
                Secure Your <span className="gold-gradient-text">Trade License</span> Without Delays
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                A Trade License is a mandatory legal authorization issued by municipal corporations (such as GHMC, Municipal Councils, and Panchayats) allowing businesses to operate commercial premises legally. Vaishnavi Associates handles the entire end-to-end filing and fast issuance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-navy-950 font-bold shadow-gold-glow hover:brightness-110 transition duration-300"
                >
                  <span>Apply for Trade License</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 px-6 py-4 text-navy-950 font-semibold transition"
                >
                  <span>Check Fees & Penalties</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-luxury space-y-5">
              <h3 className="text-xl font-bold font-display text-navy-950">
                Key Benefits of a Valid Trade License
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Protection from municipal closure notices & penalties",
                  "Mandatory for opening commercial bank accounts",
                  "Required for GST, FSSAI, and central approvals",
                  "Instills consumer trust and corporate credibility",
                  "Fast 3 to 5-day issuance with Vaishnavi Associates",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step-by-Step Procedure */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-navy-950">
                Simple 4-Step Registration Process
              </h3>
              <p className="text-slate-600 text-sm">
                We handle the government paperwork so you can concentrate on running your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-gold-400 hover:bg-white hover:shadow-luxury transition-all duration-300"
                >
                  <span className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 font-extrabold flex items-center justify-center text-sm mb-4">
                    {st.num}
                  </span>
                  <h4 className="font-bold text-base text-navy-950 mb-2">{st.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Documentation Checklist
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-display">
                  Documents Needed for Municipal Allotment
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tradeDocs.map((doc, idx) => (
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
                  <span>Start Trade License Filing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
