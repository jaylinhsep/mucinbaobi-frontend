import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Liên Hệ Báo Giá Mực In & Dung Môi | Vượng Phát Ink",
  description:
    "Liên hệ Công ty TNHH Vượng Phát Ink: 60 Nguyễn Thông, Phường Nhiêu Lộc, TP. Hồ Chí Minh. Hotline / Zalo: 094 76 76 021. Email: info@mucinbaobi.com.",
};

export default function LienHePage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
            <span>Hỗ Trợ 24/7</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Liên Hệ Vượng Phát Ink
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Quý khách cần tư vấn kỹ thuật in ấn, nhận bảng báo giá sỉ hoặc yêu cầu gửi mẫu thử nghiệm tại xưởng, vui lòng kết nối với chúng tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-8">
              <h2 className="text-2xl font-bold text-slate-900 pb-4 border-b border-slate-100">
                Thông Tin Trực Tiếp
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Địa chỉ văn phòng / Nhà xưởng</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      60 Nguyễn Thông, Phường Nhiêu Lộc, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Hotline / Zalo tư vấn</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      <a href="tel:0947676021" className="font-bold text-sky-600 hover:underline">
                        +84 094 76 76 021
                      </a>{" "}
                      (Hỗ trợ 24/7)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Email nhận báo giá</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      <a href="mailto:info@mucinbaobi.com" className="text-slate-700 hover:text-sky-600">
                        info@mucinbaobi.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Thời gian làm việc</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Thứ 2 - Thứ 6: 08:00 - 17:00 (Ngoài giờ xin nhắn qua Zalo)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Bảo mật thông tin</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sky-500" />
                  <span>Mẫu thử chính hãng</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-tr from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
              <h2 className="text-2xl font-bold mb-2">Gửi Yêu Cầu Báo Giá Nhanh</h2>
              <p className="text-sm text-slate-400 mb-6">
                Vui lòng để lại thông tin nhu cầu của bạn, chúng tôi sẽ liên hệ lại ngay trong vòng 15 phút.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
