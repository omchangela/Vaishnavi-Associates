"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, ChevronDown, ChevronUp, Phone, Mail, Calculator, ArrowRight, ShieldCheck } from "lucide-react";
import { Logos, InformationData, Routes } from "@src/constant";
import { IMobileDrawerProps, IRoutesChild, IRoutes } from "@src/types";

export default function MobileDrawer({
  drawerToggle,
  setDrawerToggle,
}: IMobileDrawerProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const closeDrawer = () => setDrawerToggle(false);

  const navigateTo = (path: string) => {
    router.push(path);
    closeDrawer();
  };

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        drawerToggle
          ? "opacity-100 pointer-events-auto bg-navy-950/60 backdrop-blur-sm"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={closeDrawer}
    >
      <div
        className={`fixed top-0 left-0 w-[300px] sm:w-[340px] h-full bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out z-50 ${
          drawerToggle ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg p-0.5 border border-slate-200 flex items-center justify-center bg-white shadow-sm">
              <Image
                src={Logos.verticalBlackLogo}
                alt="Vaishnavi Associates"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-extrabold text-sm text-navy-950 block leading-tight">
                VAISHNAVI <span className="text-gold-500">ASSOCIATES</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Loans & Business Consultancy
              </span>
            </div>
          </div>
          <button
            onClick={closeDrawer}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-navy-950"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Menu Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {/* Quick Apply button */}
          <Link
            href="/contact-us"
            onClick={closeDrawer}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 shadow-sm"
          >
            <span>Apply for Loan / Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/#calculator"
            onClick={closeDrawer}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-navy-950 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Calculator className="w-3.5 h-3.5 text-gold-500" />
            <span>Loan EMI Calculator</span>
          </Link>

          <div className="pt-2 space-y-1">
            <Link
              href="/"
              onClick={closeDrawer}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-navy-950 hover:bg-slate-50 hover:text-gold-600"
            >
              Home
            </Link>

            {/* Custom Links for Mobile */}
            <div className="border-t border-slate-100 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-1">
                Our Services
              </span>
              <Link
                href="/loans/business-loan"
                onClick={closeDrawer}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-50 hover:text-gold-600"
              >
                💼 Business Loans & MSME
              </Link>
              <Link
                href="/contact-us"
                onClick={closeDrawer}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-50 hover:text-gold-600"
              >
                🏠 Home Loans & LAP
              </Link>
              <Link
                href="/registrations/trade-license"
                onClick={closeDrawer}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-50 hover:text-gold-600"
              >
                📜 Trade License Registration
              </Link>
              <Link
                href="/compliance/itr-filing"
                onClick={closeDrawer}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-50 hover:text-gold-600"
              >
                📊 ITR Filing & Compliance
              </Link>
            </div>

            <div className="border-t border-slate-100 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-1">
                Company
              </span>
              <Link
                href="/about-us"
                onClick={closeDrawer}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-50 hover:text-gold-600"
              >
                About Vaishnavi Associates
              </Link>
              <Link
                href="/contact-us"
                onClick={closeDrawer}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-50 hover:text-gold-600"
              >
                Contact & Office Map
              </Link>
              <Link
                href="/login"
                onClick={closeDrawer}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-navy-900 hover:bg-slate-50 hover:text-gold-600"
              >
                Client Portal Login
              </Link>
            </div>
          </div>
        </div>

        {/* Drawer Footer Contact */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
          <a
            href={`tel:${InformationData.contactNumber}`}
            className="flex items-center gap-2 text-xs font-bold text-navy-950 hover:text-gold-600"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span>{InformationData.contactNumber}</span>
          </a>
          <a
            href={`mailto:${InformationData.email}`}
            className="flex items-center gap-2 text-xs text-slate-600 hover:text-gold-600"
          >
            <Mail className="w-3.5 h-3.5 text-gold-500" />
            <span>{InformationData.email}</span>
          </a>
          <p className="text-[10px] text-slate-400 pt-1">
            © {new Date().getFullYear()} Vaishnavi Associates.
          </p>
        </div>
      </div>
    </div>
  );
}