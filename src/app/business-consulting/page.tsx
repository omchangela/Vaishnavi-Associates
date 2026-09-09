import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@src/components/breadcrumb";
import { Sparkles, ShieldCheck, CheckCircle2, Award, Phone, ArrowRight, Building2, Scale, Users2 } from "lucide-react";
import { InformationData } from "@src/constant";

export const metadata: Metadata = {
  title: "Corporate & Business Consulting | Vaishnavi Associates",
  description: "Corporate restructuring, joint venture advisory, legal compliance management, and strategic growth consulting in Hyderabad.",
};

export default function BusinessConsultingPage() {
  const services = [
    {
      title: "Corporate Restructuring & M&A",
      desc: "Entity reorganization, business transfer agreements, and joint venture framework design.",
      icon: <Building2 className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Statutory Governance & Compliance",
      desc: "Full-cycle MCA, secretarial compliance, and regulatory risk insulation.",
      icon: <Scale className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Expansion & Franchise Advisory",
      desc: "Structuring regional expansion, licensing frameworks, and commercial real estate acquisition.",
      icon: <Award className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Promoter & Board Advisory",
      desc: "Shareholder agreements, dispute resolution, and succession wealth planning.",
      icon: <Users2 className="w-6 h-6 text-gold-500" />,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <section
        style={{
          background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
        }}
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 text-white overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          <div className="mb-6">
            <Breadcrumb route="/business-consulting" name="Business Consulting" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Corporate Advisory Practice</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white">
              Executive Business Consulting & <span className="gold-gradient-text">Governance</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Navigating complex regulatory environments, corporate restructuring, and commercial contracts with veteran legal and financial advisors.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/contact-us"
                style={{
                  background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                  color: "#061527",
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base shadow-gold-glow hover:brightness-110 transition-all text-center"
              >
                Consult With Our Partners
              </Link>
              <a
                href={`tel:${InformationData.contactNumber}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center text-sm sm:text-base"
              >
                Call: {InformationData.contactNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mainContainer">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
              Consulting Specializations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Bespoke legal, operational, and financial frameworks for ambitious enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury transition-all duration-300 flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-950 flex items-center justify-center shrink-0 shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-950 mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
