import type { Metadata } from "next";
import ApplicationShowcase from "@/components/ApplicationShowcase";
import { Sparkles, Layers, CheckCircle2, ShieldCheck, Palette, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Ứng Dụng Mực In Ống Đồng | Bao Bì Nhựa, Màng Co & Bao Bì Giấy Vượng Phát Ink",
  description:
    "Khám phá các ứng dụng vượt trội của mực in ống đồng Vượng Phát Ink: in bao bì màng ghép thực phẩm (BOPP, PET, CPP, PE), màng co PVC/PET-G nhãn chai nước ngọt, bao bì giấy kraft cao cấp, màng nhôm dược phẩm và tinh màu Solvent Dye phủ chai lọ mỹ phẩm.",
  keywords: [
    "ứng dụng mực in ống đồng",
    "mực in bao bì nhựa",
    "mực in màng ghép thực phẩm",
    "mực in màng co PVC",
    "mực in bao bì giấy kraft",
    "mực in lá nhôm dược phẩm",
    "tinh màu solvent dye mỹ phẩm",
    "Vượng Phát Ink",
  ],
  openGraph: {
    title: "Ứng Dụng Mực In Ống Đồng Đột Phá | Vượng Phát Ink",
    description:
      "Giải pháp toàn diện cho bao bì nhựa, màng co PVC, giấy kraft và mỹ phẩm. Công nghệ chuyển giao từ Đài Loan, chuẩn xuất khẩu Châu Âu.",
    url: "https://mucinbaobi.com/ung-dung",
  },
};

export default function UngDungPage() {
  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold shadow-xs">
            <Palette className="w-4 h-4 text-sky-600" />
            <span>Đa Dạng Bề Mặt In & Khả Năng Tương Thích Hoàn Hảo</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Ứng Dụng Đột Phá Của <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
              Mực In Ống Đồng
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Từ bao bì màng ghép thực phẩm bảo quản khắt khe, màng co nhiệt nhãn chai nước ngọt 360°, đến bao bì giấy kraft sinh thái và tinh màu phủ chai lọ mỹ phẩm sang trọng.
          </p>
        </div>

        {/* Dynamic & Interactive Showcase Component */}
        <ApplicationShowcase />
      </div>
    </div>
  );
}
