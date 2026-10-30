import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Zap,
  PhoneCall,
  ArrowRight,
  Layers,
  Sparkles,
  FlaskConical,
  PackageCheck,
  Flame,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mực In Ống Đồng Vượng Phát | Chuyên Màng PE, PP, PVC Co, PET, OPP",
  description:
    "Nhà sản xuất mực in ống đồng Vượng Phát Ink theo công nghệ chuyển giao tiên tiến từ Đài Loan. Mực in ống đồng trên màng PE, PP, PVC màng co, PET, OPP, Non-Toluene đạt chuẩn an toàn thực phẩm xuất khẩu Châu Âu, Mỹ, Nhật Bản.",
  keywords: [
    "mực in ống đồng Vượng Phát",
    "mực in bao bì nhựa",
    "mực in màng PE",
    "mực in màng PP",
    "mực in màng PVC co",
    "mực in màng PET",
    "mực in non-toluene",
    "Vượng Phát Ink",
  ],
  alternates: {
    canonical: "https://mucinbaobi.com/san-pham/muc-in-ong-dong-vuong-phat",
  },
  openGraph: {
    title: "Mực In Ống Đồng Vượng Phát | Vượng Phát Ink",
    description:
      "Chuyên sản xuất mực in ống đồng cao cấp trên màng nhựa PP, PE, PVC co, PET, OPP. Độ bám dính cao, màu sắc tươi sáng, bền màu và tiết kiệm mực.",
    url: "https://mucinbaobi.com/san-pham/muc-in-ong-dong-vuong-phat",
    type: "website",
    images: [
      {
        url: "/muc-in-ong-dong-vuong-phat-chinh.jpg",
        width: 768,
        height: 1024,
        alt: "Thùng can mực in ống đồng Vượng Phát Ink sản xuất thực tế tại xưởng",
      },
    ],
  },
};

