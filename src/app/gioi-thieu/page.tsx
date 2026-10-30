import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, Factory, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới thiệu Công ty TNHH Vượng Phát Ink",
  description:
    "Nhà sản xuất dung môi, mực in bao bì hàng đầu Việt Nam. Vượng Phát Ink chuyên cung cấp giải pháp mực in ống đồng, dung môi và tinh màu theo công nghệ Đài Loan.",
};

export default function GioiThieuPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
            <span>Về Chúng Tôi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Vượng Phát Ink Co.ltd
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Nhà sản xuất dung môi, mực in bao bì nhựa hàng đầu Việt Nam
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-8">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-base sm:text-lg">
            <p>
              <strong>Vượng Phát Ink</strong> chuyên cung cấp giải pháp hoàn hảo cho ngành bao bì nhựa tổng hợp, nhựa thiên nhiên, nhựa nguyên liệu sản xuất, mực in và chất kết dính cao cấp.
            </p>
            <p>
              Các dòng mực in ống đồng trong ngành nhựa <strong>PP, PE, PVC màng co, PET, OPP</strong> cùng các dòng mực cao cấp đạt tiêu chuẩn khắt khe để xuất hàng đi thị trường Châu Âu, Mỹ và Nhật Bản.
            </p>
            <p>
              Không chỉ có ngành in ấn bao bì, chúng tôi còn sản xuất và cung ứng các loại <strong>tinh màu Solvent Dye</strong> dạng lỏng chuyên phục vụ sơn phủ chai lọ mỹ phẩm, vecni đồ gỗ mỹ nghệ cao cấp với đặc tính màu sắc rực rỡ và độ bền quang học vượt trội.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100">
              <Award className="w-8 h-8 text-sky-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-lg mb-2">Công Nghệ Tiên Tiến</h3>
              <p className="text-sm text-slate-600">
                Toàn bộ dây chuyền sản xuất và công thức mực được chuyển giao từ các chuyên gia Đài Loan hàng đầu trong ngành.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-lg mb-2">Chất Lượng Xuất Khẩu</h3>
              <p className="text-sm text-slate-600">
                Mực in Non-Toluene kiểm soát nghiêm ngặt hàm lượng kim loại nặng và VOC, an toàn cho bao bì đóng gói thực phẩm.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100">
              <Factory className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-lg mb-2">Cung Ứng Linh Hoạt</h3>
              <p className="text-sm text-slate-600">
                Kho bãi luôn sẵn hàng, nhận pha màu theo yêu cầu pantone chuẩn xác và giao hàng nhanh chóng tận xưởng.
              </p>
            </div>
          </div>

          {/* Core Values checklist */}
          <div className="space-y-4 pt-4">
            <h3 className="font-bold text-xl text-slate-900">Cam Kết Của Vượng Phát Ink</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Giá thành cạnh tranh trực tiếp từ nhà máy</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Hỗ trợ kỹ thuật căn chỉnh máy in tại xưởng</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Độ bền màu cao, hạn chế hao mực</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Cung cấp mẫu thử và tài liệu kiểm định chất lượng</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-500 uppercase font-semibold">Tư vấn kỹ thuật & Nhận mẫu thử</p>
              <p className="text-lg font-bold text-slate-900">Hotline: 094 76 76 021 (Mr. Vương)</p>
            </div>
            <Link
              href="/lien-he"
              className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm flex items-center gap-2 transition"
            >
              <span>Liên hệ ngay</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
