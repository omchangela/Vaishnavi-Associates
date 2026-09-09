"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export default function ScrollButton() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed z-50 right-5 bottom-6 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-xl transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #0B2545 0%, #061527 100%)",
        border: "1px solid rgba(197, 155, 39, 0.4)",
        color: "#DFB758",
      }}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
