import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories } from "@src/data/categoriesCatalog";
import { getAllServices } from "@src/data/servicesCatalog";
import Breadcrumb from "@src/components/breadcrumb";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building2,
  Coins,
  FileCheck2,
  Laptop,
  Calculator,
} from "lucide-react";
import { InformationData } from "@src/constant";

export const metadata: Metadata = {
  title: "All Services Directory | Vaishnavi Associates Hyderabad",
  description: "Explore all 45+ financial, loan, corporate registration, GST, taxation, and IT solutions offered by Vaishnavi Associates in Telangana & Andhra Pradesh.",
};

export default function ServicesDirectoryPage() {
  const categories = getAllCategories();
  const allServices = getAllServices();

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
        }}
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 text-white overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          <div className="mb-6">
            <Breadcrumb route="/services" name="All Services" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Complete Service Directory</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white">
              Financial, Legal & Corporate <span className="gold-gradient-text">Solutions</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore our full suite of 45+ institutional lending products, corporate registrations, tax compliance filings, and digital engineering services under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Categories & Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mainContainer space-y-20">
          {categories.map((cat, catIdx) => {
            const catServices = allServices.filter((s) => s.category === cat.slug);

            return (
              <div key={catIdx} id={cat.slug} className="scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
                  <div>
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                      Category 0{catIdx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-navy-950">
                      {cat.title}
                    </h2>
                    <p className="text-slate-500 text-sm mt-1 max-w-xl">
                      {cat.description}
                    </p>
                  </div>
                  <Link
                    href={`/${cat.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-gold-600 hover:text-gold-700"
                  >
                    <span>View Category Hub</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((srv, srvIdx) => (
                    <Link
                      key={srvIdx}
                      href={`/${srv.category}/${srv.slug}`}
                      className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-gold-400 hover:bg-white hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-navy-900/5 text-navy-900 border border-navy-900/10">
                            {srv.badge}
                          </span>
                          <span className="text-xs font-semibold text-gold-600">
                            {srv.rateOrTimeline}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-navy-950 group-hover:text-gold-600 transition-colors mb-2 font-display">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {srv.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-navy-900">
                        <span>Learn More</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-gold-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #061527 0%, #0B2545 50%, #061527 100%)",
        }}
        className="py-16 sm:py-20 text-white text-center"
      >
        <div className="mainContainer max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
            Can't Find Your Exact Requirement?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We handle tailored financial and regulatory assignments. Contact our team directly for custom consultation.
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
              Contact Advisory Team
            </Link>
            <a
              href={`tel:${InformationData.contactNumber}`}
              className="px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-sm"
            >
              Call: {InformationData.contactNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
