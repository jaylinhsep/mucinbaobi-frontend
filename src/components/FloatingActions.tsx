"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white text-slate-700 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-110 active:scale-95"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Zalo Button */}
      <a
        href="https://zalo.me/0947676021"
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 group relative"
        title="Chat Zalo ngay"
      >
        <span className="font-extrabold text-sm tracking-tighter">Zalo</span>
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat Zalo tư vấn
        </span>
      </a>

      {/* Hotline Call Button with Ripple Effect */}
      <a
        href="tel:0947676021"
        className="w-13 h-13 rounded-full bg-emerald-600 text-white shadow-xl flex items-center justify-center hover:bg-emerald-700 transition-all hover:scale-110 active:scale-95 group relative"
        title="Gọi hotline ngay"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40"></span>
        <Phone className="w-6 h-6 animate-bounce" />
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          094 76 76 021
        </span>
      </a>
    </div>
  );
}
