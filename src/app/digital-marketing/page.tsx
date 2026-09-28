import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@src/components/breadcrumb";
import {
  Globe,
  Layout,
  Target,
  Share2,
  Camera,
  Briefcase,
  Search,
  Megaphone,
  MapPin,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  ChevronRight,
  Palette,
  CheckCircle2,
  BarChart3,
  Users
} from "lucide-react";
import { InformationData } from "@src/constant";

export const metadata: Metadata = {
  title: "Digital Marketing Solutions for Business Growth | Vaishnavi Associates",
  description:
    "We help businesses strengthen their online presence and generate customer enquiries through practical digital marketing solutions including Web Development, SEO, Google Ads, Meta Ads, and Lead Generation.",
};

export default function DigitalMarketingPage() {
  const marketingServices = [
    {
      title: "Website Development",
      description:
        "High-performance, modern, and mobile-responsive corporate and business websites tailored to your brand identity.",
      icon: <Globe className="w-6 h-6 text-gold-500" />,
      tag: "Web Engineering",
    },
    {
      title: "Landing Pages",
      description:
        "Fast-loading, high-converting standalone landing pages engineered specifically for direct advertising campaigns.",
      icon: <Layout className="w-6 h-6 text-gold-500" />,
      tag: "Conversion Focused",
    },
    {
      title: "Lead-generation Websites",
      description:
        "Strategic web architectures integrated with instant enquiry forms, CRM tracking, and interactive conversion funnels.",
      icon: <Target className="w-6 h-6 text-gold-500" />,
      tag: "Enquiry Engine",
    },
    {
      title: "Social Media Marketing",
      description:
        "Multi-channel social branding campaigns to establish authority, engage target audiences, and expand digital reach.",
      icon: <Share2 className="w-6 h-6 text-gold-500" />,
      tag: "Brand Presence",
    },
    {
      title: "Facebook & Instagram Marketing",
      description:
        "Targeted Meta visual campaigns reaching prospective customers based on precise demographics, interests, and geographic locations.",
      icon: <Camera className="w-6 h-6 text-gold-500" />,
      tag: "Visual Ads",
    },
    {
      title: "LinkedIn Marketing",
      description:
        "B2B networking and executive advertising connecting you directly with corporate leaders, decision-makers, and founders.",
      icon: <Briefcase className="w-6 h-6 text-gold-500" />,
      tag: "B2B Outreach",
    },
    {
      title: "Google Ads",
      description:
        "High-intent Pay-Per-Click (PPC) search, display, and call-only ads targeting users actively searching for your services.",
      icon: <Search className="w-6 h-6 text-gold-500" />,
      tag: "Search Intent",
    },
    {
      title: "Meta Ads",
      description:
        "Full-funnel Meta advertising strategies utilizing custom audiences, lookalike modeling, and retargeting pixels.",
      icon: <Megaphone className="w-6 h-6 text-gold-500" />,
      tag: "Scale & Reach",
    },
    {
      title: "SEO & Local SEO",
      description:
        "On-page optimization, keyword architecture, technical SEO, and citations to rank higher on Google search results organically.",
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
      tag: "Organic Growth",
    },
    {
      title: "Google Business Profile Optimization",
      description:
        "Comprehensive local Google Maps & Business Profile setup to dominate local area search and generate direct incoming phone calls.",
      icon: <MapPin className="w-6 h-6 text-gold-500" />,
      tag: "Local Dominance",
    },
    {
      title: "Social Media Management",
      description:
        "Consistent content calendars, community interaction, profile auditing, and audience engagement handling across platforms.",
      icon: <Users className="w-6 h-6 text-gold-500" />,
      tag: "Full Management",
    },
    {
      title: "Creative Posts",
      description:
        "Eye-catching digital creatives, promotional posters, banners, and infographic designs that capture user attention instantly.",
      icon: <Palette className="w-6 h-6 text-gold-500" />,
      tag: "Design & Copy",
    },
    {
      title: "Lead Generation Campaigns",
      description:
        "End-to-end paid enquiry campaigns delivering verified, high-intent client inquiries directly to your sales team.",
      icon: <BarChart3 className="w-6 h-6 text-gold-500" />,
      tag: "Revenue Driven",
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
            <Breadcrumb route="/digital-marketing" name="Digital Marketing" />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>DIGITAL MARKETING</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-5 leading-tight">
              Digital Marketing Solutions for{" "}
              <span className="text-gradient-gold">Business Growth</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              We help businesses strengthen their online presence and generate customer enquiries through practical digital marketing solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                style={{
                  background:
                    "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                  color: "#061527",
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base hover:brightness-110 shadow-gold-glow transition-all duration-300"
              >
                <span>Launch Marketing Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${InformationData.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20Digital%20Marketing%20solutions%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base bg-emerald-600/90 text-white hover:bg-emerald-600 transition-all border border-emerald-500/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {InformationData.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="mainContainer">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-extrabold text-gold-600 mb-2 block">
              Performance Driven Growth
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-navy-950">
              Practical Marketing & Web Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              From responsive digital real estate to high-conversion customer acquisition channels, we offer comprehensive marketing assistance under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-gold-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center border border-gold-500/20 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors pt-4 border-t border-slate-100"
                >
                  <span>Enquire for {service.title}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Strategy Pillars */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="mainContainer">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-extrabold text-gold-600 mb-1 block">
                Structured Execution
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display">
                How We Deliver Digital Results
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-700 font-extrabold flex items-center justify-center mx-auto mb-3 text-sm">
                  01
                </div>
                <h4 className="font-bold text-navy-950 text-base mb-1.5">
                  Target Audience Mapping
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Identifying customer personas, geographic priorities, and search habits relevant to your niche.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-700 font-extrabold flex items-center justify-center mx-auto mb-3 text-sm">
                  02
                </div>
                <h4 className="font-bold text-navy-950 text-base mb-1.5">
                  Asset & Funnel Setup
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Building optimized web pages, high-converting creatives, and pixel-integrated lead capture forms.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-700 font-extrabold flex items-center justify-center mx-auto mb-3 text-sm">
                  03
                </div>
                <h4 className="font-bold text-navy-950 text-base mb-1.5">
                  Continuous Optimization
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Monitoring lead quality, cost per acquisition, search rankings, and campaign engagement metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Consultation CTA */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mainContainer">
          <div
            style={{
              background: "linear-gradient(135deg, #061527 0%, #0B2545 100%)",
            }}
            className="rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs uppercase tracking-widest font-extrabold text-gold-400 mb-2 block">
                Let&apos;s Discuss Your Marketing Goals
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display mb-4">
                Ready to Grow Your Business Presence?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Speak directly with our team to explore tailored website and customer-enquiry solutions designed for your industry.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  style={{
                    background:
                      "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                    color: "#061527",
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-sm sm:text-base hover:brightness-110 shadow-gold-glow transition-all"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${InformationData.contactNumber}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call: {InformationData.contactNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
