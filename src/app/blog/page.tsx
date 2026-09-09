import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@src/components/breadcrumb";
import { Sparkles, Calendar, ArrowRight, User, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Financial Guides | Vaishnavi Associates",
  description: "Expert articles on bank loan interest rates, GST compliance changes, corporate registration guidelines, and real estate investments in Hyderabad.",
};

const blogPosts = [
  {
    title: "How to Secure a ₹5 Crore Business Loan Without Collateral (CGTMSE Guide)",
    slug: "cgtmse-business-loan-guide",
    category: "Loans",
    date: "September 2026",
    author: "Vaishnavi Financial Desk",
    summary: "A step-by-step breakdown of government credit guarantee schemes, eligibility thresholds, and bank appraisal criteria for Hyderabad MSMEs.",
    readTime: "5 min read",
  },
  {
    title: "Top 5 Bank Interest Rate Trends for Home Loans & LAP in Telangana",
    slug: "home-loan-interest-rates-telangana",
    category: "Real Estate & Home Loans",
    date: "August 2026",
    author: "Loan Advisory Team",
    summary: "Comparing repo-rate linked lending rates across SBI, HDFC, ICICI, and Axis Bank with tips on reducing your monthly EMI.",
    readTime: "4 min read",
  },
  {
    title: "Private Limited vs LLP in 2026: Which Legal Structure Fits Your Business?",
    slug: "pvt-ltd-vs-llp-comparison",
    category: "Company Registration",
    date: "August 2026",
    author: "Corporate Secretarial Desk",
    summary: "An in-depth analysis of tax implications, annual ROC compliance costs, audit exemptions, and venture fundraising flexibility.",
    readTime: "6 min read",
  },
  {
    title: "New GST Return Filing Changes & How to Avoid ITC 2B Disallowances",
    slug: "gst-return-filing-itc-guide",
    category: "GST & Tax",
    date: "July 2026",
    author: "Tax Compliance Partner",
    summary: "Avoid costly departmental show-cause notices by implementing automated monthly invoice reconciliation and vendor tracking.",
    readTime: "4 min read",
  },
  {
    title: "Why Pre-Leased Commercial Real Estate Offers 9% Yield in Hyderabad",
    slug: "pre-leased-commercial-real-estate-hyderabad",
    category: "Commercial Real Estate",
    date: "July 2026",
    author: "Real Estate Investment Desk",
    summary: "Exploring rental yields, lock-in periods, and tenant covenants in Kokapet, HITEC City, and Financial District commercial spaces.",
    readTime: "7 min read",
  },
  {
    title: "GHMC Trade License Renewal Guidelines for Commercial Establishments",
    slug: "ghmc-trade-license-renewal-guide",
    category: "Municipal Licenses",
    date: "June 2026",
    author: "Municipal Liaison Team",
    summary: "Everything you need to know about fee computation, required property tax receipts, and online certificate generation.",
    readTime: "3 min read",
  },
];

export default function BlogPage() {
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
            <Breadcrumb route="/blog" name="Insights & Blog" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Knowledge Center</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white">
              Financial Wisdom, Tax Trends & <span className="gold-gradient-text">Advisory Guides</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Stay ahead with curated analyses on institutional banking, interest rate movements, corporate compliance calendars, and commercial property intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mainContainer">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article
                key={idx}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury hover:bg-white transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.date}</span>
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors mb-3 leading-snug font-display">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>{post.readTime}</span>
                  <span className="text-navy-950 font-bold group-hover:text-gold-600 flex items-center gap-1 transition-colors">
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
