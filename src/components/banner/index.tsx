"use client";

import React from "react";
import Link from "next/link";
import { IBannerProps } from "@src/types";
import { ChevronRight, Sparkles } from "lucide-react";

export default function Banner({ route, name, title }: IBannerProps) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #061527 0%, #0B2545 60%, #061527 100%)",
      }}
      className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 text-white overflow-hidden border-b border-navy-800"
    >
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mainContainer relative z-10 text-center space-y-4 max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-gold-500/20 text-xs sm:text-sm text-slate-300 backdrop-blur-sm shadow-sm">
          <Link href="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
          <span className="text-gold-400 font-semibold">{name}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
          {title}
        </h1>

        {/* Decorative divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mt-2" />
      </div>
    </div>
  );
}
