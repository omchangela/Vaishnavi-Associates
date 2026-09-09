import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Building2,
  Coins,
  FileCheck2,
  Calculator,
  ChevronRight
} from "lucide-react";
import { InformationData, Logos } from "../../../constant";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 text-sm border-t border-navy-800 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="mainContainer pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm">
                <Image
                  src={Logos.verticalBlackLogo}
                  alt="Vaishnavi Associates"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold font-display text-lg text-white block leading-tight">
                  VAISHNAVI <span className="text-gold-500">ASSOCIATES</span>
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Loans & Real Estate Services
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Hyderabad's premier financial advisory and real estate consultancy firm. We partner with 30+ leading banks to secure low-interest loans, strategic commercial properties, and corporate licenses.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span>Verified DSA Network</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Coins className="w-4 h-4 text-gold-500" />
                <span>₹250+ Cr Disbursed</span>
              </div>
            </div>
          </div>

          {/* Col 2: Loan Products (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display border-b border-navy-800 pb-2">
              Financing Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/loans/business-loan" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Business Loans & MSME</span>
                </Link>
              </li>
              <li>
                <Link href="/loans/home-loan" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Home Loans (From 8.40%)</span>
                </Link>
              </li>
              <li>
                <Link href="/loans/loan-against-property" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Loan Against Property (LAP)</span>
                </Link>
              </li>
              <li>
                <Link href="/loans/machinery-loan" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Machinery & Equipment Credit</span>
                </Link>
              </li>
              <li>
                <Link href="/loans" className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-gold-400 font-semibold">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>View All 10 Loan Schemes →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Registrations & Real Estate (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display border-b border-navy-800 pb-2">
              Corporate & Tax
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/business-registration/private-limited-company" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Pvt Ltd Company</span>
                </Link>
              </li>
              <li>
                <Link href="/licenses/trade-license" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Trade License GHMC</span>
                </Link>
              </li>
              <li>
                <Link href="/gst/gst-registration" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>GST Registration</span>
                </Link>
              </li>
              <li>
                <Link href="/tax/itr-filing" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>ITR Tax Filing</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-gold-400 font-semibold">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>All 45+ Services →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display border-b border-navy-800 pb-2">
              Office Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {InformationData.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`tel:${InformationData.contactNumber}`} className="text-slate-300 hover:text-gold-400">
                  {InformationData.contactNumber}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`mailto:${InformationData.email}`} className="text-slate-300 hover:text-gold-400">
                  {InformationData.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:brightness-110 shadow-sm"
              >
                <span>Request Callback</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="py-6 border-b border-navy-800/80 text-[11px] leading-relaxed text-slate-300">
          <p>
            <strong className="text-slate-300">Disclaimer:</strong> Vaishnavi Associates is an independent financial consulting and credit facilitation firm partnering with scheduled commercial banks, NBFCs, and financial institutions. All loan approvals, sanction limits, and interest rates are governed by the respective lender&apos;s internal credit underwriting policy and regulatory guidelines.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Vaishnavi Associates. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact-us" className="hover:text-gold-400">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:text-gold-400">Terms of Service</Link>
            <Link href="/login" className="hover:text-gold-400">Client Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}