export default function MucInOngDongVuongPhatPage() {
  const images = [
    {
      src: "/muc-in-ong-dong-vuong-phat-chinh.jpg",
      alt: "Can mực in ống đồng Vượng Phát Ink đa dạng mã màu sản xuất thực tế tại xưởng",
    },
    {
      src: "https://admin.mucinbaobi.com/wp-content/uploads/2024/07/in-an-bao-bi-thuc-pham-1.webp",
      alt: "Bao bì màng ghép thực phẩm in ống đồng",
    },
    {
      src: "https://admin.mucinbaobi.com/wp-content/uploads/2024/07/muc-in-ong-dong-mang-pvc-mang-co-vuong-phat.webp",
      alt: "Màng PVC co nhiệt in ống đồng Vượng Phát",
    },
    {
      src: "https://admin.mucinbaobi.com/wp-content/uploads/2024/07/in-an-bao-bi-duoc-pham-1.webp",
      alt: "Bao bì dược phẩm và vỉ nhôm in ống đồng",
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-sky-600">Trang chủ</Link>
          <span>/</span>
          <Link href="/san-pham" className="hover:text-sky-600">Sản phẩm</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Mực in ống đồng Vượng Phát</span>
        </nav>

        {/* HERO SECTION: Product Overview Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group flex items-center justify-center">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-sky-600 text-white text-xs font-bold shadow-md">
                    Sản Phẩm Trọng Tâm
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative h-24 rounded-xl overflow-hidden border border-slate-200 shadow-xs group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Công Nghệ Đài Loan • Đạt Chuẩn Xuất Khẩu</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Mực In Ống Đồng Vượng Phát
                </h1>
                <p className="text-base text-slate-600 leading-relaxed">
                  Dựa trên công nghệ tiên tiến hàng đầu Đài Loan, <strong>Vượng Phát Ink</strong> chuyên sản xuất các dòng mực in ống đồng cao cấp trên màng <strong>PE, PP, PVC màng co, PET, OPP</strong> và màng nhôm đa lớp.
                </p>
              </div>

              {/* Key Features Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block font-semibold">Độ bám dính vượt trội</strong>
                    <span className="text-slate-500">Test băng keo 3M &gt;98% không tróc</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block font-semibold">Gam màu tươi & bóng</strong>
                    <span className="text-slate-500">Màu sắc sắc nét, ít hao mực in</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block font-semibold">Non-Toluene An Toàn</strong>
                    <span className="text-slate-500">Không mùi độc hại, an toàn thực phẩm</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block font-semibold">Tốc độ in cao</strong>
                    <span className="text-slate-500">150 - 300 m/phút ổn định</span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="tel:0947676021"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95 shadow-md"
                >
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                  <span>Gọi Hotline: 094 76 76 021</span>
                </a>
                <a
                  href={`https://zalo.me/0947676021?text=${encodeURIComponent(
                    "Xin chào Vượng Phát Ink, tôi cần tư vấn và nhận mẫu thử Mực in ống đồng Vượng Phát."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95 shadow-md shadow-sky-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Nhận mẫu thử miễn phí</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Technical Specifications Matrix */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-bold">
              <FlaskConical className="w-3.5 h-3.5 text-sky-600" />
              <span>Bảng Thông Số Kỹ Thuật Chi Tiết</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Đặc Tính Kỹ Thuật Mực In Ống Đồng Vượng Phát
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <th className="py-3 px-4">Thông số kỹ thuật</th>
                  <th className="py-3 px-4">Chỉ số tiêu chuẩn</th>
                  <th className="py-3 px-4">Phương pháp thử nghiệm</th>
                  <th className="py-3 px-4">Ghi chú ứng dụng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Độ nhớt cung cấp (Viscosity)</td>
                  <td className="py-3.5 px-4 text-sky-600 font-bold">40 - 65 giây</td>
                  <td className="py-3.5 px-4">Cúp Zahn #3 ở 25°C</td>
                  <td className="py-3.5 px-4">Dạng đậm đặc, pha loãng khi lên máy</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Độ nhớt in ấn (Printing Viscosity)</td>
                  <td className="py-3.5 px-4 text-sky-600 font-bold">14 - 18 giây</td>
                  <td className="py-3.5 px-4">Cúp Zahn #3 ở 25°C</td>
                  <td className="py-3.5 px-4">Cân chỉnh theo tốc độ máy (150-300m/phút)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Độ bám dính (Adhesion)</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">&gt; 98%</td>
                  <td className="py-3.5 px-4">Băng keo 3M 600 / Scotch 610</td>
                  <td className="py-3.5 px-4">Màng Corona ≥ 38 dynes/cm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Độ mịn hạt mực (Fineness)</td>
                  <td className="py-3.5 px-4">&lt; 5 micron</td>
                  <td className="py-3.5 px-4">Thước đo độ mịn Hegman</td>
                  <td className="py-3.5 px-4">Không làm mòn trục anilox và dao gạt mực</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Hàm lượng kim loại nặng</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">Không phát hiện (ND)</td>
                  <td className="py-3.5 px-4">ICP-OES / RoHS / EN71-3</td>
                  <td className="py-3.5 px-4">An toàn tuyệt đối cho bao bì thực phẩm</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Quy cách đóng gói</td>
                  <td className="py-3.5 px-4 font-semibold text-sky-700">Can kim loại 17kg - 20kg / Phuy 200kg</td>
                  <td className="py-3.5 px-4">Can thiếc chữ nhật / Phuy sắt</td>
                  <td className="py-3.5 px-4">Đóng pallet nguyên kiện, có tem mã màu niêm phong</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 3: Deep Dive Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Mực In Ghép Màng Thực Phẩm (Laminated Packaging)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mực in ống đồng Vượng Phát có độ kết dính cực tốt với keo ghép màng (Dry Lamination / Solventless Lamination). Khi qua công đoạn ghép đùn hoặc ghép khô màng PE, MPET, lớp mực không bị tách lớp, giữ nguyên độ bền xé rách và chống thẩm thấu oxy, hơi nước hoàn hảo cho bánh kẹo, mì gói, snack.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Không có mùi cặn dung môi (Residual Solvents &lt; 5mg/m²)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Chịu nhiệt độ retort luộc tiệt trùng 121°C</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Mực In Màng PVC Co Nhiệt Nhãn Chai (Shrink Sleeve)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Đặc chế với hàm lượng nhựa polymer có tính co giãn cao. Khi màng PVC hoặc PET-G co rút đến 70% trong buồng sấy nhiệt ôm sát thân chai nước giải khát, mực in Vượng Phát không bị nứt vỡ chân chim, không bạc màu và không bong mép dán dung môi.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Độ co rút nhiệt cao mà không gãy vụn nét in</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Chịu được nhiệt hơi nước sôi 100°C trong buồng co</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4: Dung môi phụ trợ & Thiết bị */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
              <PackageCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Giải Pháp Toàn Diện Cho Xưởng In</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Cung Ứng Dung Môi & Thiết Bị Bơm Mực Đi Kèm
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Bên cạnh các loại mực in ống đồng, Vượng Phát Ink còn cung ứng trọn gói dung môi pha mực, dung môi chậm khô / nhanh khô theo mùa, dung môi tẩy rửa trục in ống đồng và máy bơm chiết rót mực màng khí nén từ phuy.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400">Bạn muốn thử mẫu mực trực tiếp trên máy in tại xưởng?</p>
              <p className="text-lg font-bold text-white">Hotline kỹ sư trưởng: 094 76 76 021 (Mr. Vương)</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://zalo.me/0947676021"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition"
              >
                Chat Zalo Nhận Mẫu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
