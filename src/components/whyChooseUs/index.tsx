import React from "react";
import Link from "next/link";
import {
  Percent,
  Landmark,
  ShieldAlert,
  Clock,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Lowest Bank Rates Guaranteed",
      desc: "We leverage institutional relationships across 30+ banks to secure interest rates starting from 8.40% p.a.",
      icon: <Percent className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Pre-Underwritten Submissions",
      desc: "We review your CIBIL profile and financials before submitting, protecting your credit score from inquiry penalties.",
      icon: <UserCheck className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Doorstep Documentation",
      desc: "Our financial executives collect, verify, and deliver all bank paperwork right from your home or office.",
      icon: <Clock className="w-6 h-6 text-gold-500" />,
    },
    {
      title: "Zero Hidden Margins",
      desc: "100% transparent fee structure. No undisclosed charges or inflated processing fee promises.",
      icon: <ShieldAlert className="w-6 h-6 text-gold-500" />,
    },
  ];

  return (
    <section
      style={{ background: "linear-gradient(135deg, #061527 0%, #0B2545 50%, #071526 100%)" }}
      className="py-20 sm:py-28 text-white relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mainContainer relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>The Vaishnavi Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight">
              Why 5,000+ Borrowers Choose{" "}
              <span className="gold-gradient-text">Vaishnavi Associates</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Applying for institutional credit directly often means navigating rigid bank bureaucracies, slow processing, and hidden clauses. We act as your dedicated credit advocates from application to payout.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Direct Advisory Hotline</h4>
                  <span className="text-xs text-slate-400">+91 91822 58090</span>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Speak directly with senior loan officers to check eligibility without hurting your credit score.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-gold-500/20 flex items-center justify-center mb-6 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}