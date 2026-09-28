"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Calculator,
  ArrowRight,
  Menu,
  Sparkles,
  ShieldCheck,
  Building2,
  Coins,
  FileCheck2,
  FileText
} from "lucide-react";
import { Logos, InformationData } from "../../../constant";
import MobileDrawer from "../mobileNavbar";

interface NavDropdownItem {
  name: string;
  desc?: string;
  path: string;
  badge?: string;
}

interface NavSection {
  title: string;
  icon: React.ReactNode;
  items: NavDropdownItem[];
}

export default function Navbar() {
  const [drawerToggle, setDrawerToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loansMenu: NavSection[] = [
    {
      title: "Individual & Mortgage Solutions",
      icon: <Building2 className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "Home Loans", desc: "Lowest interest rate from 8.40% p.a.", path: "/loans/home-loan", badge: "From 8.4%" },
        { name: "Home Loan Balance Transfer & Top-Up", desc: "Reduce existing EMI & extra capital", path: "/loans/home-loan-balance-transfer", badge: "Save ROI" },
        { name: "Mortgage / Loan Against Property", desc: "Mortgage residential/commercial up to ₹50 Cr", path: "/loans/loan-against-property" },
        { name: "Personal Loans", desc: "Unsecured instant funds up to ₹50 Lakh", path: "/loans/personal-loan" },
      ],
    },
    {
      title: "Business & Corporate Solutions",
      icon: <Coins className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "Business Loans", desc: "Working capital & MSME credit up to ₹20 Cr", path: "/loans/business-loan", badge: "Fast Track" },
        { name: "Working Capital Funding", desc: "Cash credit & revolving overdraft limits", path: "/loans/working-capital-loan" },
        { name: "Loan Refinancing / Balance Transfer", desc: "Consolidate & refinance high-cost debt", path: "/loans/loan-refinancing" },
        { name: "Corporate Funding Assistance", desc: "Large-scale infrastructure & plant finance", path: "/loans/corporate-funding" },
      ],
    },
  ];

  const servicesMenu: NavSection[] = [
    {
      title: "Financial & Advisory Solutions",
      icon: <ShieldCheck className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "CIBIL & Credit Services", desc: "Report analysis, dispute filing & profile recovery", path: "/cibil", badge: "Credit Care" },
        { name: "Accounting & Taxation", desc: "Bookkeeping, GST, ITR, TDS & virtual accounts", path: "/accounting", badge: "100% Compliant" },
        { name: "Demat & Trading Solutions", desc: "NSE & BSE account opening, equity & derivatives", path: "/demat" },
      ],
    },
    {
      title: "Corporate & Growth Solutions",
      icon: <Building2 className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "Corporate Banking & Legal", desc: "Business registration, current accounts & legal support", path: "/corporate-banking", badge: "Corporate" },
        { name: "Digital Marketing", desc: "Web development, SEO, Google & Meta Ads, lead gen", path: "/digital-marketing", badge: "Growth" },
        { name: "Trade License & Registrations", desc: "GHMC, HMDA, GST, MSME & company incorporation", path: "/registrations/trade-license" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div
        style={{ backgroundColor: "#061527" }}
        className="text-slate-300 py-2 px-4 text-xs font-medium border-b border-slate-800"
      >
        <div className="mainContainer flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${InformationData.contactNumber}`}
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{InformationData.contactNumber}</span>
            </a>
            <a
              href={`mailto:${InformationData.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{InformationData.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Hyderabad, Telangana</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#calculator"
              className="flex items-center gap-1 text-gold-400 hover:text-gold-300 font-semibold"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>EMI Calculator</span>
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <Link
              href="/login"
              className="hover:text-white transition-colors hidden sm:inline"
            >
              Portal Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="mainContainer flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 p-1 flex items-center justify-center">
              <Image
                src={Logos.verticalBlackLogo}
                alt="Vaishnavi Associates Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div>
              <span className="font-extrabold font-display tracking-tight text-base sm:text-lg lg:text-xl text-navy-950 block leading-tight">
                VAISHNAVI <span className="text-gold-500">ASSOCIATES</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-slate-500 block">
                Financial • Corporate • Digital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "text-gold-600 bg-gold-500/10"
                  : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Loans Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("loans")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/loans")
                    ? "text-gold-600 bg-gold-500/10"
                    : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
                }`}
              >
                <span>Loans</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {activeMenu === "loans" && (
                <div className="absolute top-full left-0 w-[540px] pt-2 animate-fadeIn z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 grid grid-cols-2 gap-5">
                    {loansMenu.map((sec, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-950 pb-1 border-b border-slate-100">
                          {sec.icon}
                          <span>{sec.title}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {sec.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                href={item.path}
                                onClick={() => setActiveMenu(null)}
                                className="block p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-navy-950 group-hover:text-gold-600">
                                    {item.name}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gold-500/15 text-gold-700 font-semibold">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {item.desc}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services & Solutions Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/cibil" ||
                  pathname === "/accounting" ||
                  pathname === "/demat" ||
                  pathname === "/corporate-banking" ||
                  pathname === "/digital-marketing" ||
                  pathname === "/services"
                    ? "text-gold-600 bg-gold-500/10"
                    : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {activeMenu === "services" && (
                <div className="absolute top-full left-0 w-[560px] pt-2 animate-fadeIn z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 grid grid-cols-2 gap-5">
                    {servicesMenu.map((sec, idx) => (
                      <div key={idx} className="space-y-2.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-950 pb-1 border-b border-slate-100">
                          {sec.icon}
                          <span>{sec.title}</span>
                        </div>
                        <ul className="space-y-1.5">
                          {sec.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                href={item.path}
                                onClick={() => setActiveMenu(null)}
                                className="block p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-navy-950 group-hover:text-gold-600">
                                    {item.name}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gold-500/15 text-gold-700 font-semibold">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                  {item.desc}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CIBIL Services Direct Link */}
            <Link
              href="/cibil"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/cibil"
                  ? "text-gold-600 bg-gold-500/10"
                  : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
              }`}
            >
              CIBIL
            </Link>

            {/* About Us */}
            <Link
              href="/about-us"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/about-us"
                  ? "text-gold-600 bg-gold-500/10"
                  : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/contact-us"
                  ? "text-gold-600 bg-gold-500/10"
                  : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>

          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact-us"
              style={{
                background: "linear-gradient(135deg, #DFB758 0%, #C59B27 50%, #9E7814 100%)",
                color: "#061527",
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-extrabold text-xs sm:text-sm hover:brightness-110 shadow-gold-glow transition-all duration-300 group"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setDrawerToggle(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        drawerToggle={drawerToggle}
        setDrawerToggle={setDrawerToggle}
      />
    </header>
  );
}