import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  servicesCatalog,
  getServiceByPath,
  getAllServices,
} from "@src/data/servicesCatalog";
import Breadcrumb from "@src/components/breadcrumb";
import EmiCalculator from "@src/components/calculator/EmiCalculator";
import BankPartners from "@src/components/home/BankPartners";
import ContactForm from "@src/components/Forms/contactForm";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  FileText,
  BadgePercent,
  Sparkles,
  HelpCircle,
  Award,
  ChevronRight,
} from "lucide-react";
import { InformationData } from "@src/constant";

interface PageProps {
  params: Promise<{
    category: string;
    service: string;
  }>;
}

// 1. Static Site Generation: Pre-render all service routes at build time
export async function generateStaticParams() {
  const allServices = getAllServices();
  return allServices.map((item) => ({
    category: item.category,
    service: item.slug,
  }));
}

// 2. Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, service } = await params;
  const serviceData = getServiceByPath(category, service);

  if (!serviceData) {
    return {
      title: "Service Not Found | Vaishnavi Associates",
    };
  }

  return {
    title: `${serviceData.title} in Hyderabad | Vaishnavi Associates`,
    description: serviceData.description,
    keywords: `${serviceData.title}, ${serviceData.categoryName}, Vaishnavi Associates, loans hyderabad, company registration hyderabad`,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { category, service } = await params;
  const serviceData = getServiceByPath(category, service);

  if (!serviceData) {
    return notFound();
  }

  const isLoan = category === "loans";

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* 1. Hero Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
        }}
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 text-white overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          {/* Breadcrumb Trail */}
          <div className="mb-6">
            <Breadcrumb route={`/${category}/${service}`} name={serviceData.title} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>{serviceData.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.18] tracking-tight text-white">
                {serviceData.title}{" "}
                <span className="gold-gradient-text">with Vaishnavi Associates</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {serviceData.tagline}
              </p>

              {/* Stat Highlights Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-[11px] text-slate-400 block font-medium">Rate / Timeline</span>
                  <span className="text-sm sm:text-base font-bold text-gold-400">{serviceData.rateOrTimeline}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-[11px] text-slate-400 block font-medium">Max Limit / Scope</span>
                  <span className="text-sm sm:text-base font-bold text-white">{serviceData.maxAmountOrScope}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-[11px] text-slate-400 block font-medium">Processing Time</span>
                  <span className="text-sm sm:text-base font-bold text-emerald-400">{serviceData.approvalTime}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <a
                  href="#inquiry"
                  style={{
                    background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                    color: "#061527",
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold shadow-gold-glow hover:brightness-110 transition-all text-sm sm:text-base"
                >
                  <span>Apply Online Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${InformationData.contactNumber}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>{InformationData.contactNumber}</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Application Box */}
            <div className="lg:col-span-5" id="inquiry">
              <div
                style={{
                  backgroundColor: "rgba(11, 37, 69, 0.9)",
                  borderColor: "rgba(197, 155, 39, 0.4)",
                }}
                className="rounded-3xl border p-6 sm:p-8 backdrop-blur-xl shadow-2xl text-white"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Instant Consultation</h3>
                    <p className="text-xs text-slate-300">Connect with senior loan & corporate advisor</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Location / City</label>
                      <input
                        type="text"
                        defaultValue="Hyderabad"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      {isLoan ? "Required Loan Amount" : "Requirement Details"}
                    </label>
                    <input
                      type="text"
                      placeholder={isLoan ? "e.g. ₹50 Lakh" : "Briefly describe requirement"}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                      color: "#061527",
                    }}
                    className="w-full py-4 rounded-xl font-extrabold text-sm shadow-md hover:brightness-110 transition-all cursor-pointer mt-2"
                  >
                    Request Callback in 15 Minutes
                  </button>

                  <p className="text-[11px] text-center text-slate-400 pt-1">
                    🔒 Zero spam. Complete data confidentiality guaranteed.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Paragraphs */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60">
        <div className="mainContainer">
          <div className="max-w-4xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold">
              <Award className="w-4 h-4 text-gold-500" />
              <span>Executive Summary</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-navy-950">
              About {serviceData.title}
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              {serviceData.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive EMI Calculator (Only on Loans) */}
      {isLoan && (
        <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="mainContainer">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold mb-3">
                <BadgePercent className="w-4 h-4 text-gold-500" />
                <span>Financial Estimator</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
                Calculate Your Monthly EMI
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Estimate your monthly installment and total payable interest before submitting your bank file.
              </p>
            </div>
            <EmiCalculator />
          </div>
        </section>
      )}

      {/* 4. Key Advantages & Benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mainContainer">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
              The Vaishnavi Associates <span className="gold-gradient-text">Advantage</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Why Telangana and Andhra Pradesh enterprises choose us for {serviceData.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 text-gold-400 flex items-center justify-center font-extrabold text-sm mb-5 shadow-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 mb-2 font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Documents Required Checklist */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="mainContainer">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold mb-3">
              <FileText className="w-4 h-4 text-gold-500" />
              <span>Checklist</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
              Required Documents
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Keep these documents ready for lightning-fast verification and express sanction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.documentsRequired.map((docCategory, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4"
              >
                <h3 className="text-base font-bold text-navy-950 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                  <span>{docCategory.category}</span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  {docCategory.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Step-by-Step Execution Process */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/60">
        <div className="mainContainer">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
              Simple 4-Step Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From application submission to final approval without operational friction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 space-y-3"
              >
                <span className="text-4xl font-black text-slate-200 block font-display">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-navy-950">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 30+ Partner Banks */}
      {isLoan && <BankPartners />}

      {/* 8. Frequently Asked Questions */}
      {serviceData.faqs.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
          <div className="mainContainer">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold mb-3">
                <HelpCircle className="w-4 h-4 text-gold-500" />
                <span>Clarifications</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {serviceData.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
                >
                  <h3 className="text-base font-bold text-navy-950 flex items-center gap-2">
                    <span className="text-gold-500 font-extrabold">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-slate-600 pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Bottom Consultation Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #061527 0%, #0B2545 50%, #061527 100%)",
        }}
        className="py-16 sm:py-20 text-white relative overflow-hidden"
      >
        <div className="mainContainer relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Ready to Begin with <span className="gold-gradient-text">{serviceData.title}</span>?
          </h2>
          <p className="text-slate-300 text-base">
            Speak directly with our senior financial advisors and legal consultants today. Doorstep service available across Hyderabad, Secunderabad, and Cyberabad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact-us"
              style={{
                background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                color: "#061527",
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base shadow-gold-glow hover:brightness-110 transition-all"
            >
              Book Free Consultation
            </Link>
            <a
              href={`tel:${InformationData.contactNumber}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-sm sm:text-base"
            >
              Call: {InformationData.contactNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
