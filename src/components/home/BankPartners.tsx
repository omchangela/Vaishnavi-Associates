import React from "react";
import { Building2, ShieldCheck } from "lucide-react";

const banks = [
  { name: "State Bank of India", type: "PSU Bank", minRate: "8.40%" },
  { name: "HDFC Bank", type: "Private Bank", minRate: "8.65%" },
  { name: "ICICI Bank", type: "Private Bank", minRate: "8.75%" },
  { name: "Axis Bank", type: "Private Bank", minRate: "8.80%" },
  { name: "Bank of Baroda", type: "PSU Bank", minRate: "8.50%" },
  { name: "Kotak Mahindra Bank", type: "Private Bank", minRate: "8.70%" },
  { name: "Punjab National Bank", type: "PSU Bank", minRate: "8.45%" },
  { name: "Bajaj Finserv", type: "NBFC", minRate: "9.50%" },
  { name: "Tata Capital", type: "NBFC", minRate: "9.75%" },
];

export default function BankPartners() {
  return (
    <section className="py-14 bg-slate-50/70 border-y border-slate-200/60 overflow-hidden">
      <div className="mainContainer">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-600 mb-1">
              <ShieldCheck className="w-4 h-4" />
              Institutional Network
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-navy-950">
              Partnered with 30+ Leading Financial Institutions
            </h3>
          </div>
          <p className="text-sm text-slate-500 max-w-md text-left md:text-right">
            We compare interest rates and approval terms across all top banks to secure the best loan structure for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {banks.slice(0, 5).map((bank, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-gold-400 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-navy-900/5 text-navy-900 group-hover:bg-gold-500/15 group-hover:text-gold-600 flex items-center justify-center transition-colors">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-navy-950 leading-tight">
                    {bank.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {bank.type}
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[11px]">
                <span className="text-slate-500">Starting Rate</span>
                <span className="font-bold text-gold-600">{bank.minRate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
