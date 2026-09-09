"use client";

import React from "react";
import Banner from "@src/components/banner";
import WhoWeAre from "@src/components/whoWeAre";
import AboutRules from "@src/components/aboutRules";
import { AchievementData } from "@src/constant";
import { IAchievementData } from "@src/types";
import { Award, ShieldCheck, Landmark, Building2, Coins, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div>
      {/* 1. Header Banner */}
      <Banner
        route="/about-us"
        name="About Us"
        title="About Vaishnavi Associates"
      />

      {/* 2. Who We Are (Mission, Vision, Values) */}
      <WhoWeAre />

      {/* 3. Achievements & Track Record (Luxury Navy Section) */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold">
              <Award className="w-4 h-4 text-gold-400" />
              <span>Demonstrated Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight">
              A Proven Record of <span className="gold-gradient-text">Financial Sanctions</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We have facilitated capital growth across micro, small, and medium enterprises, helped thousands of families acquire their dream homes, and closed prime commercial transactions across Telangana.
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AchievementData.map((val: IAchievementData, index: number) => (
              <div
                key={index}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 hover:border-gold-500/40 hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-500/15 flex items-center justify-center mx-auto mb-6 text-gold-400">
                  {val.icons}
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-display gold-gradient-text mb-2">
                  {val.digit}
                </h3>
                <h4 className="font-semibold text-sm sm:text-base text-slate-300">
                  {val.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Consultation CTA Inside Navy Section */}
          <div className="mt-16 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:brightness-110 shadow-gold-glow transition-all duration-300"
            >
              <span>Partner With Our Advisors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Ethical Commitments & Compliance */}
      <AboutRules />
    </div>
  );
}