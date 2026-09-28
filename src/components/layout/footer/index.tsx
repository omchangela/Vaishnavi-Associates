import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  MessageSquare
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
                <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">
                  Financial • Corporate • Digital Solutions
                </span>
              </div>
            </Link>

            <p className="text-gold-300/90 text-xs font-semibold tracking-wide">
              Financial | Accounting | Taxation | Corporate | Investment | Digital Solutions
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted partner for financial, accounting, taxation, corporate, investment and digital solutions. Simplifying complex requirements through professional guidance and transparent coordination.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span>One Partner. Multiple Solutions.</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display border-b border-navy-800 pb-2">
              Our Core Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/loans" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Loans & Financial Services</span>
                </Link>
              </li>
              <li>
                <Link href="/cibil" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>CIBIL & Credit Services</span>
                </Link>
              </li>
              <li>
                <Link href="/accounting" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Accounting & Taxation</span>
                </Link>
              </li>
              <li>
                <Link href="/demat" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Demat & Trading Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/corporate-banking" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Corporate Banking & Legal</span>
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Digital Marketing Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Who We Serve & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display border-b border-navy-800 pb-2">
              Who We Serve
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/about-us" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/#who-we-serve" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Individuals</span>
                </Link>
              </li>
              <li>
                <Link href="/#who-we-serve" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Entrepreneurs</span>
                </Link>
              </li>
              <li>
                <Link href="/#who-we-serve" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Small & Medium Businesses</span>
                </Link>
              </li>
              <li>
                <Link href="/#who-we-serve" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Corporates</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-gold-400 font-semibold">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Contact Our Team →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-display border-b border-navy-800 pb-2">
              Get in Touch
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
                  Call: {InformationData.contactNumber}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91${InformationData.whatsappNumber?.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400"
                >
                  WhatsApp: {InformationData.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`mailto:${InformationData.email}`} className="text-slate-300 hover:text-gold-400 break-all">
                  {InformationData.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:brightness-110 shadow-sm"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="py-6 border-b border-navy-800/80 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-200">Disclaimer:</strong> Services are subject to applicable laws, regulations, eligibility criteria, documentation and approval by relevant institutions, regulators, brokers, credit bureaus or service providers. Loan approval, interest rates, investment returns, credit-score changes and other outcomes are not guaranteed. Customers should review applicable terms and conditions before proceeding.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Vaishnavi Associates. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact-us" className="hover:text-gold-400">Contact Us</Link>
            <Link href="/about-us" className="hover:text-gold-400">About Us</Link>
            <Link href="/#services" className="hover:text-gold-400">Our Services</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}