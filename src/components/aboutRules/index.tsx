import React from "react";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { AboutRulesData } from "@src/constant";

export default function AboutRules() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="mainContainer flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
        
        {/* Left Sticky Column */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-[140px] text-center lg:text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-gold-500/30 text-navy-900 text-xs sm:text-sm font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-gold-500" />
            <span>Ethical Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-navy-950 tracking-tight leading-tight">
            Our Guiding <span className="gold-gradient-text">Commitments</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed pt-2">
            In the financial and real estate sector, transparency is everything. From securing complex commercial debt to executing clear-title property transfers, our operations adhere strictly to statutory regulations, banking compliance, and total client confidentiality.
          </p>
        </div>

        {/* Right Rules List */}
        <div className="w-full lg:w-[55%] space-y-10">
          {Object.values(AboutRulesData).map(
            (section: { name: string; child: string[] }, sectionIndex: number) => (
              <div
                key={sectionIndex}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold font-display text-navy-950 border-b border-slate-100 pb-3">
                  {section.name}
                </h3>
                <ul className="space-y-4">
                  {section.child.map((val: string, childIndex: number) => (
                    <li key={childIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {val}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}