export interface ICategoryItem {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  servicesCount: string;
  featuredRateOrStat: string;
  heroHighlights: string[];
}

export const categoriesCatalog: Record<string, ICategoryItem> = {
  "loans": {
    slug: "loans",
    title: "Loans & Credit Facilities",
    badge: "30+ Banking Partners",
    tagline: "Customized Commercial, Mortgage & Unsecured Capital Solutions",
    description: "Vaishnavi Associates bridges borrowers with premier nationalized and private banks across India to deliver guaranteed lowest interest rates, highest sanction amounts, and doorstep document facilitation.",
    servicesCount: "10 Specialized Loan Schemes",
    featuredRateOrStat: "Starting from 8.40% p.a.",
    heroHighlights: ["Zero Hidden Charges", "Doorstep Bank Coordination", "99% Sanction Ratio", "₹250+ Cr Disbursed"],
  },
  "business-registration": {
    slug: "business-registration",
    title: "Business & Company Registration",
    badge: "MCA Registered Consultants",
    tagline: "Launch Your Dream Enterprise with 100% Legal & Corporate Compliance",
    description: "Incorporate Private Limited, LLP, Partnership, One Person Company, or get recognized under Startup India with comprehensive end-to-end Ministry of Corporate Affairs advisory.",
    servicesCount: "7 Entity Formations",
    featuredRateOrStat: "Incorporated in 5 - 7 Days",
    heroHighlights: ["Class 3 DSC & DIN Included", "Free Name Approval Check", "PAN, TAN & Bank Account", "Complete Legal Draftings"],
  },
  "gst": {
    slug: "gst",
    title: "GST Advisory & Filings",
    badge: "Certified GST Practitioners",
    tagline: "End-to-End Goods & Services Tax Advisory, Reconciliation & Litigation",
    description: "Complete GST registration, monthly GSTR-1 & 3B filings, automated Input Tax Credit (ITC) 2B reconciliations, amendments, and department notice responses.",
    servicesCount: "4 Core GST Services",
    featuredRateOrStat: "100% On-Time Filing",
    heroHighlights: ["Zero Late Fee Guarantee", "Maximum ITC Recovery", "E-Way Bill & E-Invoicing", "Dedicated Tax Accountant"],
  },
  "tax": {
    slug: "tax",
    title: "Income Tax & Direct Tax Solutions",
    badge: "Chartered Accountant Advisory",
    tagline: "Personalized Direct Tax Planning, ITR Filings & Notice Defense",
    description: "Strategic tax planning for salaried professionals, high-net-worth individuals, business owners, and non-resident Indians (NRIs) to legally minimize liabilities and accelerate refunds.",
    servicesCount: "4 Direct Tax Services",
    featuredRateOrStat: "Maximum Eligible Refunds",
    heroHighlights: ["Old vs New Regime Analysis", "AIS/TIS Reconciliation", "Capital Gains Computation", "Full Notice Protection"],
  },
  "accounting": {
    slug: "accounting",
    title: "Accounting & Bookkeeping Services",
    badge: "Cloud Accounting (Zoho / Tally)",
    tagline: "Professional Financial Records, MIS Reporting & Cash Flow Visibility",
    description: "Outsource your day-to-day accounting, bank reconciliations, vendor ledger management, and monthly profit & loss reporting to certified financial experts.",
    servicesCount: "Comprehensive Bookkeeping",
    featuredRateOrStat: "Monthly & Quarterly MIS",
    heroHighlights: ["Tally & Zoho Books Experts", "Bank Reconciliation Statements", "Inventory & Receivables Tracking", "Audit-Ready Financials"],
  },
  "compliance": {
    slug: "compliance",
    title: "Corporate Governance & Statutory Compliance",
    badge: "Statutory Filings",
    tagline: "ROC Annual Filings, ESI, PF, Labour Law & Corporate Maintenance",
    description: "Keep your enterprise protected from penal consequences with rigorous MCA compliance calendars, director KYC filings, and labour welfare registrations.",
    servicesCount: "Annual & Event-Based Filings",
    featuredRateOrStat: "Zero Penal Default Record",
    heroHighlights: ["MGT-7 & AOC-4 Filings", "DIR-3 KYC Management", "EPFO & ESIC Compliance", "Statutory Registers Maintenance"],
  },
  "licenses": {
    slug: "licenses",
    title: "Licenses, Registrations & Approvals",
    badge: "Local & Central Permits",
    tagline: "Municipal Trade, FSSAI Food, MSME Udyam & Statutory Permissions",
    description: "Single-window processing for commercial trade licenses, municipal zoning permissions, food safety clearances, and export-import credentials.",
    servicesCount: "6 Essential Business Licenses",
    featuredRateOrStat: "Online Certificate Issue",
    heroHighlights: ["GHMC & HMDA Approvals", "FSSAI FoSCoS Licensure", "Udyam MSME Government Cert", "IEC & APEDA Advisory"],
  },
  "financial-services": {
    slug: "financial-services",
    title: "Strategic Financial Advisory",
    badge: "Corporate Finance",
    tagline: "CMA Data Preparation, Debt Syndication & Wealth Management",
    description: "Strategic advisory for institutional fundraising, Techno-Economic Viability (TEV) studies, working capital structuring, and private wealth growth.",
    servicesCount: "5 Specialized Advisory Areas",
    featuredRateOrStat: "₹250+ Cr Syndicated",
    heroHighlights: ["Bankable Project Reports", "TEV Viability Studies", "Working Capital Optimization", "Consortium Liaison"],
  },
  "it-services": {
    slug: "it-services",
    title: "IT & Digital Engineering Solutions",
    badge: "Enterprise Tech Stack",
    tagline: "Corporate Web Applications, Cloud Infrastructure & Digital Growth",
    description: "Accelerate your corporate presence with cutting-edge digital products, high-conversion web architectures, custom enterprise software, and cloud systems.",
    servicesCount: "7 Modern IT Solutions",
    featuredRateOrStat: "Sub-Second Performance",
    heroHighlights: ["Next.js & React Architectures", "Custom Enterprise Software", "SEO & Digital Lead Engines", "Cloud & Cybersecurity"],
  },
};

export function getAllCategories(): ICategoryItem[] {
  return Object.values(categoriesCatalog);
}

export function getCategoryBySlug(slug: string): ICategoryItem | undefined {
  return categoriesCatalog[slug];
}
