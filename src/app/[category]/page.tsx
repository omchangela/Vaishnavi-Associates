import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  categoriesCatalog,
  getAllCategories,
  getCategoryBySlug,
} from "@src/data/categoriesCatalog";
import { getServicesByCategory, servicesCatalog } from "@src/data/servicesCatalog";
import Breadcrumb from "@src/components/breadcrumb";
import BankPartners from "@src/components/home/BankPartners";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Award,
  ChevronRight,
  Zap,
} from "lucide-react";
import { InformationData } from "@src/constant";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const catData = getCategoryBySlug(category);

  if (!catData) {
    return {
      title: "Category Not Found | Vaishnavi Associates",
    };
  }

  return {
    title: `${catData.title} in Hyderabad | Vaishnavi Associates`,
    description: catData.description,
    keywords: `${catData.title}, Vaishnavi Associates, Hyderabad financial services, corporate loans, business registrations`,
  };
}

export default async function CategoryHubPage({ params }: PageProps) {
  const { category } = await params;
  const catData = getCategoryBySlug(category);

  if (!catData) {
    return notFound();
  }

  const categoryServices = getServicesByCategory(category);
  const isLoan = category === "loans";

  const loanOrderedSlugs = [
    "home-loan",
    "home-loan-balance-transfer",
    "loan-against-property",
    "business-loan",
    "working-capital-loan",
    "personal-loan",
    "loan-refinancing",
    "corporate-funding",
  ];

  const displayServices = isLoan
    ? loanOrderedSlugs.map((slug) => servicesCatalog[`loans/${slug}`]).filter(Boolean)
    : categoryServices;

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* 1. Category Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
        }}
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 text-white overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          <div className="mb-6">
            <Breadcrumb route={`/${category}`} name={isLoan ? "Loans & Financial Services" : catData.title} />
          </div>

          <div className="max-w-3xl space-y-6 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>{isLoan ? "LOANS & FINANCIAL SERVICES" : catData.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              {isLoan ? (
                <>
                  Loan Solutions for{" "}
                  <span className="gold-gradient-text">Individuals & Businesses</span>
                </>
              ) : (
                <>
                  {catData.title}{" "}
                  <span className="gold-gradient-text">Directory</span>
                </>
              )}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {catData.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {catData.heroHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/40 text-center transition-colors"
                >
                  <span className="text-xs font-semibold text-gold-300 block">{hl}</span>
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
                <span>{catData.servicesCount}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
                {isLoan ? "Loan Solutions for Individuals & Businesses" : "Explore Available Services"}
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              {isLoan
                ? "We assist customers in exploring suitable financing options based on their profile, requirement and eligibility. Final approval, interest rate, terms and disbursement are subject to the relevant lender's policies."
                : "Select a service below to view complete eligibility guidelines, interest rates, document checklists, and application procedures."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayServices.map((srv, idx) => (
              <div
                key={idx}
                className="group rounded-3xl p-6 sm:p-7 bg-slate-50/70 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gold-500/10 text-gold-800 border border-gold-500/20">
                      {srv.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600">
                      {srv.approvalTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors font-display">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 mb-6 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Rate / Timeline:</span>
                      <span className="font-bold text-navy-950">{srv.rateOrTimeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Coverage / Limit:</span>
                      <span className="font-bold text-navy-950">{srv.maxAmountOrScope}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/${srv.category}/${srv.slug}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-navy-950 text-white font-bold text-xs sm:text-sm hover:bg-gold-500 hover:text-navy-950 transition-colors group/btn"
                >
                  <span>View Details & Apply</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Important Lending Policy Disclaimer Box */}
          {isLoan && (
            <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-navy-950 mb-1">
                  Important Lending Disclosure & Policy Terms
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We assist customers in exploring suitable financing options based on their profile, requirement and eligibility. Final approval, interest rate, terms and disbursement are subject to the relevant lender's policies.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Partner Banks (If Loans) */}
      {isLoan && <BankPartners />}

      {/* 4. Category CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #061527 0%, #0B2545 50%, #061527 100%)",
        }}
        className="py-16 sm:py-20 text-white text-center"
      >
        <div className="mainContainer max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
            Need Expert Assistance with <span className="gold-gradient-text">{catData.title}</span>?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Our team of chartered accountants, financial analysts, and banking liaisons is here to assist you at every step.
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
              Get Free Assessment
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
