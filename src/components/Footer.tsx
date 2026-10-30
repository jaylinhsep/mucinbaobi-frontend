import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-800 text-center sm:text-left">
          <div className="flex items-center gap-4 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Công Nghệ Đài Loan</h4>
              <p className="text-xs text-slate-400 mt-0.5">Tiêu chuẩn quốc tế, bền màu, màu sắc tươi sáng</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Đạt Chuẩn Châu Âu</h4>
              <p className="text-xs text-slate-400 mt-0.5">Dòng mực Non-Toluene thân thiện, an toàn xuất khẩu</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">Giao Hàng & Hỗ Trợ 24/7</h4>
              <p className="text-xs text-slate-400 mt-0.5">Cung ứng nhanh chóng, tư vấn kỹ thuật trực tiếp tại xưởng</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About company */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 shrink-0 bg-white/10 p-1 rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Logo Vượng Phát Ink"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                VƯỢNG PHÁT <span className="text-sky-400">INK</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Công ty TNHH Vượng Phát Ink – Nhà sản xuất và phân phối dung môi, mực in ống đồng, tinh màu Solvent Dye hàng đầu Việt Nam cho ngành bao bì nhựa và sơn phủ mỹ phẩm cao cấp.
            </p>
            <div className="pt-2">
              <a
                href="https://zalo.me/0947676021"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition"
              >
                Nhắn tin qua Zalo
              </a>
            </div>
          </div>

          {/* Col 2: Danh mục sản phẩm */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-sky-500">
              Sản Phẩm Cung Cấp
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/ung-dung" className="hover:text-sky-300 transition font-semibold text-sky-400">
                  ✦ Ứng dụng mực in ống đồng & bao bì
                </Link>
              </li>
              <li>
                <Link href="/san-pham/muc-in-ong-dong-vuong-phat" className="hover:text-sky-400 transition font-medium">
                  Mực in ống đồng Vượng Phát
                </Link>
              </li>
              <li>
                <Link href="/san-pham/muc-in-chai-lo-my-pham" className="hover:text-purple-400 transition font-medium">
                  Mực in chai lọ mỹ phẩm (Solvent Dye)
                </Link>
              </li>
              <li>
                <Link href="/san-pham#muc-in-ong-dong" className="hover:text-sky-400 transition">
                  Mực in màng PE, PP, PET, OPP
                </Link>
              </li>
              <li>
                <Link href="/san-pham#solvent-dye" className="hover:text-sky-400 transition">
                  Tinh màu Solvent Dye chai lọ mỹ phẩm
                </Link>
              </li>
              <li>
                <Link href="/san-pham#may-bom-muc" className="hover:text-sky-400 transition">
                  Máy bơm chiết rót mực từ phuy
                </Link>
              </li>
              <li>
                <Link href="/san-pham#dung-moi" className="hover:text-sky-400 transition">
                  Dung môi pha mực & tẩy rửa trục in
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hỗ trợ & Bài viết */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-sky-500">
              Kỹ Thuật In Ấn
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/muc-in-ong-dong-non-toluene-la-gi" className="hover:text-sky-400 transition">
                  Mực in Non-Toluene là gì & Báo giá
                </Link>
              </li>
              <li>
                <Link href="/mang-pvc-co-ung-dung-uu-diem-va-quy-trinh-san-xuat" className="hover:text-sky-400 transition">
                  Màng PVC Co: Ứng dụng & Quy trình
                </Link>
              </li>
              <li>
                <Link href="/xu-ly-corona-mang-bao-bi-nhua-trong-nganh-in-an" className="hover:text-sky-400 transition">
                  Xử lý Corona màng bao bì nhựa
                </Link>
              </li>
              <li>
                <Link href="/dung-moi-pha-muc-in-lua-va-1-so-luu-y" className="hover:text-sky-400 transition">
                  Dung môi pha mực in và lưu ý
                </Link>
              </li>
              <li>
                <Link href="/cac-linh-kien-tren-may-in-truc-ong-dong" className="hover:text-sky-400 transition">
                  Linh kiện trên máy in trục ống đồng
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Liên hệ */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-sky-500">
              Thông Tin Liên Hệ
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>60 Nguyễn Thông, Phường Nhiêu Lộc, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:0947676021" className="text-white font-semibold hover:text-sky-400 transition">
                  +84 094 76 76 021
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@mucinbaobi.com" className="hover:text-sky-400 transition">
                  info@mucinbaobi.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Thứ 2 - Thứ 6: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Vượng Phát Ink (mucinbaobi.com). Toàn bộ quyền được bảo lưu.</p>
          <div className="flex items-center gap-6">
            <Link href="/gioi-thieu" className="hover:text-slate-400">Về chúng tôi</Link>
            <Link href="/san-pham" className="hover:text-slate-400">Sản phẩm</Link>
            <Link href="/lien-he" className="hover:text-slate-400">Liên hệ báo giá</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
