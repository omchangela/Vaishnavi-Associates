"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logos, InformationData } from "../../constant";
import { ShieldCheck, ArrowRight, ArrowLeft, Lock, Phone, Sparkles, Building2, Coins } from "lucide-react";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setOtpSent(true);
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-luxury border border-slate-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* Left Side: Brand Visual (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-slate-950 text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-gold-400 transition">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="pt-6">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 mb-5 shadow-sm">
                <Image
                  src={Logos.verticalBlackLogo}
                  alt="Vaishnavi Associates"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-tight">
                Client & Partner <span className="gold-gradient-text">Portal</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                Log in to track your ongoing loan applications, download sanction letters, and access your secure property document vault.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>256-bit bank-grade encryption</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Coins className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Live bank sanction status</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Building2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Confidential document vault</span>
              </div>
            </div>
          </div>

          <div className="pt-8 text-xs text-slate-400 relative z-10">
            Need assistance? Call{" "}
            <a href={`tel:${InformationData.contactNumber}`} className="text-gold-400 font-semibold">
              {InformationData.contactNumber}
            </a>
          </div>
        </div>

        {/* Right Side: Form (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-12 flex items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-navy-950">
                Sign In to Your Account
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Enter your registered 10-digit mobile number for secure instant login.
              </p>
            </div>

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-navy-950">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="Enter 10-digit mobile"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                      className="w-full pl-14 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm transition"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={phoneNumber.length !== 10}
                  className="w-full py-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:brightness-110 shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Get OTP on WhatsApp / SMS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-xs text-gold-800">
                  OTP sent to <strong>+91 {phoneNumber}</strong>.
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-navy-950">
                    Enter 6-Digit OTP
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="• • • • • •"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 text-center tracking-[0.5em] font-extrabold text-lg outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  onClick={() => alert("Login simulated. Welcome to Vaishnavi Associates client dashboard!")}
                  className="w-full py-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:brightness-110 shadow-gold-glow transition-all duration-300"
                >
                  Verify & Sign In
                </button>

                <button
                  onClick={() => setOtpSent(false)}
                  className="w-full text-center text-xs font-semibold text-slate-500 hover:text-navy-950"
                >
                  Change Mobile Number
                </button>
              </div>
            )}

            <div className="pt-4 text-center">
              <p className="text-xs text-slate-500">
                Don't have an active loan account yet?{" "}
                <Link href="/contact-us" className="text-gold-600 font-bold hover:underline">
                  Apply for a New Loan
                </Link>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}