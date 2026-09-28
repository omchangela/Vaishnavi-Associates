import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@src/components/breadcrumb";
import {
  TrendingUp,
  Wallet,
  Landmark,
  LineChart,
  Activity,
  Coins,
  Sparkles,
  PieChart,
  MonitorCheck,
  Cpu,
  Tv,
  ArrowRight,
  Phone,
  ChevronRight,
  Award,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";
import { InformationData } from "@src/constant";

export const metadata: Metadata = {
  title: "Demat & Trading Solutions | Vaishnavi Associates Hyderabad",
  description: "Demat and trading account opening assistance, NSE/BSE equity trading, F&O, Mutual Funds, IPOs, Algo API and TradingView setup in Hyderabad.",
};

export default function DematPage() {
  const dematServices = [
    {
      title: "Demat Account Assistance",
      description: "Fast-track, hassle-free Demat account opening with top SEBI-registered depository participants (CDSL / NSDL) and competitive brokerage terms.",
      icon: <Wallet className="w-6 h-6 text-gold-500" />,
      tag: "Account Opening",
    },
    {
      title: "Trading Account Assistance",
      description: "Seamless trading account setup linked to your primary bank account for instant fund additions, withdrawals, and margin facilities.",
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />,
      tag: "Trading Setup",
    },
    {
      title: "NSE & BSE",
      description: "Direct market access to National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) for listed equities, sovereign debt, and ETFs.",
      icon: <Landmark className="w-6 h-6 text-gold-500" />,
      tag: "Exchange Access",
    },
    {
      title: "Equity Trading",
      description: "Assistance with delivery and intraday equity execution, sector thematic baskets, and bluechip portfolio holding structures.",
      icon: <LineChart className="w-6 h-6 text-gold-500" />,
      tag: "Cash Equities",
    },
    {
      title: "Futures & Options",
      description: "Derivatives segment activation and margin assistance for equity indices, single stocks, hedging strategies, and option trading.",
      icon: <Activity className="w-6 h-6 text-gold-500" />,
      tag: "F&O Derivatives",
    },
    {
      title: "Commodity & Currency Derivatives",
      description: "Access to MCX and NSE currency derivatives for trading gold, silver, crude oil, and major currency pairs like USD-INR.",
      icon: <Coins className="w-6 h-6 text-gold-500" />,
      tag: "Commodity & Forex",
    },
    {
      title: "IPO Applications",
      description: "Guidance on applying for Mainboard and SME Initial Public Offerings (IPOs) via UPI mandate and ASBA banking facilities.",
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      tag: "New Listings",
    },
    {
      title: "Mutual Funds & ETFs",
      description: "Assistance with lump-sum and Systematic Investment Plan (SIP) onboarding across direct and regular mutual fund schemes and index ETFs.",
      icon: <PieChart className="w-6 h-6 text-gold-500" />,
      tag: "SIP & Wealth",
    },
    {
      title: "Trading Platform Assistance",
      description: "Walkthrough and technical guidance on utilizing modern mobile and desktop trading terminals, order types (SL, GTT, AMO), and charts.",
      icon: <MonitorCheck className="w-6 h-6 text-gold-500" />,
      tag: "Platform Support",
    },
    {
      title: "API / Algo Trading Assistance",
      description: "Assistance with broker API key generation, automated webhook integrations, and rule-based algorithmic trading setups where supported.",
      icon: <Cpu className="w-6 h-6 text-gold-500" />,
      tag: "Algo & API",
    },
    {
      title: "TradingView-Related Support",
      description: "Assistance with connecting supported broker accounts directly to TradingView for real-time charting, Pine script alerts, and direct chart executions.",
      icon: <Tv className="w-6 h-6 text-gold-500" />,
      tag: "Charting & Tools",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* 1. Hero */}
      <section
        style={{
          background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
        }}
        className="relative pt-36 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 text-white overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mainContainer relative z-10">
          <div className="mb-6">
            <Breadcrumb route="/demat" name="Demat & Trading" />
          </div>

          <div className="max-w-3xl space-y-6 text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C59B27]/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>DEMAT & TRADING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white">
              Demat & Trading{" "}
              <span className="gold-gradient-text">Solutions</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              We assist customers with account opening and access to market-related services through applicable brokerage and financial-service platforms.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2 justify-center lg:justify-start">
              {["NSE & BSE", "Demat Account", "Equity & F&O", "Mutual Funds & IPO", "Algo & API Support"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gold-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mainContainer">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 text-xs font-bold mb-2">
                <Award className="w-4 h-4 text-gold-500" />
                <span>Market Access & Technology</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-navy-950">
                Capital Market & Trading Services
              </h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              Explore account opening, execution guidance, and technology setups across India&apos;s leading financial exchanges and brokerage networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dematServices.map((srv, idx) => (
              <div
                key={idx}
                className="group rounded-3xl p-6 sm:p-7 bg-slate-50/70 border border-slate-200/80 hover:border-gold-400 hover:shadow-luxury hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-800 border border-gold-500/20">
                      {srv.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy-900/5 group-hover:bg-gold-500/15 flex items-center justify-center transition-colors">
                      {srv.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors font-display">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>

                <Link
                  href={`/contact-us?service=${encodeURIComponent(srv.title)}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-navy-950 text-white font-bold text-xs sm:text-sm hover:bg-gold-500 hover:text-navy-950 transition-colors group/btn"
                >
                  <span>Get Account Assistance</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Regulatory Disclaimer Box */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-navy-950 mb-1">
                Market Risk & Brokerage Disclosure
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Securities and market investments are subject to market risks. Vaishnavi Associates provides account opening, platform navigation, and technical facilitation through SEBI-registered brokerage partners. Investment returns and trading outcomes are not guaranteed. Customers should review brokerage terms before investing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #061527 0%, #0B2545 50%, #061527 100%)",
        }}
        className="py-16 sm:py-20 text-white text-center"
      >
        <div className="mainContainer max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display">
            Start Your <span className="gold-gradient-text">Demat & Trading Journey</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Reach out to our specialists for instant account onboarding, platform walkthrough, or API setup support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact-us"
              style={{
                background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                color: "#061527",
              }}
              className="px-8 py-4 rounded-xl font-extrabold text-sm shadow-gold-glow hover:brightness-110 transition-all"
            >
              Open Demat & Trading Account
            </Link>
            <a
              href={`tel:${InformationData.contactNumber}`}
              className="px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {InformationData.contactNumber}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
