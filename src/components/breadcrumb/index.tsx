"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import { IBreadcrumbProps } from "@src/types";

const Breadcrumb = ({ route, name }: IBreadcrumbProps) => {
  const pathname = usePathname();
  const displayName = name ? name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ") : "";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-300">
      <Link
        href="/"
        className="flex items-center gap-1.5 hover:text-gold-400 transition-colors text-slate-300"
      >
        <Home className="w-3.5 h-3.5 text-gold-400" />
        <span>Home</span>
      </Link>

      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

      <Link
        href={route}
        className={`hover:text-gold-400 transition-colors capitalize ${
          pathname === route ? "text-gold-300 font-bold" : "text-slate-300"
        }`}
      >
        {displayName}
      </Link>
    </nav>
  );
};

export default Breadcrumb;