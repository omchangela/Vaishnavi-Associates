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
      title: "Commercial & Business",
      icon: <Coins className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "Business Loans", desc: "Working capital & MSME credit up to ₹20 Cr", path: "/loans/business-loan", badge: "Fast Track" },
        { name: "Personal Loans", desc: "Unsecured instant funds up to ₹50 Lakh", path: "/loans/personal-loan" },
        { name: "Machinery Loans", desc: "Equipment & asset purchase up to 90%", path: "/loans/machinery-loan" },
        { name: "MSME / CGTMSE Loans", desc: "Collateral-free government schemes", path: "/loans/msme-loan", badge: "Subsidized" },
        { name: "Working Capital / CC-OD", desc: "Cash credit & revolving overdraft limits", path: "/loans/working-capital-loan" },
      ],
    },
    {
      title: "Mortgage & Property",
      icon: <Building2 className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "Home Loans", desc: "Lowest interest rate from 8.40% p.a.", path: "/loans/home-loan", badge: "From 8.4%" },
        { name: "Loan Against Property (LAP)", desc: "Mortgage residential/commercial up to ₹50 Cr", path: "/loans/loan-against-property" },
        { name: "Loan Against Shares", desc: "Instant liquidity against stocks & mutual funds", path: "/loans/loan-against-shares" },
        { name: "Gold Loans", desc: "Instant 30-min cash against gold jewelry", path: "/loans/gold-loan" },
        { name: "Project Loans", desc: "Large-scale infrastructure & plant finance", path: "/loans/project-loan" },
      ],
    },
  ];

  const registrationsMenu: NavSection[] = [
    {
      title: "Business Licensing",
      icon: <FileCheck2 className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "Trade License", desc: "Municipal GHMC & HMDA licensing", path: "/licenses/trade-license", badge: "Instant" },
        { name: "GST Registration", desc: "New 15-digit GSTIN allotment", path: "/gst/gst-registration" },
        { name: "MSME / Udyam Certificate", desc: "Priority sector credit & subsidies", path: "/licenses/msme-registration" },
        { name: "FSSAI Food License", desc: "Food safety license for Swiggy/Zomato", path: "/licenses/fssai-registration" },
        { name: "Import Export Code (IEC)", desc: "DGFT international trade license", path: "/licenses/import-export-code" },
      ],
    },
    {
      title: "Incorporation & Startup",
      icon: <FileText className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "Private Limited Company", desc: "MCA incorporation with DIN, DSC, PAN", path: "/business-registration/private-limited-company", badge: "Popular" },
        { name: "LLP Registration", desc: "Limited liability partnership setup", path: "/business-registration/llp-registration" },
        { name: "Partnership Firm", desc: "ROF registration & deed drafting", path: "/business-registration/partnership-firm-registration" },
        { name: "One Person Company (OPC)", desc: "Corporate structure for solo founders", path: "/business-registration/one-person-company" },
        { name: "Startup India Registration", desc: "3-year tax exemption & DPIIT recognition", path: "/business-registration/startup-registration" },
      ],
    },
  ];

  const complianceMenu: NavSection[] = [
    {
      title: "Tax & Compliance",
      icon: <ShieldCheck className="w-4 h-4 text-gold-500" />,
      items: [
        { name: "ITR Filing", desc: "Salary & business income tax return", path: "/tax/itr-filing", badge: "Tax Season" },
        { name: "GST Return Filings", desc: "Monthly GSTR-1, 3B & annual GSTR-9", path: "/gst/gst-return-filing" },
        { name: "TDS Return Filing", desc: "Form 24Q, 26Q & TRACES generation", path: "/tax/tds-return" },
        { name: "ROC Annual Compliance", desc: "MCA AOC-4 & MGT-7 company filings", path: "/compliance/roc-compliance" },
        { name: "EPFO & ESIC Filings", desc: "Monthly employee wage & ECR challans", path: "/compliance/esi-pf" },
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
                Loans & Business Consultancy Services
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

            {/* Registrations Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("registrations")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/registrations")
                    ? "text-gold-600 bg-gold-500/10"
                    : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
                }`}
              >
                <span>Registrations</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {activeMenu === "registrations" && (
                <div className="absolute top-full left-0 w-[540px] pt-2 animate-fadeIn z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 grid grid-cols-2 gap-5">
                    {registrationsMenu.map((sec, idx) => (
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

            {/* Compliance */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("compliance")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/compliance")
                    ? "text-gold-600 bg-gold-500/10"
                    : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
                }`}
              >
                <span>Compliance</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {activeMenu === "compliance" && (
                <div className="absolute top-full left-0 w-[300px] pt-2 animate-fadeIn z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-4 space-y-1.5">
                    {complianceMenu[0].items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.path}
                        onClick={() => setActiveMenu(null)}
                        className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
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
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Directory */}
            <Link
              href="/services"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/services"
                  ? "text-gold-600 bg-gold-500/10"
                  : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
              }`}
            >
              Services
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

            {/* Blog */}
            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/blog"
                  ? "text-gold-600 bg-gold-500/10"
                  : "text-navy-900 hover:text-gold-600 hover:bg-slate-50"
              }`}
            >
              Blog
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