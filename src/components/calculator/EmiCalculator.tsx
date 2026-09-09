"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle2, IndianRupee, ShieldCheck, Sparkles } from "lucide-react";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(2500000);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(10);

  const { monthlyEmi, totalInterest, totalPayment, principalPercentage, interestPercentage } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (P <= 0 || r <= 0 || n <= 0) {
      return {
        monthlyEmi: 0,
        totalInterest: 0,
        totalPayment: 0,
        principalPercentage: 100,
        interestPercentage: 0,
      };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    const interest = total - P;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(interest),
      totalPayment: Math.round(total),
      principalPercentage: Math.round((P / total) * 100),
      interestPercentage: Math.round((interest / total) * 100),
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mainContainer relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/5 border border-gold-500/30 text-navy-900 text-xs sm:text-sm font-semibold mb-4 shadow-sm">
            <Calculator className="w-4 h-4 text-gold-500" />
            <span>Interactive Financial Planning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy-950 tracking-tight leading-tight">
            Calculate Your <span className="gold-gradient-text">Loan EMI</span> in Seconds
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Estimate your monthly repayments, interest outflow, and tenure options for Business Loans, Home Loans, and Loans Against Property.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-8">
            {/* Control 1: Loan Amount */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm sm:text-base font-semibold text-navy-950 flex items-center gap-1.5">
                  <IndianRupee className="w-4 h-4 text-gold-500" />
                  Loan Amount
                </label>
                <div className="px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 font-bold text-base sm:text-lg">
                  {formatCurrency(loanAmount)}
                </div>
              </div>
              <input
                type="range"
                min={100000}
                max={50000000}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>₹1 Lakh</span>
                <span>₹2.5 Crore</span>
                <span>₹5 Crore</span>
              </div>
            </div>

            {/* Control 2: Interest Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm sm:text-base font-semibold text-navy-950">
                  Interest Rate (p.a.)
                </label>
                <div className="px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 font-bold text-base sm:text-lg">
                  {interestRate}%
                </div>
              </div>
              <input
                type="range"
                min={7.0}
                max={20.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>7.0%</span>
                <span>13.5%</span>
                <span>20.0%</span>
              </div>
            </div>

            {/* Control 3: Loan Tenure */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm sm:text-base font-semibold text-navy-950">
                  Loan Tenure
                </label>
                <div className="px-4 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 font-bold text-base sm:text-lg">
                  {tenureYears} {tenureYears === 1 ? "Year" : "Years"} ({tenureYears * 12} Months)
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
              />
              <div className="flex justify-between text-xs text-slate-400 font-medium">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Quick Loan Presets */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                Popular Quick Presets
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Home Loan (₹50L @ 8.5% 20Y)", p: 5000000, r: 8.5, t: 20 },
                  { label: "Business Loan (₹20L @ 11.5% 5Y)", p: 2000000, r: 11.5, t: 5 },
                  { label: "LAP (₹1Cr @ 9.25% 15Y)", p: 10000000, r: 9.25, t: 15 },
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setLoanAmount(preset.p);
                      setInterestRate(preset.r);
                      setTenureYears(preset.t);
                    }}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-gold-500/15 hover:text-navy-900 text-slate-700 transition-colors border border-slate-200"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column (Luxury Navy Backdrop) */}
          <div
            style={{ background: "linear-gradient(135deg, #0B2545 0%, #061527 100%)" }}
            className="lg:col-span-5 p-6 sm:p-10 lg:p-12 text-white flex flex-col justify-between relative"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Repayment Breakdown
              </span>

              {/* Monthly EMI Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-sm text-slate-300 font-medium block mb-1">
                  Estimated Monthly EMI
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-display gold-gradient-text">
                  {formatCurrency(monthlyEmi)}
                </div>
                <span className="text-xs text-slate-400 mt-1 block">
                  *Indicative EMI. Subject to bank approval & credit profile.
                </span>
              </div>

              {/* Stats Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-xs text-slate-300 font-medium">Principal</span>
                  </div>
                  <div className="text-lg font-bold text-white">
                    {formatCurrency(loanAmount)}
                  </div>
                  <span className="text-xs text-slate-400">({principalPercentage}%)</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                    <span className="text-xs text-gold-400 font-medium">Total Interest</span>
                  </div>
                  <div className="text-lg font-bold text-gold-300">
                    {formatCurrency(totalInterest)}
                  </div>
                  <span className="text-xs text-slate-400">({interestPercentage}%)</span>
                </div>
              </div>

              {/* Total Payable */}
              <div className="flex justify-between items-center py-3 border-t border-white/10">
                <span className="text-sm text-slate-300 font-medium">Total Amount Payable</span>
                <span className="text-xl font-bold text-white">{formatCurrency(totalPayment)}</span>
              </div>

              {/* Visual Proportion Bar */}
              <div className="space-y-1.5">
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                  <div
                    style={{ width: `${principalPercentage}%` }}
                    className="h-full bg-slate-300 transition-all duration-300"
                    title={`Principal: ${principalPercentage}%`}
                  />
                  <div
                    style={{ width: `${interestPercentage}%` }}
                    className="h-full bg-gold-500 transition-all duration-300"
                    title={`Interest: ${interestPercentage}%`}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Principal: {principalPercentage}%</span>
                  <span>Interest: {interestPercentage}%</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8 relative z-10 space-y-3">
              <Link
                href="/contact-us"
                style={{
                  background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                  color: "#061527",
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-extrabold shadow-gold-glow hover:brightness-110 transition-all duration-300 group"
              >
                <span>Apply for this Loan Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>Lowest bank interest rate guaranteed</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
