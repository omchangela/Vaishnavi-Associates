import React from "react";
import { WhoWeAreData } from "@src/constant";
import { IWhoWeAreData } from "@src/types";
import { Target, Eye, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function WhoWeAre() {
  const icons = [
    <Target key={0} className="w-6 h-6 text-gold-500" />,
    <Eye key={1} className="w-6 h-6 text-gold-500" />,
    <Award key={2} className="w-6 h-6 text-gold-500" />,
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="mainContainer">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-gold-500/30 text-navy-900 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Our Foundation & Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight leading-tight">
            Building Long-Term Prosperity Through{" "}
            <span className="gold-gradient-text">Trust & Excellence</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Headquartered in Hyderabad, Vaishnavi Associates is committed to simplifying debt financing, commercial real estate acquisition, and corporate compliance for individuals and thriving enterprises.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WhoWeAreData.map((val: IWhoWeAreData, index: number) => (
            <div
              key={index}
              className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-luxury hover:bg-white hover:border-gold-400 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-900/5 group-hover:bg-gold-500/15 flex items-center justify-center mb-6 transition-colors">
                  {icons[index] || icons[0]}
                </div>
                <h3 className="text-xl font-bold font-display text-navy-950 group-hover:text-gold-600 transition-colors mb-3">
                  {val.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {val.details}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-gold-600">
                <CheckCircle2 className="w-4 h-4 text-gold-500" />
                <span>Client-First Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}