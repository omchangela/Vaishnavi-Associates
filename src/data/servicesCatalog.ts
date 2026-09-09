export interface IServiceItem {
  slug: string;
  category: string;
  categoryName: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  rateOrTimeline: string;
  maxAmountOrScope: string;
  approvalTime: string;
  overview: string[];
  keyBenefits: { title: string; desc: string }[];
  documentsRequired: {
    category: string;
    items: string[];
  }[];
  processSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesCatalog: Record<string, IServiceItem> = {
  // =========================================================================
  // 1. LOANS
  // =========================================================================
  "loans/business-loan": {
    slug: "business-loan",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Business Loans",
    badge: "Fast-Track Approval",
    tagline: "Unsecured & secured business capital up to ₹20 Crore with lowest bank interest rates.",
    description: "Scale operations, purchase inventory, or manage cash flow with customized business loans structured by Vaishnavi Associates in partnership with 30+ leading banks.",
    rateOrTimeline: "From 9.25% p.a.",
    maxAmountOrScope: "Up to ₹20 Crore",
    approvalTime: "48 - 72 Hours",
    overview: [
      "Vaishnavi Associates assists MSMEs, proprietors, partnerships, and private limited enterprises across Telangana & Andhra Pradesh in securing competitive business financing.",
      "Direct coordination with PSU and private lenders ensures minimal documentation hurdles, swift collateral evaluation, and maximized loan sanction amounts.",
      "Options include collateral-free CGTMSE loans, working capital overdrafts, and structured term credit.",
    ],
    keyBenefits: [
      { title: "Collateral-Free Options", desc: "Access up to ₹5 Crore under government CGTMSE schemes without pledging property." },
      { title: "Multi-Bank Appraisal", desc: "We evaluate your file across 30+ banks to secure the lowest interest rate and highest tenure." },
      { title: "Doorstep Paperwork", desc: "Our financial consultants handle documentation, project report preparation, and bank liaison." },
      { title: "Flexible Repayment", desc: "Tenures ranging from 12 to 84 months with custom repayment structures suited to your revenue cycles." },
    ],
    documentsRequired: [
      {
        category: "KYC Documents",
        items: ["PAN Card of Promoters & Entity", "Aadhaar Card / Passport / Voter ID", "Passport size photographs"],
      },
      {
        category: "Financial Proofs",
        items: ["Last 3 years audited ITR with Balance Sheet & Profit/Loss", "Last 12 months comprehensive bank account statements", "GST returns for the last 12 months (GSTR-3B & GSTR-1)"],
      },
      {
        category: "Business Proofs",
        items: ["Business Registration / Udyam Certificate", "GST Registration Certificate", "Partnership Deed / MOA & AOA with Certificate of Incorporation"],
      },
    ],
    processSteps: [
      { step: "01", title: "Eligibility Assessment", desc: "Share your business profile and revenue figures for an instant multi-bank credit analysis." },
      { step: "02", title: "Document Structuring", desc: "Our CAs and finance specialists verify and package your financial files and project reports." },
      { step: "03", title: "Multi-Bank Submission", desc: "We submit your file to senior credit managers across our 30+ partner banking network." },
      { step: "04", title: "Sanction & Disbursal", desc: "Receive formal bank sanction letter, sign agreements, and get funds disbursed to your account." },
    ],
    faqs: [
      { question: "What is the minimum turnover required for a business loan?", answer: "Generally, banks look for an annual turnover of at least ₹30 Lakh to ₹50 Lakh with a profitable operating history of at least 2 years." },
      { question: "Can I get a business loan without collateral?", answer: "Yes. We facilitate unsecured business loans and government-backed CGTMSE loans up to ₹5 Crore without requiring property mortgage." },
      { question: "How long does the loan approval take?", answer: "Initial sanction takes 48 to 72 hours once complete KYC and financial documentation is submitted." },
      { question: "Do you assist with project reports and CMA data?", answer: "Yes, our in-house financial analysts prepare complete CA-certified CMA data and bankable project reports." },
    ],
  },

  "loans/personal-loan": {
    slug: "personal-loan",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Personal Loans",
    badge: "Instant Disbursal",
    tagline: "Unsecured personal loans up to ₹50 Lakh for salaried and self-employed professionals.",
    description: "Get quick cash for medical emergencies, home renovation, weddings, or debt consolidation with zero collateral and minimal verification.",
    rateOrTimeline: "From 10.49% p.a.",
    maxAmountOrScope: "Up to ₹50 Lakh",
    approvalTime: "24 Hours",
    overview: [
      "Vaishnavi Associates partners with top retail lenders like HDFC, ICICI, SBI, Axis, and Bajaj Finserv to bring you the best personal loan offers.",
      "Flexible tenures up to 5 years, minimal paperwork, and doorstep document collection make the process hassle-free.",
    ],
    keyBenefits: [
      { title: "Zero Collateral Required", desc: "100% unsecured loan sanctioned purely on your income stability and credit score." },
      { title: "24-Hour Disbursal", desc: "Fast-track processing allows loan credit directly to your bank account within 1 business day." },
      { title: "Minimal Documentation", desc: "Only basic KYC, salary slips, and 6 months bank statements required." },
      { title: "Part-Payment Facility", desc: "Enjoy flexible foreclosure and part-prepayment options across our partner banks." },
    ],
    documentsRequired: [
      { category: "Identity & Address", items: ["PAN Card", "Aadhaar Card", "Utility Bill / Rent Agreement"] },
      { category: "Income Proof", items: ["Latest 3 months salary slips", "Form 16 / Latest 2 years ITR", "Last 6 months salary account bank statement"] },
    ],
    processSteps: [
      { step: "01", title: "Credit Score Check", desc: "We evaluate your CIBIL score and debt-to-income ratio." },
      { step: "02", title: "Bank Rate Comparison", desc: "Compare interest rates and processing fees across 15+ retail banks." },
      { step: "03", title: "Verification", desc: "Swift employer and residential verification coordinated by our team." },
      { step: "04", title: "Immediate Payout", desc: "Funds credited directly to your bank account." },
    ],
    faqs: [
      { question: "What is the minimum CIBIL score required?", answer: "A credit score of 700 or above qualifies for the lowest interest rates and quickest approvals." },
      { question: "What is the maximum repayment tenure?", answer: "Personal loan tenures range between 12 months and 60 months (up to 5 years)." },
      { question: "Can self-employed individuals apply?", answer: "Yes, self-employed professionals can apply with 2 years ITR and 12 months bank statements." },
      { question: "Are there prepayment charges?", answer: "Most partner banks allow prepayment after 6 to 12 EMIs with minimal or zero penalty." },
    ],
  },

  "loans/home-loan": {
    slug: "home-loan",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Home Loans",
    badge: "Lowest Interest Rates",
    tagline: "Turn your dream home into reality with home loans starting from 8.40% p.a. and tenures up to 30 years.",
    description: "Whether buying an apartment, building an independent villa, or purchasing a plot in Hyderabad or Andhra Pradesh, Vaishnavi Associates secures the highest loan-to-value ratio.",
    rateOrTimeline: "From 8.40% p.a.",
    maxAmountOrScope: "Up to ₹10 Crore",
    approvalTime: "3 - 5 Working Days",
    overview: [
      "We provide end-to-end assistance including property legal verification, technical evaluation, and direct branch manager coordination.",
      "Special balance transfer options available to switch your existing high-rate home loan to lowest bank interest rates.",
    ],
    keyBenefits: [
      { title: "Lowest Interest Rates", desc: "Repo-rate linked lending rates starting from just 8.40% p.a." },
      { title: "Up to 90% Property Value", desc: "Maximum loan sanction up to 90% of registered property value." },
      { title: "Free Legal Title Check", desc: "Our legal panel inspects municipal approvals, link documents, and encumbrance certificates." },
      { title: "Zero Prepayment Penalty", desc: "Prepay anytime with floating interest rates without any hidden penalty." },
    ],
    documentsRequired: [
      { category: "KYC", items: ["Aadhaar Card", "PAN Card", "2 Passport Photos"] },
      { category: "Financials", items: ["3 Months Salary Slips (Salaried) or 3 Years ITR (Self-Employed)", "6 Months Bank Statements"] },
      { category: "Property Documents", items: ["Sale Agreement / Draft Deed", "Link Documents (13-30 Years)", "Approved Building Plan & Municipal Sanction", "Latest Encumbrance Certificate (EC)"] },
    ],
    processSteps: [
      { step: "01", title: "Eligibility & Sanction", desc: "Get in-principle approval before finalizing the property." },
      { step: "02", title: "Legal & Valuation", desc: "Bank empanelled lawyers and valuers verify the site and documents." },
      { step: "03", title: "Loan Agreement", desc: "Review and sign fair, transparent loan agreement paperwork." },
      { step: "04", title: "Disbursement", desc: "Direct payment to developer/seller upon property registration." },
    ],
    faqs: [
      { question: "What is the maximum tenure for home loans?", answer: "Up to 30 years, subject to retirement age for salaried individuals." },
      { question: "Can I transfer my existing home loan?", answer: "Yes, our Home Loan Balance Transfer service reduces your EMI with lower rates and top-up loans." },
      { question: "Are tax benefits available?", answer: "Yes, under Section 80C (principal up to ₹1.5L) and Section 24b (interest up to ₹2L)." },
      { question: "Do you handle RERA registered projects?", answer: "Yes, we handle loans for all GHMC, HMDA, DTCP, and RERA approved layouts." },
    ],
  },

  "loans/loan-against-property": {
    slug: "loan-against-property",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Loan Against Property (LAP)",
    badge: "High Value Capital",
    tagline: "Unlock the hidden equity of your residential, commercial, or industrial property up to ₹50 Crore.",
    description: "Get substantial long-term capital for business expansion, debt consolidation, or major investments by mortgaging your existing property at low interest rates.",
    rateOrTimeline: "From 9.00% p.a.",
    maxAmountOrScope: "Up to ₹50 Crore",
    approvalTime: "5 - 7 Days",
    overview: [
      "Loan Against Property offers the dual advantage of lower interest rates than personal loans and longer tenures up to 15 years.",
      "Applicable for self-occupied residential properties, commercial shops, office spaces, and industrial plots.",
    ],
    keyBenefits: [
      { title: "High Loan-to-Value (LTV)", desc: "Borrow up to 70% of market valuation of residential or commercial property." },
      { title: "Extended Tenures", desc: "Repayment tenures up to 15 years ensure manageable monthly EMIs." },
      { title: "Dual Income Assessment", desc: "Combine rental income and business cash flows for maximum loan eligibility." },
      { title: "Both Term & Overdraft", desc: "Choose between traditional term loans or flexible Drop-line Overdraft (OD) limits." },
    ],
    documentsRequired: [
      { category: "KYC & Entity", items: ["PAN, Aadhaar, Company Incorporation Certificate", "Partnership Deed / MOA & AOA"] },
      { category: "Financials", items: ["3 Years Audited Financials & Tax Filings", "12 Months Banking Statements"] },
      { category: "Property Collateral", items: ["Original Title Deed & Prior Title Deeds", "Municipal Tax Receipts", "Approved Layout & Occupancy Certificate"] },
    ],
    processSteps: [
      { step: "01", title: "Property Evaluation", desc: "Preliminary market valuation and loan quantum estimate." },
      { step: "02", title: "Legal Search", desc: "Complete 30-year legal search for clear and marketable title." },
      { step: "03", title: "Credit Sanction", desc: "Formal bank sanction with competitive interest rate." },
      { step: "04", title: "Mortgage & Disbursal", desc: "Simple equitable mortgage registration and fund disbursal." },
    ],
    faqs: [
      { question: "Can commercial property be mortgaged for LAP?", answer: "Yes, both commercial and residential properties qualify for Loan Against Property." },
      { question: "Can co-owners apply together?", answer: "Yes, all property co-owners must be co-applicants on the loan." },
      { question: "Can I use LAP funds for any purpose?", answer: "Yes, funds can be utilized for business expansion, working capital, child education, or debt consolidation." },
      { question: "Is rental property accepted?", answer: "Yes, leased commercial properties with lease rental discounting (LRD) are also accepted." },
    ],
  },

  "loans/loan-against-shares": {
    slug: "loan-against-shares",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Loan Against Shares & Securities",
    badge: "Same-Day Liquidity",
    tagline: "Leverage your equity shares, mutual funds, and bonds without selling your portfolio.",
    description: "Get instant credit line against your approved shares, mutual fund units, and sovereign gold bonds without losing market upside or dividend rights.",
    rateOrTimeline: "From 9.50% p.a.",
    maxAmountOrScope: "Up to ₹20 Crore",
    approvalTime: "Same Day (4 - 8 Hours)",
    overview: [
      "Avoid selling your stocks during market downturns. Pledge your demat holdings with leading institutional lenders to unlock immediate liquidity.",
      "Pay interest only on the amount utilized, not the sanctioned limit.",
    ],
    keyBenefits: [
      { title: "Keep Your Ownership", desc: "Retain all dividend payouts, bonus shares, and long-term capital appreciation." },
      { title: "Digital Demat Pledge", desc: "100% digital lien marking through your depository participant (NSDL / CDSL)." },
      { title: "Overdraft Facility", desc: "Withdraw and repay anytime with zero prepayment penalties." },
      { title: "High Loan Limits", desc: "Up to 50% on equity shares and up to 80% on debt mutual funds and sovereign bonds." },
    ],
    documentsRequired: [
      { category: "KYC", items: ["PAN Card", "Aadhaar Card"] },
      { category: "Portfolio Statements", items: ["Latest Demat Holding Statement (CAMS / KFintech / Depository)", "Client Master List (CML)"] },
      { category: "Bank Proof", items: ["Cancelled Cheque", "Last 6 Months Bank Statement"] },
    ],
    processSteps: [
      { step: "01", title: "Portfolio Audit", desc: "Submit your CML and list of approved shares." },
      { step: "02", title: "Limit Sanction", desc: "Lending limit sanctioned based on approved securities list." },
      { step: "03", title: "Digital Lien", desc: "Digital pledge created via OTP on NSDL/CDSL portal." },
      { step: "04", title: "Funds Available", desc: "Drawdown funds directly to your linked savings or current account." },
    ],
    faqs: [
      { question: "Which shares are eligible for pledge?", answer: "Stocks listed on BSE/NSE with high liquidity (A and B group) and approved mutual fund schemes." },
      { question: "Do I still receive dividends?", answer: "Yes, dividends and corporate actions continue to credit to your account." },
      { question: "What is the interest payment frequency?", answer: "Interest is charged monthly only on the utilized overdraft balance." },
      { question: "How is the loan closed?", answer: "Repay the outstanding principal balance and the depository lien is removed instantly." },
    ],
  },

  "loans/gold-loan": {
    slug: "gold-loan",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Gold Loans",
    badge: "Instant Cash in 30 Mins",
    tagline: "Instant liquidity against 18k - 24k gold jewelry with lowest bank interest and secure bank vault storage.",
    description: "Get immediate emergency funding or working capital by pledging gold ornaments with our partner banks at lowest interest rates and zero income proof.",
    rateOrTimeline: "From 8.85% p.a.",
    maxAmountOrScope: "Up to ₹1 Crore",
    approvalTime: "30 Minutes",
    overview: [
      "Gold loans provide the fastest source of credit with minimum documentation and zero CIBIL score checks.",
      "Your jewelry is evaluated by certified appraisers and stored in triple-lock bank lockers with complimentary insurance.",
    ],
    keyBenefits: [
      { title: "No Income Proof Needed", desc: "Sanctioned solely based on gold purity and weight, regardless of salary or ITR." },
      { title: "Instant 30-Minute Payout", desc: "Walk into the branch or request doorstep pickup and walk out with funds." },
      { title: "Highest Per-Gram Rate", desc: "Get maximum RBI-permitted Loan-to-Value (up to 75% of market gold value)." },
      { title: "Insured Vault Safety", desc: "Your jewelry remains 100% insured and protected in bank security vaults." },
    ],
    documentsRequired: [
      { category: "KYC Proof", items: ["PAN Card", "Aadhaar Card / Voter ID / Passport"] },
      { category: "Photographs", items: ["2 Passport Size Photos"] },
    ],
    processSteps: [
      { step: "01", title: "Purity Check", desc: "Certified appraiser evaluates gold karat and net weight." },
      { step: "02", title: "Sanction Slip", desc: "Loan amount calculated at maximum per-gram market rate." },
      { step: "03", title: "Locker Sealing", desc: "Jewelry sealed in tamper-proof bag in your presence." },
      { step: "04", title: "Instant Transfer", desc: "Immediate cash or bank transfer to your account." },
    ],
    faqs: [
      { question: "What karat of gold is accepted?", answer: "Gold ornaments between 18 karat and 24 karat purity are accepted." },
      { question: "Are stones and gems included in weight?", answer: "No, stone weight is deducted. Valuation is done strictly on net gold weight." },
      { question: "Is credit score required for a gold loan?", answer: "No, CIBIL score is not mandatory for gold loan sanction." },
      { question: "Can I pay interest only and principal at the end?", answer: "Yes, bullet repayment scheme is available where you pay principal at tenure end." },
    ],
  },

  "loans/working-capital-loan": {
    slug: "working-capital-loan",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Working Capital Loans",
    badge: "Cash Flow Liquidity",
    tagline: "Cash Credit (CC) & Overdraft (OD) limits up to ₹25 Crore to maintain operational continuity.",
    description: "Finance daily operations, payroll, vendor obligations, and seasonal inventory surges with revolving credit lines structured for manufacturers, traders, and service firms.",
    rateOrTimeline: "From 9.00% p.a.",
    maxAmountOrScope: "Up to ₹25 Crore",
    approvalTime: "3 - 5 Working Days",
    overview: [
      "A healthy cash flow is the backbone of every enterprise. Vaishnavi Associates structures working capital facilities to ensure your business never faces liquidity stress.",
      "We prepare CMA data, stock audit statements, and represent your file before banking credit committees.",
    ],
    keyBenefits: [
      { title: "Pay Only on Utilization", desc: "Interest calculated daily only on the exact drawn amount, not the overall credit limit." },
      { title: "Letter of Credit & Bank Guarantee", desc: "Non-fund based limits (LC / BG) arranged for trade and government contracts." },
      { title: "Annual Renewal Assistance", desc: "Our team handles your annual review documents and limit enhancement filings." },
      { title: "Stock & Book Debt Hypothecation", desc: "Limits structured against debtor receivables and current inventory." },
    ],
    documentsRequired: [
      { category: "Entity & KYC", items: ["Constitutional Documents (MOA/AOA/Deed)", "Promoter KYC & DIN"] },
      { category: "Financials & CMA", items: ["3 Years Audited Financials with Schedules", "Projected CMA Data for 2 Years", "Last 12 Months Current Account Statements"] },
      { category: "Operational", items: ["Current Stock & Book Debt Statement", "GST 3B Filings for 12 Months"] },
    ],
    processSteps: [
      { step: "01", title: "Operating Cycle Audit", desc: "Calculate your debtor turnaround, inventory holding, and working capital gap." },
      { step: "02", title: "CMA Data Preparation", desc: "Prepare comprehensive multi-year CMA reports complying with bank norms." },
      { step: "03", title: "Banking Consortium", desc: "Negotiate drawing power, interest margins, and non-fund limits." },
      { step: "04", title: "Limit Setup", desc: "CC/OD account activated with online drawing capabilities." },
    ],
    faqs: [
      { question: "What is the difference between CC and OD?", answer: "Cash Credit is secured primarily against stock and debtors, while Overdraft can be clean or secured against immovable assets or fixed deposits." },
      { question: "How is Drawing Power calculated?", answer: "Drawing Power (DP) is calculated from your paid stock plus eligible debtors minus trade creditors." },
      { question: "Can a new company get working capital?", answer: "New firms with promoter backing or confirmed purchase orders can access specialized startup limits." },
      { question: "Do you assist with Letter of Credit (LC)?", answer: "Yes, both inland and foreign Letters of Credit and Bank Guarantees are arranged." },
    ],
  },

  "loans/machinery-loan": {
    slug: "machinery-loan",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Machinery & Equipment Loans",
    badge: "Asset Financing",
    tagline: "Finance up to 90% cost of industrial machinery, medical devices, and manufacturing equipment.",
    description: "Modernize your manufacturing plant or diagnostic clinic with competitive equipment financing, government capital subsidies, and long repayment horizons.",
    rateOrTimeline: "From 9.25% p.a.",
    maxAmountOrScope: "Up to ₹15 Crore",
    approvalTime: "4 - 6 Working Days",
    overview: [
      "Investing in advanced technology shouldn't drain your liquidity. We facilitate machinery loans where the equipment itself serves as the primary security.",
      "We assist in claiming available state industrial subsidies and central credit linked capital subsidy schemes (CLCSS).",
    ],
    keyBenefits: [
      { title: "Up to 90% Equipment Cost", desc: "Minimal promoter contribution required, preserving your cash reserves." },
      { title: "No Extra Collateral for Standard Units", desc: "The purchased machine acts as the primary hypothecated security." },
      { title: "Subsidies & Tax Benefits", desc: "Claim accelerated depreciation under Section 32 and applicable government subsidies." },
      { title: "Tenures up to 7 Years", desc: "Long tenures tailored to match the productive lifespan of the equipment." },
    ],
    documentsRequired: [
      { category: "Proforma Invoice", items: ["Quotation / Proforma Invoice from OEM / Machine Vendor", "Machine Technical Specifications"] },
      { category: "Entity Proof", items: ["Company Registration", "Factory / Unit Electricity Bill & Trade License"] },
      { category: "Financials", items: ["2 Years Audited Balance Sheet", "Last 6 Months Bank Statements"] },
    ],
    processSteps: [
      { step: "01", title: "Quotation Submission", desc: "Provide OEM equipment quote and technical ROI projections." },
      { step: "02", title: "Credit Assessment", desc: "Bank assesses debt-service coverage ratio (DSCR) from incremental output." },
      { step: "03", title: "Sanction & Margin Money", desc: "Pay margin money (10-20%) to vendor, bank sanctions remaining balance." },
      { step: "04", title: "Direct Vendor Payment", desc: "Bank releases payment directly to machine manufacturer." },
    ],
    faqs: [
      { question: "Are imported machines eligible for financing?", answer: "Yes, imported machinery with customs duty components and foreign LCs are fully supported." },
      { question: "Can second-hand machinery be financed?", answer: "Yes, certified refurbished machinery with chartered engineer valuation can be financed." },
      { question: "What is the typical margin money required?", answer: "Usually 10% to 20% of the total machinery invoice value." },
      { question: "Can healthcare clinics get equipment loans?", answer: "Yes, diagnostic centers and hospitals qualify for specialized medical equipment loans." },
    ],
  },

  "loans/msme-loan": {
    slug: "msme-loan",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "MSME Loans & CGTMSE Schemes",
    badge: "Government Subsidized",
    tagline: "Dedicated priority sector credit for Micro, Small & Medium Enterprises with interest subvention.",
    description: "Empowering Hyderabad and Telangana MSMEs with government-backed collateral-free loans, PMEGP subsidies, and MUDRA schemes up to ₹5 Crore.",
    rateOrTimeline: "From 8.95% p.a.",
    maxAmountOrScope: "Up to ₹5 Crore",
    approvalTime: "3 - 5 Days",
    overview: [
      "Government of India provides attractive incentives for MSMEs under the CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) framework.",
      "Vaishnavi Associates helps enterprises register under Udyam, prepare bank-compliant project dossiers, and secure interest subvention benefits.",
    ],
    keyBenefits: [
      { title: "100% Collateral-Free", desc: "No third-party guarantee or property mortgage needed under CGTMSE." },
      { title: "Interest Rate Concessions", desc: "Avail 1% to 2% interest subvention for eligible manufacturing and female-led enterprises." },
      { title: "MUDRA Schemes (Shishu, Kishore, Tarun)", desc: "Quick loan assistance up to ₹10 Lakh for micro entrepreneurs." },
      { title: "Priority Sector Lending", desc: "Banks mandated to meet MSME lending targets, leading to higher approval rates." },
    ],
    documentsRequired: [
      { category: "MSME Identity", items: ["Udyam Registration Certificate", "PAN & Aadhaar of Business & Promoters"] },
      { category: "Financials", items: ["Last 2 Years ITR / Financial Statements", "Last 12 Months Bank Statements", "GST 3B Returns"] },
      { category: "Business Plan", items: ["Project Report detailing utilization of funds and revenue forecasts"] },
    ],
    processSteps: [
      { step: "01", title: "Udyam Verification", desc: "Verify enterprise classification (Micro, Small, or Medium)." },
      { step: "02", title: "Scheme Identification", desc: "Match your file with CGTMSE, PMEGP, or SIDBI priority lending lines." },
      { step: "03", title: "Project Filing", desc: "File project report with senior MSME desk managers in partner banks." },
      { step: "04", title: "Sanction", desc: "Sanction issued with government credit guarantee cover." },
    ],
    faqs: [
      { question: "What is CGTMSE limit?", answer: "Under the revised guidelines, collateral-free credit under CGTMSE is available up to ₹5 Crore." },
      { question: "Is Udyam registration compulsory?", answer: "Yes, an active Udyam certificate is mandatory to avail MSME benefits." },
      { question: "Are trading businesses eligible?", answer: "Yes, retail and wholesale trade businesses are now eligible under MSME priority lending." },
      { question: "Can startups apply for MSME loans?", answer: "Yes, DPIIT-recognized startups and new MSMEs qualify for special incubation funding." },
    ],
  },

  "loans/project-loan": {
    slug: "project-loan",
    category: "loans",
    categoryName: "Loans & Financing",
    title: "Project Loans & Infrastructure Financing",
    badge: "Large Scale Capital",
    tagline: "Comprehensive project finance from ₹5 Crore to ₹100+ Crore for industrial plants, commercial real estate, and healthcare projects.",
    description: "Complete capital structuring, TEV (Techno-Economic Viability) study coordination, debt syndication, and consortium banking management.",
    rateOrTimeline: "From 9.25% p.a.",
    maxAmountOrScope: "Up to ₹100+ Crore",
    approvalTime: "15 - 25 Days",
    overview: [
      "Large-scale capital expenditure demands multi-disciplinary financial structuring. Vaishnavi Associates acts as your financial architect from project conception to final drawdown.",
      "We syndicate debt across public sector banks, private institutions, and NBFCs for greenfield and brownfield projects.",
    ],
    keyBenefits: [
      { title: "Debt Syndication & Consortium", desc: "Single-window coordination for multi-bank consortium financing." },
      { title: "TEV Study Preparation", desc: "Techno-Economic Viability reports vetted by approved chartered engineers." },
      { title: "Moratorium Periods", desc: "Repayment holiday (moratorium) during construction and commissioning phases." },
      { title: "Escrow & Cash Flow Architecture", desc: "Robust structured finance models satisfying stringent bank risk criteria." },
    ],
    documentsRequired: [
      { category: "Project Dossier", items: ["Detailed Project Report (DPR)", "Land Allotment Letters / Title Deeds", "Statutory Approvals & Environmental Clearances"] },
      { category: "Promoter Background", items: ["Promoter Net Worth Statements (CA Certified)", "Track record and financial history of group entities"] },
      { category: "Financial Model", items: ["10-Year Projected Balance Sheet, Cash Flow, and DSCR Sensitivities"] },
    ],
    processSteps: [
      { step: "01", title: "Project Appraisal", desc: "Thorough review of DPR, capital expenditure, and debt-equity ratio." },
      { step: "02", title: "TEV & Risk Modeling", desc: "Conduct technical and economic viability studies." },
      { step: "03", title: "Consortium Pitch", desc: "Present project before lead bank credit appraisal committees." },
      { step: "04", title: "Staged Disbursement", desc: "Tranche-wise fund release tied to milestone construction verification." },
    ],
    faqs: [
      { question: "What is the typical Debt-to-Equity ratio for project finance?", answer: "Typically 70:30 or 65:35 depending on sector viability and cash flow predictability." },
      { question: "Is a moratorium period allowed?", answer: "Yes, interest and principal moratoriums are provided until commercial operations commence (COD)." },
      { question: "Do you assist with greenfield projects?", answer: "Yes, we handle greenfield industrial setups, hospitals, hotels, warehousing, and real estate." },
      { question: "Who prepares the TEV study?", answer: "We collaborate with bank-empanelled technical agencies and certified chartered engineers." },
    ],
  },

  // =========================================================================
  // 2. BUSINESS REGISTRATION
  // =========================================================================
  "business-registration/private-limited-company": {
    slug: "private-limited-company",
    category: "business-registration",
    categoryName: "Business Registration",
    title: "Private Limited Company Registration",
    badge: "Most Popular",
    tagline: "Incorporate your Pvt Ltd company in 5 to 7 days with MCA, DIN, DSC, PAN, TAN & Bank Account.",
    description: "The gold standard for startups and scaling businesses seeking investor credibility, limited liability protection, and separate corporate legal identity.",
    rateOrTimeline: "5 - 7 Days",
    maxAmountOrScope: "End-to-End Incorporation",
    approvalTime: "100% Online",
    overview: [
      "A Private Limited Company is the most trusted business structure in India. It offers limited liability to shareholders, separate legal entity status, and easy equity fundraising.",
      "Vaishnavi Associates handles the entire SPICe+ MCA filing process, name reservation, MOA & AOA drafting, and corporate compliance setup.",
    ],
    keyBenefits: [
      { title: "Limited Liability Protection", desc: "Personal assets of directors and shareholders remain completely safe and detached." },
      { title: "Attract Angel & VC Funding", desc: "The only legal structure preferred by venture capitalists and institutional investors." },
      { title: "Perpetual Existence", desc: "The company continues its legal existence irrespective of changes in directors or ownership." },
      { title: "Free Startup Package", desc: "Includes DIN, Digital Signatures (DSC), Name Approval, PAN, TAN, and Bank Account opening." },
    ],
    documentsRequired: [
      { category: "Directors KYC", items: ["PAN Card of all Directors", "Aadhaar Card / Passport", "Bank Statement / Electricity Bill (<2 months old)"] },
      { category: "Registered Office Proof", items: ["Electricity Bill / Property Tax Receipt of office premises", "NOC from Property Owner", "Rent Agreement (if rented)"] },
    ],
    processSteps: [
      { step: "01", title: "DSC & Name Check", desc: "Obtain Class 3 Digital Signatures and perform RUN MCA name availability search." },
      { step: "02", title: "SPICe+ Part A & B", desc: "Draft MOA, AOA, and submit SPICe+ Part B incorporation forms with MCA." },
      { step: "03", title: "MCA Approval", desc: "Ministry of Corporate Affairs issues Certificate of Incorporation (COI) and CIN." },
      { step: "04", title: "PAN, TAN & Banking", desc: "Instant PAN, TAN generation and assisted corporate current account opening." },
    ],
    faqs: [
      { question: "How many directors are required for a Pvt Ltd company?", answer: "Minimum 2 directors and 2 shareholders are required (a person can be both director and shareholder)." },
      { question: "Is physical presence required at MCA office?", answer: "No, the entire process is 100% digital and paperless." },
      { question: "Is there any minimum capital requirement?", answer: "No, there is no minimum paid-up capital required. You can start with as little as ₹1,000." },
      { question: "Can a residential address be used as registered office?", answer: "Yes, a residential home address can legally be used as the company's registered office." },
    ],
  },

  "business-registration/llp-registration": {
    slug: "llp-registration",
    category: "business-registration",
    categoryName: "Business Registration",
    title: "LLP (Limited Liability Partnership) Registration",
    badge: "Low Compliance",
    tagline: "Combine the flexibility of a partnership with the limited liability benefits of a private company.",
    description: "Ideal for professional services, consultants, and family businesses looking for zero mandatory audit requirements up to ₹40 Lakh turnover.",
    rateOrTimeline: "7 - 10 Days",
    maxAmountOrScope: "Complete MCA Setup",
    approvalTime: "Fast-Track",
    overview: [
      "Limited Liability Partnership (LLP) is regulated under the LLP Act, 2008. It provides corporate protection while maintaining internal partnership agreement flexibility.",
      "Lower statutory compliance costs and exemption from statutory audit until turnover exceeds ₹40 Lakh make it very popular.",
    ],
    keyBenefits: [
      { title: "No Mandatory Audit", desc: "Audit not required if turnover is under ₹40 Lakh and capital contribution is under ₹25 Lakh." },
      { title: "Limited Liability", desc: "Partners are not liable for another partner's negligence or misconduct." },
      { title: "No Dividend Distribution Tax", desc: "Profits can be distributed directly to partners without dividend tax leakages." },
      { title: "Lower Compliance Cost", desc: "Fewer annual filings compared to a traditional private limited company." },
    ],
    documentsRequired: [
      { category: "Partners KYC", items: ["PAN Card of all Designated Partners", "Aadhaar Card / Passport", "Latest Bank Statement"] },
      { category: "Premises Proof", items: ["Registered office electricity bill", "NOC from owner", "Rent agreement"] },
    ],
    processSteps: [
      { step: "01", title: "DPIN & DSC", desc: "Obtain Designated Partner Identification Numbers and digital signatures." },
      { step: "02", title: "RUN-LLP Name Approval", desc: "Reserve a unique business name on the Ministry of Corporate Affairs portal." },
      { step: "03", title: "FiLLiP Incorporation", desc: "Submit FiLLiP forms for incorporation and obtain Certificate from Registrar of Companies." },
      { step: "04", title: "LLP Agreement Filing", desc: "Draft customized LLP agreement and file Form 3 within 30 days." },
    ],
    faqs: [
      { question: "How many partners are needed for an LLP?", answer: "Minimum 2 designated partners. There is no upper limit on the maximum number of partners." },
      { question: "Can foreign nationals be partners?", answer: "Yes, foreign nationals and NRIs can be designated partners subject to FDI guidelines." },
      { question: "Can an LLP be converted to a Private Limited company?", answer: "Yes, an LLP can be converted into a Pvt Ltd company under Section 366 of the Companies Act." },
    ],
  },

  "business-registration/partnership-firm-registration": {
    slug: "partnership-firm-registration",
    category: "business-registration",
    categoryName: "Business Registration",
    title: "Partnership Firm Registration",
    badge: "Traditional Structure",
    tagline: "Establish a registered partnership firm with Registrar of Firms (ROF) with minimal legal formalities.",
    description: "Quick setup, shared capital responsibility, and recognized legal standing under the Indian Partnership Act, 1932.",
    rateOrTimeline: "3 - 5 Days",
    maxAmountOrScope: "ROF Registration & Deed",
    approvalTime: "Quick Setup",
    overview: [
      "A Partnership Firm is an agreement between two or more persons to share business profits and management duties.",
      "Vaishnavi Associates drafts comprehensive Partnership Deeds covering capital distribution, profit-sharing ratios, dispute resolution, and handles filing with the state Registrar of Firms (ROF).",
    ],
    keyBenefits: [
      { title: "Rapid Execution", desc: "Operational within days with a legally enforceable Partnership Deed on stamp paper." },
      { title: "Shared Management", desc: "Combine skills, capital, and networks of multiple co-founders." },
      { title: "Entity PAN & Bank Account", desc: "Obtain separate PAN for the firm and open dedicated current accounts." },
      { title: "Easy Dissolution", desc: "Simpler procedures to modify clauses or dissolve the firm when desired." },
    ],
    documentsRequired: [
      { category: "Partner KYC", items: ["PAN Cards of all partners", "Aadhaar Card / Voter ID"] },
      { category: "Business Premises", items: ["Address proof of principal place of business", "Rent agreement / Ownership proof"] },
    ],
    processSteps: [
      { step: "01", title: "Deed Drafting", desc: "Draft bespoke Partnership Deed with clear operational covenants." },
      { step: "02", title: "Stamp Duty & Notary", desc: "Execute deed on appropriate state stamp paper with notary attestation." },
      { step: "03", title: "ROF Filing", desc: "Submit Form 1 with Registrar of Firms for official registration certificate." },
      { step: "04", title: "PAN & Current Account", desc: "Apply for Firm PAN and setup banking facilities." },
    ],
    faqs: [
      { question: "Is registration of a partnership firm mandatory?", answer: "Registration under ROF is optional but highly recommended to file legal suits against third parties." },
      { question: "What is the maximum number of partners?", answer: "Maximum 50 partners are allowed in a partnership firm." },
      { question: "Are partners personally liable?", answer: "Yes, partners have unlimited personal liability in a general partnership firm." },
    ],
  },

  "business-registration/sole-proprietorship": {
    slug: "sole-proprietorship",
    category: "business-registration",
    categoryName: "Business Registration",
    title: "Sole Proprietorship Registration",
    badge: "Easiest to Start",
    tagline: "Start your independent business with Udyam, GST, and Trade License registrations.",
    description: "Single-owner business model with 100% profit retention, complete operational autonomy, and lowest initial compliance costs.",
    rateOrTimeline: "2 - 3 Days",
    maxAmountOrScope: "Full Legal Identity",
    approvalTime: "Express",
    overview: [
      "A Sole Proprietorship is the simplest business entity in India. It requires no complex MCA incorporation, making it the most economical way to start small businesses and freelancing ventures.",
      "We provide all statutory government registrations (Udyam MSME, GSTIN, Shop & Establishment) to enable official business current account opening.",
    ],
    keyBenefits: [
      { title: "Total Control", desc: "You make 100% of business decisions without board or partner interference." },
      { title: "Fastest Setup", desc: "Get registered and operational in as little as 48 hours." },
      { title: "Lowest Annual Costs", desc: "Zero mandatory ROC filings or public disclosure burdens." },
      { title: "Current Account Ready", desc: "All supporting government certificates provided for instant bank account opening." },
    ],
    documentsRequired: [
      { category: "Proprietor KYC", items: ["PAN Card", "Aadhaar Card", "Passport Photo"] },
      { category: "Office Proof", items: ["Electricity bill of business address", "NOC from property owner"] },
    ],
    processSteps: [
      { step: "01", title: "MSME Registration", desc: "Generate government Udyam registration certificate." },
      { step: "02", title: "GST & Municipal Filings", desc: "Apply for GSTIN and local municipal trade permissions." },
      { step: "03", title: "Bank Docket", desc: "Prepare complete KYC docket for business current account opening." },
    ],
    faqs: [
      { question: "Does a proprietorship have a separate PAN?", answer: "No, the proprietor's individual PAN serves as the business PAN." },
      { question: "Can I convert to Pvt Ltd later?", answer: "Yes, as your business grows you can seamlessly transfer assets into a Private Limited Company." },
    ],
  },

  "business-registration/one-person-company": {
    slug: "one-person-company",
    category: "business-registration",
    categoryName: "Business Registration",
    title: "One Person Company (OPC) Registration",
    badge: "Solo Founder Protection",
    tagline: "Enjoy corporate limited liability as a single solo founder without requiring a second director.",
    description: "Combines the complete control of a sole proprietorship with the legal protections and corporate status of a Private Limited Company.",
    rateOrTimeline: "5 - 7 Days",
    maxAmountOrScope: "MCA Incorporation",
    approvalTime: "100% Online",
    overview: [
      "Introduced in the Companies Act 2013, OPC enables a single entrepreneur to operate a corporate entity with limited liability.",
      "Only one director and one nominee are required, allowing solo founders to retain 100% equity.",
    ],
    keyBenefits: [
      { title: "Single Shareholder", desc: "Solo founder holds 100% ownership and full management control." },
      { title: "Corporate Shield", desc: "Personal assets are protected from business debts and liabilities." },
      { title: "Legal Corporate Identity", desc: "Can sign contracts, own property, and sue or be sued in its corporate name." },
      { title: "Easy Loan Access", desc: "Banks view OPCs with higher credibility compared to unorganized proprietorships." },
    ],
    documentsRequired: [
      { category: "Founder & Nominee KYC", items: ["PAN Card of Founder & Nominee", "Aadhaar Card / Passport", "Bank Statements (<2 months old)"] },
      { category: "Registered Office", items: ["Utility bill of office address", "Owner NOC & Rent Agreement"] },
    ],
    processSteps: [
      { step: "01", title: "DSC & Name Filing", desc: "Obtain digital signature and submit SPICe+ Part A for name approval." },
      { step: "02", title: "Nominee Consent", desc: "Execute INC-3 nominee consent declaration." },
      { step: "03", title: "SPICe+ Part B", desc: "File incorporation forms, MOA, AOA, and statutory declarations." },
      { step: "04", title: "Certificate of Incorporation", desc: "Obtain CIN, PAN, TAN, and EPFO/ESIC registrations." },
    ],
    faqs: [
      { question: "Who can be a nominee in an OPC?", answer: "Any adult Indian citizen (resident or non-resident) can be appointed as nominee." },
      { question: "Can an OPC convert to a regular Pvt Ltd?", answer: "Yes, an OPC can voluntarily convert to a Private Limited Company at any time." },
    ],
  },

  "business-registration/startup-registration": {
    slug: "startup-registration",
    category: "business-registration",
    categoryName: "Business Registration",
    title: "Startup India Registration & DPIIT Recognition",
    badge: "Govt Tax Exemptions",
    tagline: "Unlock 3-year income tax holiday (Section 80-IAC), angel tax exemption, and fast-track patent filings.",
    description: "Get officially recognized by Department for Promotion of Industry and Internal Trade (DPIIT) to access government grants, seed funds, and public procurement relaxations.",
    rateOrTimeline: "7 - 12 Days",
    maxAmountOrScope: "DPIIT Recognition",
    approvalTime: "Govt Portal",
    overview: [
      "The Startup India initiative offers tremendous financial and regulatory benefits for innovative enterprises.",
      "Vaishnavi Associates assists in business pitch deck structuring, innovation statement drafting, and complete DPIIT application filing.",
    ],
    keyBenefits: [
      { title: "3-Year Tax Exemption (80-IAC)", desc: "100% tax holiday on business profits for 3 consecutive financial years." },
      { title: "Angel Tax Exemption (Section 56)", desc: "Exemption from tax on capital raised above fair market value." },
      { title: "Fast-Track Patents & Trademarks", desc: "Up to 80% rebate on government patent filing fees and 50% on trademark fees." },
      { title: "Easy Public Tenders", desc: "Exemption from prior turnover and experience criteria in government tenders." },
    ],
    documentsRequired: [
      { category: "Corporate Documents", items: ["Certificate of Incorporation (Pvt Ltd / LLP)", "MOA & AOA / LLP Agreement"] },
      { category: "Innovation Dossier", items: ["Pitch Deck explaining innovation, scalability, and market impact", "Website link or mobile app demo"] },
    ],
    processSteps: [
      { step: "01", title: "Eligibility Audit", desc: "Verify entity age (<10 years) and turnover (<₹100 Crore)." },
      { step: "02", title: "DPIIT Application", desc: "Draft innovation writeup and submit application on Startup India portal." },
      { step: "03", title: "Recognition Certificate", desc: "Receive government DPIIT recognition number." },
      { step: "04", title: "Tax Exemption Filing", desc: "Submit Form 1 for Section 80-IAC and Angel Tax clearances." },
    ],
    faqs: [
      { question: "Can a proprietorship apply for Startup India?", answer: "No, only Private Limited Companies, LLPs, and registered Partnership Firms are eligible." },
      { question: "What qualifies as innovation?", answer: "Development or improvement of products/services with a scalable business model for employment or wealth generation." },
    ],
  },

  // =========================================================================
  // 3. GST & TAX
  // =========================================================================
  "gst/gst-registration": {
    slug: "gst-registration",
    category: "gst",
    categoryName: "GST & Tax Advisory",
    title: "GST Registration",
    badge: "Government Portal",
    tagline: "Get your 15-digit GSTIN allotment in 3 to 5 business days with Aadhaar authentication.",
    description: "Mandatory for inter-state sales, e-commerce sellers, and businesses crossing ₹20L/₹40L turnover thresholds. Handled by expert GST practitioners.",
    rateOrTimeline: "3 - 5 Days",
    maxAmountOrScope: "New GSTIN Allotment",
    approvalTime: "Online Allotment",
    overview: [
      "Goods and Services Tax (GST) is the foundational tax identification for businesses in India.",
      "Vaishnavi Associates ensures accurate HSN/SAC code selection, jurisdiction identification, and prompt Aadhaar biometric authentication to avoid department queries.",
    ],
    keyBenefits: [
      { title: "Legitimate Tax Invoicing", desc: "Pass Input Tax Credit (ITC) to your B2B customers and increase sales." },
      { title: "Sell Across India & Online", desc: "Sell goods on Amazon, Flipkart, or your own website without inter-state barriers." },
      { title: "Input Tax Credit (ITC)", desc: "Offset tax paid on business purchases, machinery, and vendor services." },
      { title: "Zero Department Visits", desc: "Entire registration completed digitally through official GST portal." },
    ],
    documentsRequired: [
      { category: "Applicant KYC", items: ["PAN Card of Promoter / Entity", "Aadhaar Card linked to Mobile Number", "Passport Photo"] },
      { category: "Premises Documents", items: ["Electricity Bill of premises", "NOC from Owner & Rent Agreement / Property Tax receipt"] },
      { category: "Banking Proof", items: ["Cancelled Cheque or Bank Statement showing Name and Account Details"] },
    ],
    processSteps: [
      { step: "01", title: "TRN Generation", desc: "Generate Temporary Reference Number on the GST common portal." },
      { step: "02", title: "Part B Submission", desc: "Fill detailed business particulars, promoter details, and HSN codes." },
      { step: "03", title: "Aadhaar OTP Authentication", desc: "Complete biometric OTP authentication for instant verification." },
      { step: "04", title: "GST Certificate (REG-06)", desc: "Department approves file and issues 15-digit GSTIN certificate." },
    ],
    faqs: [
      { question: "What is the turnover threshold for GST registration?", answer: "₹40 Lakh for goods (₹20 Lakh in special category states) and ₹20 Lakh for service providers." },
      { question: "Can I voluntarily register for GST?", answer: "Yes, voluntary registration is permitted and beneficial for claiming input tax credits." },
    ],
  },

  "gst/gst-return-filing": {
    slug: "gst-return-filing",
    category: "gst",
    categoryName: "GST & Tax Advisory",
    title: "GST Return Filing (GSTR-1, GSTR-3B & GSTR-9)",
    badge: "Monthly / Quarterly",
    tagline: "Timely reconciliation, maximum Input Tax Credit optimization, and zero late-fee compliance.",
    description: "Never miss a deadline. Our dedicated GST accountants reconcile GSTR-2B with your purchase register to claim 100% legitimate tax credits.",
    rateOrTimeline: "Monthly / QRMP",
    maxAmountOrScope: "Reconciliation & Filing",
    approvalTime: "On-Time Guaranteed",
    overview: [
      "Filing GST returns accurately prevents ITC blockages, supplier disputes, and harsh department notices.",
      "We handle GSTR-1 (outward supplies), GSTR-3B (monthly tax computation), GSTR-9 (annual return), and GSTR-9C audit reconciliations.",
    ],
    keyBenefits: [
      { title: "Maximum ITC Claim", desc: "Automated 2B reconciliation ensures you never lose a rupee of input tax credit." },
      { title: "Avoid Costly Penalties", desc: "Zero late fees and protection from GSTIN suspension or cancellation." },
      { title: "Supplier Reconciliation", desc: "Identify defaulting vendors who haven't uploaded your invoices." },
      { title: "Dedicated Tax Manager", desc: "Personal tax accountant assigned for monthly billing and ledger queries." },
    ],
    documentsRequired: [
      { category: "Sales Data", items: ["Sales Invoices summary or Tally / Zoho Books backup"] },
      { category: "Purchase Data", items: ["Purchase bills and expense vouchers"] },
      { category: "Portal Access", items: ["GST portal login credentials"] },
    ],
    processSteps: [
      { step: "01", title: "Data Collection", desc: "Submit sales and purchase registers by the 5th of each month." },
      { step: "02", title: "Reconciliation", desc: "Match invoices with GSTR-2B on GST portal." },
      { step: "03", title: "Tax Challan", desc: "Compute net liability and generate challan if tax is payable." },
      { step: "04", title: "ARN Generation", desc: "File GSTR-1 and GSTR-3B and share official ARN acknowledgment." },
    ],
    faqs: [
      { question: "What is the penalty for late GST filing?", answer: "Late fee of ₹50 per day (₹20 for Nil return) plus 18% interest on unpaid tax." },
      { question: "What is QRMP scheme?", answer: "Quarterly Return Monthly Payment allows small taxpayers with turnover up to ₹5 Cr to file returns quarterly." },
    ],
  },

  "tax/itr-filing": {
    slug: "itr-filing",
    category: "tax",
    categoryName: "GST & Tax Advisory",
    title: "Income Tax Return (ITR) Filing",
    badge: "Assessment Year 2025-26",
    tagline: "Maximize tax refunds and ensure 100% compliance with revised income tax regimes.",
    description: "Expert CA filing for salaried individuals, business owners, professionals, capital gains traders, and NRI taxpayers.",
    rateOrTimeline: "AY 2025-26",
    maxAmountOrScope: "ITR 1 to 7 Filing",
    approvalTime: "24 - 48 Hours",
    overview: [
      "Filing your Income Tax Return on time is essential for loan approvals, visa applications, and avoiding Section 234F penalties.",
      "Our Chartered Accountants analyze your AIS, TIS, and Form 26AS to uncover all eligible deductions and ensure optimal tax savings.",
    ],
    keyBenefits: [
      { title: "Maximum Refund Optimization", desc: "Accurate claiming of TDS refunds and eligible deductions under both Old and New Tax Regimes." },
      { title: "Capital Gains Analysis", desc: "Accurate computation of equity, mutual funds, crypto, and real estate capital gains." },
      { title: "Loan & Visa Eligibility", desc: "Official CA-verified computation of income required by banks and consulates." },
      { title: "Notice Protection", desc: "Flawless filing backed by full notice defense assistance." },
    ],
    documentsRequired: [
      { category: "Basic", items: ["PAN & Aadhaar Card"] },
      { category: "Income Proof", items: ["Form 16 (for salaried)", "Bank Account Statements for entire financial year", "P&L and Balance Sheet (for business)"] },
      { category: "Investments & Taxes", items: ["Form 26AS, AIS, and TIS statements", "Capital Gains Statements from brokers", "Home loan interest / rent receipts"] },
    ],
    processSteps: [
      { step: "01", title: "Document Review", desc: "Upload Form 16, AIS, and bank statements." },
      { step: "02", title: "Tax Computation", desc: "Our CA prepares tax computation comparing Old vs New regime." },
      { step: "03", title: "Review & Approval", desc: "Review your draft return and confirm refund or payable amount." },
      { step: "04", title: "E-Filing & Verification", desc: "Return e-filed and e-verified with ITR-V acknowledgment shared." },
    ],
    faqs: [
      { question: "Which tax regime is better: Old or New?", answer: "We compute under both regimes and file the one that saves you the maximum tax." },
      { question: "What is the penalty for filing after due date?", answer: "Late fee of ₹5,000 under Section 234F (reduced to ₹1,000 for income below ₹5 Lakh)." },
    ],
  },

  // =========================================================================
  // 4. LICENSES & REGISTRATIONS
  // =========================================================================
  "licenses/trade-license": {
    slug: "trade-license",
    category: "licenses",
    categoryName: "Licenses & Municipal Approvals",
    title: "Municipal Trade License",
    badge: "Local Authority",
    tagline: "Obtain or renew your municipal commercial trade license with GHMC, HMDA, and regional urban bodies.",
    description: "Mandatory certification from urban local bodies verifying that your business premises comply with health, safety, and zoning regulations.",
    rateOrTimeline: "3 - 5 Days",
    maxAmountOrScope: "GHMC & Urban Bodies",
    approvalTime: "Online Clearance",
    overview: [
      "Every commercial establishment, retail shop, restaurant, clinic, and factory must hold a valid Trade License from the local municipal corporation.",
      "Vaishnavi Associates handles municipal paperwork, fee calculation, site inspection coordination, and online certificate downloads.",
    ],
    keyBenefits: [
      { title: "Avoid Municipal Penalties", desc: "Prevents shop sealing, heavy fines, and statutory municipal notices." },
      { title: "Bank Current Account Setup", desc: "Accepted by all banks as primary proof of commercial address." },
      { title: "Annual Renewal Tracking", desc: "Our automated reminders ensure your license never lapses." },
      { title: "Zoning & NOC Compliance", desc: "Assistance with commercial building approvals and fire NOCs where required." },
    ],
    documentsRequired: [
      { category: "Applicant Proof", items: ["Proprietor / Director PAN & Aadhaar", "Photo of business establishment with name board"] },
      { category: "Premises Proof", items: ["Property Tax receipt / Municipal Assessment Copy", "Lease agreement / Owner NOC"] },
    ],
    processSteps: [
      { step: "01", title: "Category Mapping", desc: "Determine your municipal trade code, square footage, and applicable fee." },
      { step: "02", title: "Online Application", desc: "Upload building documents and photos on the municipal portal." },
      { step: "03", title: "Sanitary Inspection", desc: "Assistance during sanitary inspector physical or digital verification." },
      { step: "04", title: "License Issue", desc: "Download official Trade License certificate with QR verification." },
    ],
    faqs: [
      { question: "How long is a trade license valid?", answer: "Trade licenses are generally valid for 1 year (up to March 31st) and must be renewed annually." },
      { question: "Is trade license mandatory for software offices?", answer: "Yes, all commercial establishments within municipal limits require a trade license." },
    ],
  },

  "licenses/fssai-registration": {
    slug: "fssai-registration",
    category: "licenses",
    categoryName: "Licenses & Municipal Approvals",
    title: "FSSAI Food License & Registration",
    badge: "Food Safety",
    tagline: "14-digit FSSAI food license for restaurants, cloud kitchens, manufacturers, and food distributors.",
    description: "Ensure food safety compliance under Food Safety and Standards Authority of India (FSSAI). Basic, State, and Central licenses handled.",
    rateOrTimeline: "3 - 7 Days",
    maxAmountOrScope: "Basic / State / Central",
    approvalTime: "Fast-Track",
    overview: [
      "FSSAI license is compulsory for any business dealing with food manufacturing, processing, packaging, storage, distribution, or retail.",
      "Required to list your restaurant or cloud kitchen on Swiggy, Zomato, Blinkit, and retail supermarket shelves.",
    ],
    keyBenefits: [
      { title: "Swiggy & Zomato Onboarding", desc: "Mandatory 14-digit FSSAI number needed to activate partner restaurant listings." },
      { title: "Consumer Trust", desc: "Display official food safety standards and build customer loyalty." },
      { title: "Legal Protection", desc: "Shield your business from severe food safety department fines and inspections." },
    ],
    documentsRequired: [
      { category: "KYC", items: ["PAN & Aadhaar of Food Business Operator (FBO)", "Passport photo"] },
      { category: "Premises & Operations", items: ["Premises electricity bill & Rent Agreement", "Food category list & kitchen layout plan"] },
    ],
    processSteps: [
      { step: "01", title: "License Tier Selection", desc: "Identify Basic (<₹12L), State (₹12L - ₹20Cr), or Central (>₹20Cr)." },
      { step: "02", title: "FoSCoS Filing", desc: "Submit Form A/B on Food Safety Compliance System portal." },
      { step: "03", title: "Department Scrutiny", desc: "Address any queries from the Food Safety Officer." },
      { step: "04", title: "14-Digit Certificate", desc: "Receive official FSSAI certificate with registration number." },
    ],
    faqs: [
      { question: "Can a home kitchen get an FSSAI license?", answer: "Yes, small home bakers and cloud kitchens can obtain a Basic FSSAI registration." },
      { question: "What is the validity period?", answer: "You can choose validity from 1 to 5 years." },
    ],
  },

  // =========================================================================
  // 5. IT SERVICES
  // =========================================================================
  "it-services/website-development": {
    slug: "website-development",
    category: "it-services",
    categoryName: "Digital & IT Solutions",
    title: "Corporate Website Development",
    badge: "Modern Tech Stack",
    tagline: "High-performance, ultra-fast corporate websites built with Next.js, React, and modern UI/UX.",
    description: "Transform your digital brand presence with bespoke responsive websites designed for maximum lead generation, SEO dominance, and lightning-fast speed.",
    rateOrTimeline: "7 - 14 Days",
    maxAmountOrScope: "Custom Architecture",
    approvalTime: "60 FPS Smoothness",
    overview: [
      "In today's digital landscape, your website is your premier business card. Vaishnavi Associates delivers modern, luxury web engineering for financial, real estate, and corporate enterprises.",
      "Every project is crafted with Google Core Web Vitals optimization, mobile responsiveness, and high-conversion landing page layouts.",
    ],
    keyBenefits: [
      { title: "Sub-Second Page Speeds", desc: "Engineered with Next.js and static pre-rendering for 0ms instantaneous route transitions." },
      { title: "SEO-First Architecture", desc: "Semantic markup, dynamic Open Graph tags, and structured JSON-LD schemas." },
      { title: "Luxury Custom Aesthetics", desc: "Modern typography, subtle micro-animations, and bespoke brand palettes." },
      { title: "Lead Generation Engines", desc: "Integrated WhatsApp CTAs, inquiry forms, and analytics tracking." },
    ],
    documentsRequired: [
      { category: "Brand Assets", items: ["Company Logo (SVG/PNG)", "Brand Colors & Font Preferences"] },
      { category: "Content", items: ["Service descriptions & company profile", "Contact numbers & office address"] },
    ],
    processSteps: [
      { step: "01", title: "Wireframing & UI/UX", desc: "Design bespoke mockups aligned with your corporate identity." },
      { step: "02", title: "Frontend Engineering", desc: "Code clean, responsive, high-performance web components." },
      { step: "03", title: "SEO & Form Integration", desc: "Configure meta tags, analytics, and lead capture workflows." },
      { step: "04", title: "Deployment & SSL", desc: "Deploy on high-speed CDN with SSL security and custom domain." },
    ],
    faqs: [
      { question: "Is the website mobile-friendly?", answer: "Yes, 100% responsive across smartphones, tablets, laptops, and 4K displays." },
      { question: "Do you provide hosting and domain setup?", answer: "Yes, we handle complete domain linking, CDN setup, and SSL security configuration." },
    ],
  },
  // GST AMENDMENT & CANCELLATION
  "gst/gst-amendment": {
    slug: "gst-amendment",
    category: "gst",
    categoryName: "GST & Tax Advisory",
    title: "GST Core & Non-Core Amendment",
    badge: "Official Modification",
    tagline: "Update business name, principal address, partner additions, and bank accounts on GST portal.",
    description: "Keep your GST registration 100% compliant when changing premises, adding branches, or updating directorship with assisted GST amendment filings.",
    rateOrTimeline: "2 - 4 Days",
    maxAmountOrScope: "Core & Non-Core",
    approvalTime: "Department Approval",
    overview: [
      "Any change in your business particulars must be updated on the GST portal within 15 days under Section 28 of the CGST Act.",
      "Vaishnavi Associates handles drafting required board resolutions, landlord NOCs, and coordinates with the jurisdictional GST officer for speedy approval.",
    ],
    keyBenefits: [
      { title: "Avoid Cancellation Notices", desc: "Non-updated premises or bank accounts often lead to automated show-cause notices." },
      { title: "Seamless Address Shift", desc: "Smooth transition of registered office or godown without disrupting Input Tax Credit." },
      { title: "Partner & Director Addition", desc: "Add or remove authorized signatories with Class 3 DSC authentication." },
    ],
    documentsRequired: [
      { category: "Amendment Proofs", items: ["New address proof / Lease deed & electricity bill", "Board Resolution / Partner consent letter", "Updated Bank Passbook / Cheque"] },
    ],
    processSteps: [
      { step: "01", title: "Document Review", desc: "Verify new supporting documents against GST guidelines." },
      { step: "02", title: "REG-14 Submission", desc: "File Form GST REG-14 on the portal with digital signature." },
      { step: "03", title: "Query Response", desc: "Promptly answer any clarification raised by tax officer in Form REG-03." },
      { step: "04", title: "Amended Certificate", desc: "Download revised GST Registration Certificate (REG-06)." },
    ],
    faqs: [
      { question: "What are core and non-core fields?", answer: "Core fields include business name, principal place of business, and partners. Non-core includes bank details and email/phone." },
    ],
  },

  "gst/gst-cancellation": {
    slug: "gst-cancellation",
    category: "gst",
    categoryName: "GST & Tax Advisory",
    title: "GST Surrender & Cancellation",
    badge: "Safe Closure",
    tagline: "Voluntary surrender of GSTIN without audit liabilities or future tax demands.",
    description: "Close or surrender your unused GST number legally through Form REG-16 and final return GSTR-10 to prevent accumulating daily late fees.",
    rateOrTimeline: "7 - 15 Days",
    maxAmountOrScope: "Full Closure & GSTR-10",
    approvalTime: "Official Order",
    overview: [
      "Keeping an unused GST registration active incurs late fees even for NIL returns. Legally cancelling it protects promoters from future department recovery proceedings.",
      "We calculate closing stock input tax reversal, file Form GST REG-16, and handle the mandatory Final Return (GSTR-10).",
    ],
    keyBenefits: [
      { title: "Stop Late Fee Accumulation", desc: "End recurring compliance obligations and penalties for good." },
      { title: "Clear Closing Stock Liabilities", desc: "Accurate ITC reversal on remaining inventory to avoid tax evasion penalties." },
      { title: "Order of Cancellation (REG-19)", desc: "Obtain clean discharge order from the jurisdictional GST officer." },
    ],
    documentsRequired: [
      { category: "Closure Details", items: ["Date of closure / discontinuation", "Stock inventory statement as on closure date", "Latest bank statement showing zero tax liabilities"] },
    ],
    processSteps: [
      { step: "01", title: "Stock & ITC Audit", desc: "Calculate tax payable on closing capital goods and input stock." },
      { step: "02", title: "REG-16 Filing", desc: "Submit cancellation application with valid business closure reasons." },
      { step: "03", title: "Order (REG-19)", desc: "Officer issues cancellation order within 30 days." },
      { step: "04", title: "Final Return GSTR-10", desc: "File GSTR-10 within 3 months to complete the statutory process." },
    ],
    faqs: [
      { question: "Can a suspended GST number be cancelled?", answer: "Yes, we can file responses to revocation notices or proceed directly with formal surrender." },
    ],
  },

  // TAX SERVICES
  "tax/income-tax-return": {
    slug: "income-tax-return",
    category: "tax",
    categoryName: "GST & Tax Advisory",
    title: "Corporate & Business Income Tax Return",
    badge: "Audit & Tax Filings",
    tagline: "Tax Audit under Section 44AB, Transfer Pricing, and Corporate ITR-6 Filing.",
    description: "Comprehensive tax audit and return filing for companies, partnership firms, and large turnover businesses with audited financial statements.",
    rateOrTimeline: "Due Sept/Oct",
    maxAmountOrScope: "ITR-5 & ITR-6",
    approvalTime: "CA Certified",
    overview: [
      "Enterprises with business turnover exceeding statutory thresholds require mandatory Tax Audit by a practicing Chartered Accountant.",
      "Our senior tax partners review books of accounts, compile Form 3CA/3CB and 3CD, and file accurate corporate returns.",
    ],
    keyBenefits: [
      { title: "Section 44AB Tax Audit", desc: "Full statutory compliance with detailed 3CD disclosure clauses." },
      { title: "MAT & Tax Credit Optimization", desc: "Optimize Minimum Alternate Tax (MAT) credits and carry-forward business losses." },
      { title: "Transfer Pricing Reports", desc: "Form 3CEB certification for international and specified domestic transactions." },
    ],
    documentsRequired: [
      { category: "Financials", items: ["Audited Balance Sheet & Profit and Loss Account", "Trial Balance, General Ledger, and Depreciation Schedules"] },
    ],
    processSteps: [
      { step: "01", title: "Audit Verification", desc: "Verification of expense vouchers, TDS deductions, and statutory payments." },
      { step: "02", title: "Form 3CD Preparation", desc: "Compile 44 audit particulars and tax disallowances." },
      { step: "03", title: "E-Filing", desc: "Upload tax audit report and corporate ITR with director DSC." },
    ],
    faqs: [
      { question: "What is the turnover limit for tax audit?", answer: "₹1 Crore for business (₹10 Crore if cash transactions are less than 5%)." },
    ],
  },

  "tax/tds-return": {
    slug: "tds-return",
    category: "tax",
    categoryName: "GST & Tax Advisory",
    title: "TDS Return Filing & Form 16/16A Generation",
    badge: "Quarterly Compliance",
    tagline: "Quarterly filing of Form 24Q, 26Q, and 27Q with TRACES reconciliation and certificate downloads.",
    description: "Ensure timely deposit and reporting of Tax Deducted at Source (TDS) on salaries, contractor payments, rent, and professional fees.",
    rateOrTimeline: "Quarterly",
    maxAmountOrScope: "Forms 24Q, 26Q, 27Q",
    approvalTime: "TRACES Verified",
    overview: [
      "Failure to file TDS returns or deduct tax at prescribed rates invites severe interest and daily late fees of ₹200 under Section 234E.",
      "Vaishnavi Associates assists corporate deductors with FVU validation, TRACES justification reports, and revised correction statements.",
    ],
    keyBenefits: [
      { title: "Zero Late Fee Penalty", desc: "Filing before due dates prevents ₹200/day penal charges under Section 234E." },
      { title: "Instant Form 16 / 16A", desc: "Bulk download and digitally sign TDS certificates directly from TRACES." },
      { title: "Demand & Notice Resolution", desc: "Resolve short deduction, late filing fees, and PAN error demands on TRACES." },
    ],
    documentsRequired: [
      { category: "Challan & Deduction Data", items: ["TAN Number", "Bank BSR code, Challan serial numbers, and tax deposit dates", "Deductee PAN list with gross invoice and TDS deducted amounts"] },
    ],
    processSteps: [
      { step: "01", title: "Data Extraction", desc: "Compile payroll (24Q) and non-salary vendor deduction sheets (26Q)." },
      { step: "02", title: "FVU Validation", desc: "Run through NSDL File Validation Utility (FVU) to ensure zero syntax errors." },
      { step: "03", title: "Submission", desc: "File return through TIN-FC center or e-filing portal." },
      { step: "04", title: "Certificate Download", desc: "Generate and distribute signed Form 16 / 16A certificates." },
    ],
    faqs: [
      { question: "When are TDS returns due?", answer: "Q1 (July 31), Q2 (Oct 31), Q3 (Jan 31), and Q4 (May 31)." },
    ],
  },

  "tax/tax-planning": {
    slug: "tax-planning",
    category: "tax",
    categoryName: "GST & Tax Advisory",
    title: "Strategic Tax Planning & Wealth Advisory",
    badge: "High Net Worth",
    tagline: "Proactive, legal strategies to reduce corporate and personal tax burdens.",
    description: "Structured advisory on capital gains roll-overs (Section 54/54EC), family trust structures, corporate entity reorganization, and executive compensation.",
    rateOrTimeline: "Custom Advisory",
    maxAmountOrScope: "High Value Tax Shield",
    approvalTime: "Advisory Session",
    overview: [
      "Tax planning is about foresight. Our CAs help you structure property sales, business exits, and investments well before the financial year ends.",
    ],
    keyBenefits: [
      { title: "Capital Gains Mitigation", desc: "Save tax on real estate or equity sales through 54F, 54EC bonds, and capital gain accounts." },
      { title: "Entity Optimization", desc: "Select optimal corporate structures (LLP vs Pvt Ltd vs HUF) for minimum aggregate tax." },
      { title: "Estate & Family Trust Setup", desc: "Protect family wealth and ensure smooth inter-generational asset transfer." },
    ],
    documentsRequired: [
      { category: "Financial Profile", items: ["Last 3 years tax returns", "Anticipated asset sales, capital gains, or business income figures"] },
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Review", desc: "Comprehensive audit of current tax liabilities and asset holdings." },
      { step: "02", title: "Tax Model Design", desc: "Present comparative legal strategies to legally reduce effective tax rates." },
      { step: "03", title: "Implementation", desc: "Execute investment, trust, or restructuring transactions." },
    ],
    faqs: [
      { question: "Is tax planning legal?", answer: "Yes, tax planning uses legitimate statutory deductions, exemptions, and reliefs provided by the Income Tax Act." },
    ],
  },

  // ACCOUNTING & COMPLIANCE
  "accounting/bookkeeping": {
    slug: "bookkeeping",
    category: "accounting",
    categoryName: "Accounting & Compliance",
    title: "Professional Bookkeeping & Ledger Maintenance",
    badge: "Cloud Accounting",
    tagline: "Complete daily transaction recording, ledger scrutiny, and bank reconciliation.",
    description: "Outsource your bookkeeping to dedicated accounting professionals using Tally Prime, Zoho Books, QuickBooks, or SAP.",
    rateOrTimeline: "Monthly Retainer",
    maxAmountOrScope: "Full Transaction Audit",
    approvalTime: "Daily / Weekly",
    overview: [
      "Accurate day-to-day bookkeeping ensures that your management has real-time insights into cash balances, outstanding receivables, and vendor debts.",
    ],
    keyBenefits: [
      { title: "Real-Time Financial Health", desc: "Always know your exact cash position, operating expenses, and profit margins." },
      { title: "Audit-Ready Books", desc: "Clean accounts reduce year-end statutory audit time and expenses by 70%." },
      { title: "No Staff Attrition Hassle", desc: "Avoid hiring, training, and managing in-house accountants." },
    ],
    documentsRequired: [
      { category: "Source Records", items: ["Bank statements, vendor bills, customer invoices, and petty cash logs"] },
    ],
    processSteps: [
      { step: "01", title: "System Setup", desc: "Configure Chart of Accounts in Zoho Books or Tally." },
      { step: "02", title: "Transaction Entry", desc: "Weekly entry of sales, expenses, and banking transactions." },
      { step: "03", title: "Reconciliation", desc: "Match bank, debtor, and creditor balances." },
    ],
    faqs: [
      { question: "Can you work with our existing accounting software?", answer: "Yes, we work seamlessly with Tally, Zoho Books, QuickBooks, and Excel." },
    ],
  },

  "accounting/monthly-accounting": {
    slug: "monthly-accounting",
    category: "accounting",
    categoryName: "Accounting & Compliance",
    title: "Monthly Accounting & Virtual CFO Services",
    badge: "Virtual CFO",
    tagline: "High-level financial controllership, MIS dashboards, and budgeting for growing enterprises.",
    description: "Get the strategic expertise of an experienced Chief Financial Officer (CFO) at a fraction of the cost of a full-time hire.",
    rateOrTimeline: "Monthly",
    maxAmountOrScope: "Executive Advisory",
    approvalTime: "Dedicated Team",
    overview: [
      "Scale your enterprise with strategic budgeting, cash flow forecasting, unit economics analysis, and investor-grade reporting.",
    ],
    keyBenefits: [
      { title: "Executive MIS Dashboards", desc: "Monthly Profit & Loss, Balance Sheet, and KPI reports delivered to founders." },
      { title: "Cash Flow Runway Management", desc: "Forecast working capital requirements 3 to 6 months in advance." },
      { title: "Investor & Board Reporting", desc: "Professional presentations for angel investors, venture capitalists, and banks." },
    ],
    documentsRequired: [
      { category: "Operating Data", items: ["Monthly billing figures, payroll sheets, and strategic business goals"] },
    ],
    processSteps: [
      { step: "01", title: "Financial Assessment", desc: "Deep dive into your business model and cost centers." },
      { step: "02", title: "KPI Benchmarks", desc: "Establish monthly reporting frameworks and budgets." },
      { step: "03", title: "Monthly Review", desc: "Strategy session with senior finance consultant." },
    ],
    faqs: [
      { question: "What is Virtual CFO?", answer: "An outsourced senior finance executive managing your accounting team, budgets, and banking relationships." },
    ],
  },

  "compliance/roc-compliance": {
    slug: "roc-compliance",
    category: "compliance",
    categoryName: "Accounting & Compliance",
    title: "ROC Annual Compliance & MCA Filings",
    badge: "Company Governance",
    tagline: "Mandatory AOC-4, MGT-7, and DIR-3 KYC filings for Private Limited & LLP companies.",
    description: "Protect directors from disqualification and avoid heavy MCA late penalties of ₹100 per day with our annual corporate secretarial maintenance package.",
    rateOrTimeline: "Annual Due Dates",
    maxAmountOrScope: "AOC-4, MGT-7, DIR-3",
    approvalTime: "MCA Certified",
    overview: [
      "Every registered company in India must file its annual financial statements and annual return with the Registrar of Companies (ROC) every financial year.",
    ],
    keyBenefits: [
      { title: "Prevent Director Disqualification", desc: "Keep Director DINs active by filing annual DIR-3 KYC on time." },
      { title: "Zero Late Fees", desc: "Save ₹100/day per form penalty by filing AOC-4 and MGT-7 within statutory timelines." },
      { title: "Drafting of Board Minutes & AGM", desc: "Full secretarial support including AGM notices, Director's Report, and board minutes." },
    ],
    documentsRequired: [
      { category: "Corporate Records", items: ["Audited Financial Statements with Auditor's Report", "List of Shareholders and Directors as on March 31st"] },
    ],
    processSteps: [
      { step: "01", title: "Secretarial Audit", desc: "Verify shareholding, directorship, and statutory registers." },
      { step: "02", title: "Drafting Reports", desc: "Prepare Director's Report, MGT-9, and AGM documentation." },
      { step: "03", title: "MCA E-Filing", desc: "Upload AOC-4 and MGT-7 forms with digital signatures on MCA V3 portal." },
    ],
    faqs: [
      { question: "What happens if ROC filing is missed?", answer: "Late fees of ₹100 per day apply, and directors risk disqualification for 5 years under Section 164." },
    ],
  },

  "compliance/esi-pf": {
    slug: "esi-pf",
    category: "compliance",
    categoryName: "Accounting & Compliance",
    title: "EPFO & ESIC Registration and Monthly Filings",
    badge: "Labor Welfare",
    tagline: "Provident Fund and Employee State Insurance compliance for 10+ / 20+ employee establishments.",
    description: "Complete employee onboarding, UAN generation, monthly ECR challan generation, and annual labor compliance management.",
    rateOrTimeline: "Monthly",
    maxAmountOrScope: "Statutory Payroll",
    approvalTime: "Instant UAN",
    overview: [
      "EPF registration is mandatory for firms with 20+ employees, and ESI for 10+ employees. We handle end-to-end statutory wage compliance.",
    ],
    keyBenefits: [
      { title: "Employee Social Security", desc: "Provide health benefits, retirement funds, and insurance to your staff." },
      { title: "Labor Department Protection", desc: "Prevent labor inspections, wage complaints, and penal damages." },
      { title: "Automated ECR Filing", desc: "Monthly salary wage sheets converted into verified EPFO/ESIC bank challans." },
    ],
    documentsRequired: [
      { category: "Payroll Data", items: ["Monthly salary sheet with basic pay and DA", "Employee Aadhaar, PAN, and Bank details"] },
    ],
    processSteps: [
      { step: "01", title: "Wage Calculation", desc: "Compute 12% EPF and 3.25% ESI employer/employee contributions." },
      { step: "02", title: "ECR Upload", desc: "Upload Electronic Challan cum Return on EPFO portal by 15th." },
      { step: "03", title: "Payment Receipt", desc: "Generate TRRN challan for bank payment." },
    ],
    faqs: [
      { question: "What is the wage ceiling for ESI?", answer: "Employees earning gross salary up to ₹21,000 per month are covered under ESI." },
    ],
  },

  "compliance/professional-tax": {
    slug: "professional-tax",
    category: "compliance",
    categoryName: "Accounting & Compliance",
    title: "Professional Tax (PT) Registration & Filings",
    badge: "State Statutory",
    tagline: "Commercial Tax department enrollment (PT-EC) and monthly salary deductions (PT-RC) in Telangana.",
    description: "State government tax compliance for self-employed professionals, traders, and employers deducting salary taxes.",
    rateOrTimeline: "Monthly / Annual",
    maxAmountOrScope: "Telangana & AP",
    approvalTime: "Online Allotment",
    overview: [
      "Employers in Telangana and Andhra Pradesh must obtain PT-RC to deduct and remit professional tax from employee salaries.",
    ],
    keyBenefits: [
      { title: "Statutory Certificate", desc: "Mandatory for municipal license renewals and commercial banking operations." },
      { title: "Timely Remittance", desc: "Avoid interest and penalty from State Commercial Taxes Department." },
    ],
    documentsRequired: [
      { category: "Entity Proof", items: ["Business registration proof", "Employee count and salary slabs"] },
    ],
    processSteps: [
      { step: "01", title: "Online Enrollment", desc: "File Form I on the State Commercial Tax portal." },
      { step: "02", title: "Monthly Challan", desc: "Remit deducted PT amounts by the 10th of every month." },
    ],
    faqs: [
      { question: "What is the maximum Professional Tax in Telangana?", answer: "Maximum ₹2,500 per year per employee as per state tax slabs." },
    ],
  },

  // LICENSES
  "licenses/shop-establishment": {
    slug: "shop-establishment",
    category: "licenses",
    categoryName: "Licenses & Municipal Approvals",
    title: "Shop & Establishment Registration",
    badge: "Labor Department",
    tagline: "Mandatory labor certificate for all retail shops, commercial offices, and commercial establishments.",
    description: "Issued by the State Department of Labor, governing working hours, employee holidays, and commercial operating rights.",
    rateOrTimeline: "3 - 5 Days",
    maxAmountOrScope: "State Labor Act",
    approvalTime: "Digital Certificate",
    overview: [
      "Every commercial establishment must register within 30 days of opening under the Telangana Shops and Establishments Act.",
    ],
    keyBenefits: [
      { title: "Bank Current Account Proof", desc: "Universally accepted primary business entity proof for private banks." },
      { title: "Legal Operational Right", desc: "Protects business against labor department notices and commercial inspections." },
    ],
    documentsRequired: [
      { category: "Applicant & Store", items: ["PAN & Aadhaar of owner", "Shop photo with Telugu & English name board", "Rental agreement"] },
    ],
    processSteps: [
      { step: "01", title: "Application Filing", desc: "Submit details of employees, working hours, and weekly holidays." },
      { step: "02", title: "Fee Remittance", desc: "Pay government fees based on employee count." },
      { step: "03", title: "Certificate Download", desc: "Download Form C registration certificate." },
    ],
    faqs: [
      { question: "Do software companies need Shop & Establishment?", answer: "Yes, IT and ITES companies must register under the Shops and Establishments Act." },
    ],
  },

  "licenses/msme-registration": {
    slug: "msme-registration",
    category: "licenses",
    categoryName: "Licenses & Municipal Approvals",
    title: "MSME Udyam Registration Certificate",
    badge: "Govt of India",
    tagline: "Free government certification unlocking collateral-free loans, 50% patent discounts, and tender subsidies.",
    description: "Official registration on the Ministry of Micro, Small and Medium Enterprises portal linked with Aadhaar and PAN.",
    rateOrTimeline: "1 - 2 Days",
    maxAmountOrScope: "Udyam Allotment",
    approvalTime: "Instant Online",
    overview: [
      "Udyam registration gives your enterprise legal standing as a Micro, Small, or Medium business in India.",
    ],
    keyBenefits: [
      { title: "Collateral-Free Bank Credit", desc: "Access priority sector bank lending and CGTMSE guarantee cover." },
      { title: "Delayed Payment Protection", desc: "Statutory protection under MSME Samadhaan for delayed payments from corporate buyers." },
      { title: "Subsidies on ISO & Barcodes", desc: "Claim government reimbursement on intellectual property and quality certifications." },
    ],
    documentsRequired: [
      { category: "Basic", items: ["Aadhaar linked with mobile number", "PAN Card of entity / proprietor"] },
    ],
    processSteps: [
      { step: "01", title: "NIC Classification", desc: "Identify accurate National Industrial Classification (NIC) codes." },
      { step: "02", title: "OTP Verification", desc: "Instant Aadhaar OTP validation on Udyam portal." },
      { step: "03", title: "Certificate Generation", desc: "Receive official QR-coded Udyam Certificate." },
    ],
    faqs: [
      { question: "Is there any renewal fee for Udyam?", answer: "No, Udyam registration has lifetime validity and does not require periodic renewal." },
    ],
  },

  "licenses/udyam-registration": {
    slug: "udyam-registration",
    category: "licenses",
    categoryName: "Licenses & Municipal Approvals",
    title: "Udyam Certificate Modification & Update",
    badge: "Govt Portal",
    tagline: "Add manufacturing plants, new service lines, or update investment figures on your Udyam portal.",
    description: "Maintain accurate enterprise classification and prevent loss of MSME benefits during bank credit appraisals.",
    rateOrTimeline: "24 Hours",
    maxAmountOrScope: "Full Update",
    approvalTime: "Instant",
    overview: [
      "Updating your Udyam certificate when you add branches or exceed investment brackets is legally required under Ministry guidelines.",
    ],
    keyBenefits: [
      { title: "Add New Plants / Units", desc: "Include additional factory or warehouse addresses on a single certificate." },
      { title: "Reclassify Enterprise", desc: "Smooth transition between Micro, Small, and Medium categories." },
    ],
    documentsRequired: [
      { category: "Update Proofs", items: ["Existing Udyam Number", "Aadhaar OTP", "New address or investment data"] },
    ],
    processSteps: [
      { step: "01", title: "Portal Login", desc: "Login via OTP authentication." },
      { step: "02", title: "Edit Particulars", desc: "Add new NIC activities or business premises." },
      { step: "03", title: "Print Revised Cert", desc: "Instant updated certificate." },
    ],
    faqs: [
      { question: "Can I have two Udyam numbers for one PAN?", answer: "No, only one Udyam registration is permitted per PAN. All activities must be added under one certificate." },
    ],
  },

  "licenses/import-export-code": {
    slug: "import-export-code",
    category: "licenses",
    categoryName: "Licenses & Municipal Approvals",
    title: "Import Export Code (IEC) Registration",
    badge: "DGFT Directorate",
    tagline: "10-digit PAN-based IEC issued by DGFT for international export and import of goods and services.",
    description: "Mandatory requirement for international trade, customs clearances, and receiving foreign remittances in India.",
    rateOrTimeline: "1 - 2 Days",
    maxAmountOrScope: "DGFT Approval",
    approvalTime: "Online Allotment",
    overview: [
      "Directorate General of Foreign Trade (DGFT) issues the Import Export Code, which serves as your passport to international trade.",
    ],
    keyBenefits: [
      { title: "Lifetime Validity", desc: "No renewal required, only simple annual online validation." },
      { title: "Customs & Port Clearances", desc: "Required by customs authorities for all incoming and outgoing sea/air consignments." },
      { title: "Export Subsidies (RoDTEP)", desc: "Claim government export incentive benefits directly into your bank account." },
    ],
    documentsRequired: [
      { category: "KYC & Banking", items: ["Entity PAN & Promoter Aadhaar", "Bank certificate or cancelled cheque", "Business address proof"] },
    ],
    processSteps: [
      { step: "01", title: "DGFT Registration", desc: "Register on the Directorate General of Foreign Trade portal." },
      { step: "02", title: "ANF 2A Filing", desc: "Submit digital application with DSC / Aadhaar OTP." },
      { step: "03", title: "IEC Certificate", desc: "Download PAN-based 10-digit IEC certificate." },
    ],
    faqs: [
      { question: "Is IEC mandatory for software exports?", answer: "IEC is not mandatory for software services unless availing export promotion incentives, but highly recommended." },
    ],
  },

  // FINANCIAL SERVICES
  "financial-services/financial-planning": {
    slug: "financial-planning",
    category: "financial-services",
    categoryName: "Strategic Financial Advisory",
    title: "Corporate & Personal Financial Planning",
    badge: "Wealth Structuring",
    tagline: "Holistic asset allocation, risk mitigation, and retirement capital architecture.",
    description: "Personalized financial blueprints designed to secure long-term family wealth and optimize return on enterprise capital.",
    rateOrTimeline: "Comprehensive Review",
    maxAmountOrScope: "Tailored Portfolio",
    approvalTime: "Advisory Call",
    overview: [
      "We combine tax efficiency, capital protection, and growth assets to construct resilient financial portfolios.",
    ],
    keyBenefits: [
      { title: "Risk-Adjusted Growth", desc: "Scientific asset allocation across debt, equity, gold, and commercial real estate." },
      { title: "Emergency & Contingency Funds", desc: "Safeguard operations against unexpected business shocks or personal emergencies." },
    ],
    documentsRequired: [
      { category: "Financial Snapshot", items: ["Current asset holdings, income streams, insurance policies, and liabilities"] },
    ],
    processSteps: [
      { step: "01", title: "Goal Discovery", desc: "Map your timelines, risk appetite, and capital targets." },
      { step: "02", title: "Financial Model", desc: "Develop tailored allocation model." },
      { step: "03", title: "Execution & Monitoring", desc: "Quarterly reviews and portfolio rebalancing." },
    ],
    faqs: [
      { question: "What is the fee structure?", answer: "We offer transparent fee-based advisory with zero hidden product commissions." },
    ],
  },

  "financial-services/investment-planning": {
    slug: "investment-planning",
    category: "financial-services",
    categoryName: "Strategic Financial Advisory",
    title: "Commercial Real Estate & Investment Planning",
    badge: "High Yield Assets",
    tagline: "Pre-leased commercial real estate, grade-A office spaces, and high-yield debt instruments.",
    description: "Maximize passive cash flows with vetted pre-leased commercial properties delivering 8% to 10% rental yields in Hyderabad's prime growth corridors.",
    rateOrTimeline: "8% - 10% Rental Yield",
    maxAmountOrScope: "Pre-Leased Commercial",
    approvalTime: "Vetted Titles",
    overview: [
      "Vaishnavi Associates specializes in commercial real estate advisory across Hyderabad's Financial District, HITEC City, Kokapet, and Gachibowli.",
    ],
    keyBenefits: [
      { title: "Immediate Rental Inflow", desc: "Properties already leased to blue-chip corporate tenants with long lock-in periods." },
      { title: "Capital Appreciation", desc: "Strategic investments in high-growth infrastructure corridors." },
      { title: "Clear Legal Titles", desc: "Every property vetted by our senior real estate legal panel." },
    ],
    documentsRequired: [
      { category: "Investor Profile", items: ["Investment quantum, timeline, and preferred asset category"] },
    ],
    processSteps: [
      { step: "01", title: "Asset Shortlisting", desc: "Present curated commercial options matching your yield targets." },
      { step: "02", title: "Due Diligence", desc: "Verify lease agreements, tenant covenant, and title deeds." },
      { step: "03", title: "Acquisition", desc: "Assistance with registration and rental transfer." },
    ],
    faqs: [
      { question: "What is pre-leased property?", answer: "A property that is already rented out, so you earn rental income from day one of registration." },
    ],
  },

  "financial-services/cash-flow-management": {
    slug: "cash-flow-management",
    category: "financial-services",
    categoryName: "Strategic Financial Advisory",
    title: "Cash Flow & Working Capital Optimization",
    badge: "Liquidity Management",
    tagline: "Accelerate debtor collections, optimize inventory holding, and avoid cash crunches.",
    description: "Transform your operating cash cycle with disciplined receivables management and supplier payment structuring.",
    rateOrTimeline: "Cash Flow Audit",
    maxAmountOrScope: "Working Capital Health",
    approvalTime: "Rapid Diagnostic",
    overview: [
      "Many profitable businesses fail due to cash flow timing mismatches. We identify leakages and establish robust collection cycles.",
    ],
    keyBenefits: [
      { title: "Shorten DSO (Days Sales Outstanding)", desc: "Recover stuck receivables and establish automated billing reminders." },
      { title: "Avoid Costly Emergency Borrowing", desc: "Maintain optimal buffer reserves to fund ongoing payroll and rent." },
    ],
    documentsRequired: [
      { category: "Aging Schedules", items: ["Debtor and creditor aging reports for the last 6 months"] },
    ],
    processSteps: [
      { step: "01", title: "Cash Cycle Audit", desc: "Map your order-to-cash process." },
      { step: "02", title: "Bottleneck Elimination", desc: "Implement stricter credit terms and early payment discounts." },
    ],
    faqs: [
      { question: "How fast can cash flow improve?", answer: "Most businesses see significant liquidity improvements within 30 to 60 days of implementing our receivables framework." },
    ],
  },

  "financial-services/business-financial-advisory": {
    slug: "business-financial-advisory",
    category: "financial-services",
    categoryName: "Strategic Financial Advisory",
    title: "Business Financial Advisory & Valuation",
    badge: "Corporate Valuation",
    tagline: "Certified business valuation (DCF, Net Asset, Multiples) and M&A structuring.",
    description: "Professional business valuations for fundraising, shareholder buyouts, joint ventures, and statutory FEMA/Companies Act filings.",
    rateOrTimeline: "CA / IBBI Certified",
    maxAmountOrScope: "Fair Value Report",
    approvalTime: "5 - 7 Days",
    overview: [
      "Our Registered Valuers and Chartered Accountants provide defensible business valuation reports complying with international valuation standards (IVS).",
    ],
    keyBenefits: [
      { title: "Statutory Compliance", desc: "Compliant with Section 247 of Companies Act and RBI FEMA guidelines." },
      { title: "Fundraising Pitch Ready", desc: "Defend your startup valuation before angel syndicates and venture funds." },
    ],
    documentsRequired: [
      { category: "Company Financials", items: ["Historical 3-year financials and 5-year business projections"] },
    ],
    processSteps: [
      { step: "01", title: "Financial Modeling", desc: "Build dynamic Discounted Cash Flow (DCF) model." },
      { step: "02", title: "Valuation Report", desc: "Issue signed IBBI Registered Valuer Certificate." },
    ],
    faqs: [
      { question: "Which valuation methods are used?", answer: "Discounted Cash Flow (DCF), Comparable Company Multiples (CCM), and Net Asset Value (NAV)." },
    ],
  },

  // IT SERVICES
  "it-services/software-development": {
    slug: "software-development",
    category: "it-services",
    categoryName: "Digital & IT Solutions",
    title: "Custom Enterprise Software Development",
    badge: "Full-Stack Solutions",
    tagline: "Scalable SaaS platforms, ERP systems, and internal CRM business tools.",
    description: "Build robust, scalable software tailored precisely to your company's proprietary operational workflows and customer journeys.",
    rateOrTimeline: "Sprint-Based",
    maxAmountOrScope: "Custom Architecture",
    approvalTime: "Agile Delivery",
    overview: [
      "Off-the-shelf software often forces you to compromise your processes. We engineer bespoke business systems built for your exact operational scale.",
    ],
    keyBenefits: [
      { title: "Modern Microservices", desc: "Architected on Node.js, Next.js, Python, PostgreSQL, and cloud infrastructure." },
      { title: "High Security & Encryption", desc: "Enterprise-grade data encryption, role-based access, and automated backups." },
    ],
    documentsRequired: [
      { category: "Scope Document", items: ["Software requirements specification (SRS) or feature wishlist"] },
    ],
    processSteps: [
      { step: "01", title: "System Architecture", desc: "Database schema design and API contract modeling." },
      { step: "02", title: "Agile Development", desc: "Bi-weekly sprint demos with continuous deployment." },
      { step: "03", title: "QA & Deployment", desc: "Rigorous load testing, security audits, and cloud launch." },
    ],
    faqs: [
      { question: "Who owns the source code?", answer: "You retain 100% intellectual property (IP) and source code ownership upon project completion." },
    ],
  },

  "it-services/digital-marketing": {
    slug: "digital-marketing",
    category: "it-services",
    categoryName: "Digital & IT Solutions",
    title: "Performance Digital Marketing & Lead Generation",
    badge: "High ROI Campaigns",
    tagline: "Hyper-targeted Google Ads, Meta Campaigns, and LinkedIn B2B lead generation engines.",
    description: "Generate consistent, high-ticket customer inquiries for your loan, real estate, professional services, or corporate brand.",
    rateOrTimeline: "Monthly Campaigns",
    maxAmountOrScope: "Performance Marketing",
    approvalTime: "Live in 48 Hours",
    overview: [
      "We don't focus on vanity metrics like clicks or impressions. We optimize campaigns for qualified leads, verified phone inquiries, and closed transactions.",
    ],
    keyBenefits: [
      { title: "Google Search Dominance", desc: "Capture high-intent prospects searching for your exact services." },
      { title: "Lead Filtering & Verification", desc: "CRM integration with automated WhatsApp and SMS lead notifications." },
    ],
    documentsRequired: [
      { category: "Campaign Brief", items: ["Target geography, customer profile, and monthly marketing budget"] },
    ],
    processSteps: [
      { step: "01", title: "Audience Profiling", desc: "Identify high-converting customer segments and keywords." },
      { step: "02", title: "Creative & Copywriting", desc: "Design compelling ad creatives and high-converting landing pages." },
      { step: "03", title: "Launch & Optimize", desc: "Daily A/B testing of bids, keywords, and conversion funnels." },
    ],
    faqs: [
      { question: "What is the typical cost per lead?", answer: "Cost per qualified lead varies by industry, but our high-converting funnels typically cut acquisition costs by 30%." },
    ],
  },

  "it-services/seo": {
    slug: "seo",
    category: "it-services",
    categoryName: "Digital & IT Solutions",
    title: "Search Engine Optimization (SEO) & Local Dominance",
    badge: "Rank #1 on Google",
    tagline: "Dominate Google organic search results in Hyderabad and national competitive keywords.",
    description: "Comprehensive technical SEO, on-page optimization, Google Business Profile local dominance, and authoritative backlink acquisition.",
    rateOrTimeline: "3 - 6 Months",
    maxAmountOrScope: "Organic Rankings",
    approvalTime: "Long-Term Traffic",
    overview: [
      "SEO provides compounding, zero-ad-cost traffic for your business. We engineer your website structure so search engines prioritize your pages.",
    ],
    keyBenefits: [
      { title: "Zero Ad Spend Traffic", desc: "Receive organic customer inquiries around the clock without paying per click." },
      { title: "Google Maps Local 3-Pack", desc: "Rank at the top of local Hyderabad searches for high-intent customer keywords." },
    ],
    documentsRequired: [
      { category: "Website Access", items: ["Search Console, Analytics access, and CMS credentials"] },
    ],
    processSteps: [
      { step: "01", title: "Technical Audit", desc: "Fix crawl errors, site speed, and structured data schemas." },
      { step: "02", title: "Keyword Architecture", desc: "Target high-intent transactional search queries." },
      { step: "03", title: "Authority Building", desc: "Acquire relevant contextual backlinks and publish pillar content." },
    ],
    faqs: [
      { question: "How long does SEO take to show results?", answer: "Typically 3 to 6 months for noticeable organic ranking and inbound lead increases." },
    ],
  },

  "it-services/cloud-services": {
    slug: "cloud-services",
    category: "it-services",
    categoryName: "Digital & IT Solutions",
    title: "Cloud Infrastructure & DevOps Solutions",
    badge: "AWS / Azure / GCP",
    tagline: "Scalable cloud architecture, CI/CD automated deployment pipelines, and cost optimization.",
    description: "Migrate legacy workloads to resilient cloud environments, automate server scaling, and reduce monthly AWS/GCP bills.",
    rateOrTimeline: "Migration & DevOps",
    maxAmountOrScope: "99.99% Uptime",
    approvalTime: "Continuous CI/CD",
    overview: [
      "Ensure your applications run 24/7 with zero downtime. We configure auto-scaling serverless architectures on AWS, Google Cloud, and Azure.",
    ],
    keyBenefits: [
      { title: "99.99% Availability", desc: "Multi-zone redundant infrastructure designed to withstand hardware failures." },
      { title: "Cloud Cost Reduction", desc: "Right-sizing instances and implementing reserved capacity to cut bills by up to 40%." },
    ],
    documentsRequired: [
      { category: "Infrastructure Details", items: ["Current hosting setup, traffic metrics, and software dependencies"] },
    ],
    processSteps: [
      { step: "01", title: "Architecture Audit", desc: "Evaluate security, performance bottlenecks, and resource consumption." },
      { step: "02", title: "Cloud Migration", desc: "Zero-downtime migration to containerized cloud environments." },
    ],
    faqs: [
      { question: "Which cloud providers do you support?", answer: "Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, and Vercel." },
    ],
  },

  "it-services/cybersecurity": {
    slug: "cybersecurity",
    category: "it-services",
    categoryName: "Digital & IT Solutions",
    title: "Enterprise Cybersecurity & VAPT Audits",
    badge: "Threat Protection",
    tagline: "Vulnerability Assessment and Penetration Testing (VAPT) for corporate data security.",
    description: "Protect sensitive corporate financial data, customer records, and web platforms from ransomware, data breaches, and unauthorized access.",
    rateOrTimeline: "Security Audit",
    maxAmountOrScope: "ISO 27001 / CERT-In",
    approvalTime: "Audit Certificate",
    overview: [
      "With cyber attacks rising exponentially, securing your financial and operational infrastructure is a critical fiduciary duty.",
    ],
    keyBenefits: [
      { title: "Identify Hidden Vulnerabilities", desc: "Comprehensive penetration testing simulating real-world hacker attacks." },
      { title: "Compliance & Banking Ready", desc: "Obtain clean VAPT certificates required by partner banks and payment gateways." },
    ],
    documentsRequired: [
      { category: "Target Scope", items: ["Web application URLs, API endpoints, and server IP ranges"] },
    ],
    processSteps: [
      { step: "01", title: "Automated & Manual Scan", desc: "Run deep vulnerability scans using industry standard tools." },
      { step: "02", title: "Remediation Guidance", desc: "Provide clear code and server fixes for every identified risk." },
      { step: "03", title: "Re-Audit & Certification", desc: "Verify fixes and issue formal Security Audit Clearance Certificate." },
    ],
    faqs: [
      { question: "Is VAPT required for payment gateway integration?", answer: "Yes, RBI and leading payment gateways require security clearance for processing customer payments." },
    ],
  },
};

// Helper function to fetch all services
export function getAllServices(): IServiceItem[] {
  return Object.values(servicesCatalog);
}

// Helper function to fetch services by category
export function getServicesByCategory(category: string): IServiceItem[] {
  return Object.values(servicesCatalog).filter((s) => s.category === category);
}

// Helper to get single service
export function getServiceByPath(category: string, serviceSlug: string): IServiceItem | undefined {
  const key = `${category}/${serviceSlug}`;
  return servicesCatalog[key];
}
