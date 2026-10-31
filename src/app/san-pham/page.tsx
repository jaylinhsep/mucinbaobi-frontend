import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/wp";
import { CheckCircle2, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Danh Mục Sản Phẩm Mực In & Dung Môi | Vượng Phát Ink",
  description:
    "Tổng hợp các sản phẩm mực in ống đồng màng PE, PP, PVC co, PET, mực Non-Toluene, tinh màu Solvent Dye chai lọ mỹ phẩm, máy bơm chiết rót mực từ phuy.",
};

export default function SanPhamPage() {
  const categories = [
    { id: "all", label: "Tất cả sản phẩm" },
    { id: "muc-in-ong-dong", label: "Mực in ống đồng" },
    { id: "solvent-dye", label: "Mực in Solvent Dye" },
    { id: "may-bom-muc", label: "Máy bơm mực" },
    { id: "dung-moi", label: "Dung môi phụ trợ" },
  ];

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Sản Phẩm Chính Hãng</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Danh Mục Sản Phẩm
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Dung môi, mực in ống đồng, bột màu và thiết bị ngành in ấn bao bì hiện đại dựa trên công nghệ tiên tiến Đài Loan.
          </p>
        </div>

        {/* Quick Category Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((c) => (
            <a
              key={c.id}
              href={c.id === "all" ? "#" : `#${c.id}`}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium text-xs sm:text-sm hover:border-sky-500 hover:text-sky-600 shadow-sm transition"
            >
              {c.label}
            </a>
          ))}
        </div>

        {/* Highlight Banner to /ung-dung */}
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 rounded-2xl p-4 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-sky-800/40">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">Xem Thư Viện Ứng Dụng Mực In Bao Bì Thực Tế</h3>
              <p className="text-xs text-slate-300">Hình ảnh bao bì thực phẩm, bánh kẹo, màng co lốc chai, túi nhôm in bằng mực Vượng Phát.</p>
            </div>
          </div>
          <Link
            href="/ung-dung"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs whitespace-nowrap text-center transition"
          >
            Khám Phá Ngay &rarr;
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => {
            const detailHref = prod.targetUrl || `/san-pham/${prod.slug}`;
            const buttonText = prod.buttonLabel || "Xem Chi Tiết";
            const isArticle = !detailHref.startsWith("/san-pham/");

            return (
              <div
                key={prod.id}
                id={prod.category}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-28"
              >
                <div>
                  <Link href={detailHref} className="block relative h-64 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {prod.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-600 text-white text-xs font-semibold shadow-md">
                        {prod.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/90 bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {prod.categoryName}
                    </span>
                  </Link>

                  <div className="p-6">
                    <Link href={detailHref} className="block group/title">
                      <h2 className="text-xl font-bold text-slate-900 group-hover/title:text-sky-600 transition mb-3">
                        {prod.name}
                      </h2>
                    </Link>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {prod.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                        Ưu điểm nổi bật:
                      </span>
                      {prod.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                      <div>
                        <strong className="text-slate-700">Ứng dụng: </strong>
                        <span className="text-slate-600">{prod.applications}</span>
                      </div>
                      <div>
                        <strong className="text-slate-700">Quy cách: </strong>
                        <span className="text-slate-600">{prod.packaging}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center gap-2">
                  <Link
                    href={detailHref}
                    className={`flex-1 py-3 rounded-xl font-semibold text-center text-xs transition shadow-sm ${
                      isArticle
                        ? "bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white border border-sky-200/80"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {buttonText}
                  </Link>
                  <a
                    href={`https://zalo.me/0947676021?text=${encodeURIComponent(`Tôi muốn nhận báo giá sản phẩm: ${prod.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-xs transition border border-slate-200"
                  >
                    Báo giá
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Bạn cần sản xuất tinh màu hoặc công thức riêng theo yêu cầu?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Vượng Phát Ink có phòng R&D chuyên nghiên cứu, cải tiến những loại tinh màu hiếm gặp và pha chế màu mực theo đúng pantone chuẩn của quý khách.
          </p>
          <div className="pt-2">
            <a
              href="tel:0947676021"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg transition"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi tư vấn trực tiếp: 094 76 76 021</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
