"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Top Bar for contact info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>60 Nguyễn Thông, Phường Nhiêu Lộc, TP. Hồ Chí Minh</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="mailto:info@mucinbaobi.com">info@mucinbaobi.com</a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-slate-400">T2 - T6: 8:00 - 17:00</span>
            <a
              href="tel:0947676021"
              className="flex items-center gap-1 text-sky-400 font-semibold hover:text-sky-300 transition"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>Hotline: 094 76 76 021</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="Logo Vượng Phát Ink"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-sky-600 transition">
              VƯỢNG PHÁT <span className="text-sky-600">INK</span>
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase text-slate-500">
              Mực In Bao Bì & Dung Môi Cao Cấp
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-700">
          <Link href="/" className="hover:text-sky-600 transition">
            Trang chủ
          </Link>
          <Link href="/gioi-thieu" className="hover:text-sky-600 transition">
            Giới thiệu
          </Link>

          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductDropdown(true)}
            onMouseLeave={() => setProductDropdown(false)}
          >
            <Link
              href="/san-pham"
              className="flex items-center gap-1 hover:text-sky-600 transition py-2"
            >
              <span>Sản phẩm</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </Link>

            {productDropdown && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                <Link
                  href="/san-pham#muc-in-ong-dong"
                  className="block px-4 py-2.5 text-sm hover:bg-sky-50 hover:text-sky-700 transition"
                >
                  <div className="font-semibold text-slate-800">Mực in ống đồng</div>
                  <div className="text-xs text-slate-500">Màng PE, PP, PVC màng co, PET</div>
                </Link>
                <Link
                  href="/san-pham#solvent-dye"
                  className="block px-4 py-2.5 text-sm hover:bg-sky-50 hover:text-sky-700 transition"
                >
                  <div className="font-semibold text-slate-800">Mực in Solvent Dye</div>
                  <div className="text-xs text-slate-500">Sơn phủ chai lọ mỹ phẩm & gỗ</div>
                </Link>
                <Link
                  href="/san-pham#may-bom-muc"
                  className="block px-4 py-2.5 text-sm hover:bg-sky-50 hover:text-sky-700 transition"
                >
                  <div className="font-semibold text-slate-800">Máy bơm chiết rót mực</div>
                  <div className="text-xs text-slate-500">Bơm màng khí nén từ phuy</div>
                </Link>
                <Link
                  href="/san-pham#dung-moi"
                  className="block px-4 py-2.5 text-sm hover:bg-sky-50 hover:text-sky-700 transition border-t border-slate-50"
                >
                  <div className="font-semibold text-slate-800">Dung môi phụ trợ</div>
                  <div className="text-xs text-slate-500">Pha mực & tẩy rửa trục in</div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-sky-600 transition">
            Tin tức & Kỹ thuật
          </Link>
          <Link href="/lien-he" className="hover:text-sky-600 transition">
            Liên hệ
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://zalo.me/0947676021"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-sm font-semibold rounded-lg border border-sky-600 text-sky-700 hover:bg-sky-50 transition"
          >
            Chat Zalo
          </a>
          <Link
            href="/lien-he"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-sky-600 text-white shadow-sm hover:bg-sky-700 hover:shadow-md transition active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Báo giá ngay</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-3 -mr-2 text-slate-800 hover:text-sky-600 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[116px] bottom-0 bg-white z-50 p-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col space-y-4 font-semibold text-slate-800 text-lg">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-slate-100 hover:text-sky-600 active:text-sky-700 transition"
            >
              Trang chủ
            </Link>
            <Link
              href="/gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-slate-100 hover:text-sky-600 active:text-sky-700 transition"
            >
              Giới thiệu
            </Link>
            <Link
              href="/san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-slate-100 hover:text-sky-600 active:text-sky-700 transition"
            >
              Sản phẩm
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 border-b border-slate-100 hover:text-sky-600 active:text-sky-700 transition"
            >
              Tin tức & Kỹ thuật
            </Link>
            <Link
              href="/lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 hover:text-sky-600 active:text-sky-700 transition"
            >
              Liên hệ
            </Link>
          </nav>

          <div className="pt-6 pb-8 flex flex-col gap-3">
            <a
              href="tel:0947676021"
              className="w-full text-center py-4 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition text-base shadow-md"
            >
              <Phone className="w-5 h-5 text-sky-400" />
              <span>Gọi Hotline: 094 76 76 021</span>
            </a>
            <Link
              href="/lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 rounded-xl bg-sky-600 text-white font-bold active:scale-95 transition text-base shadow-md shadow-sky-600/30"
            >
              Gửi yêu cầu báo giá
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
