import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Pipette,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  FlaskConical,
  Sun,
  Droplets,
  Layers,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mực In Chai Lọ Mỹ Phẩm (Solvent Dye) | Vượng Phát Ink",
  description:
    "Chuyên sản xuất tinh màu Solvent Dye và mực in chai lọ mỹ phẩm cao cấp. Giải pháp sơn phủ tạo màu trong suốt cho chai lọ thủy tinh, nắp nhôm, hũ mỹ phẩm nhựa PET, acrylic và vecni đồ gỗ mỹ nghệ. Màu sắc lấp lánh như pha lê, kháng tia cực tím UV và cồn.",
  keywords: [
    "mực in chai lọ mỹ phẩm",
    "mực in solvent dye",
    "tinh màu solvent dye",
    "sơn phủ chai lọ thủy tinh",
    "mực in bao bì mỹ phẩm",
    "tinh màu pha vecni gỗ",
    "Vượng Phát Ink",
  ],
  alternates: {
    canonical: "https://mucinbaobi.com/san-pham/muc-in-chai-lo-my-pham",
  },
  openGraph: {
    title: "Mực In Chai Lọ Mỹ Phẩm (Solvent Dye) | Vượng Phát Ink",
    description:
      "Tinh màu Solvent Dye tạo màu trong suốt cho chai lọ thủy tinh, mỹ phẩm và đồ gỗ cao cấp. Màu sắc lộng lẫy, độ bóng gương, bền vững dưới ánh sáng mặt trời.",
    url: "https://mucinbaobi.com/san-pham/muc-in-chai-lo-my-pham",
    type: "website",
  },
};

export default function MucInChaiLoMyPhamPage() {
  const images = [
    {
      src: "https://admin.mucinbaobi.com/wp-content/uploads/2023/09/lo_my_pham_1-1024x768.webp",
      alt: "Chai lọ mỹ phẩm sơn phủ Solvent Dye Vượng Phát Ink",
    },
    {
      src: "https://admin.mucinbaobi.com/wp-content/uploads/2023/09/lo_my_pham_2-768x1024.webp",
      alt: "Lọ mỹ phẩm màu hổ phách và xanh ngọc trong suốt",
    },
    {
      src: "https://admin.mucinbaobi.com/wp-content/uploads/2023/09/lo_my_pham_3-1024x768.webp",
      alt: "Chai thủy tinh phủ màu lộng lẫy chuẩn xuất khẩu",
    },
    {
      src: "https://admin.mucinbaobi.com/wp-content/uploads/2023/09/lo_my_pham_4-1024x768.webp",
      alt: "Hũ kem dưỡng và chai serum phủ màu Solvent Dye",
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
          <span className="text-slate-800 font-semibold">Mực in chai lọ mỹ phẩm (Solvent Dye)</span>
        </nav>

        {/* HERO SECTION: Product Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-purple-600 text-white text-xs font-bold shadow-md">
                    Dòng Cao Cấp
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                  <Pipette className="w-3.5 h-3.5 text-purple-600" />
                  <span>Tinh Màu Solvent Dye Quang Học</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Mực In Chai Lọ Mỹ Phẩm (Solvent Dye)
                </h1>
                <p className="text-base text-slate-600 leading-relaxed">
                  <strong>Vượng Phát Ink</strong> sản xuất và phân phối các dòng <strong>tinh màu Solvent Dye</strong> dạng lỏng chuyên phục vụ sơn phủ tạo màu cho chai lọ thủy tinh, bao bì mỹ phẩm cao cấp, nắp hũ kem dưỡng, nắp son và vecni phủ đồ gỗ nghệ thuật.
                </p>
              </div>

              {/* Key Features Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block font-semibold">Trong suốt như pha lê</strong>
                    <span className="text-slate-500">Khúc xạ ánh sáng lộng lẫy, bề mặt bóng gương</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <Sun className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block font-semibold">Bền màu ánh sáng cực cao</strong>
                    <span className="text-slate-500">Đạt cấp 7-8 theo thang đo Blue Wool</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <Droplets className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block font-semibold">Kháng cồn & dung môi</strong>
                    <span className="text-slate-500">Không lem màu khi tiếp xúc nước hoa, toner</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block font-semibold">Dễ hòa tan hoàn toàn</strong>
                    <span className="text-slate-500">Tương thích sơn sấy, PU, Acrylic, Alkyd</span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="tel:0947676021"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95 shadow-md"
                >
                  <PhoneCall className="w-4 h-4 text-purple-400" />
                  <span>Gọi Hotline: 094 76 76 021</span>
                </a>
                <a
                  href={`https://zalo.me/0947676021?text=${encodeURIComponent(
                    "Xin chào Vượng Phát Ink, tôi cần tư vấn và nhận mẫu thử Tinh màu Solvent Dye phủ chai lọ mỹ phẩm."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition active:scale-95 shadow-md shadow-purple-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Nhận mẫu màu thử nghiệm</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Technical Specs Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-bold">
              <FlaskConical className="w-3.5 h-3.5 text-purple-600" />
              <span>Bảng Thông Số Kỹ Thuật Tinh Màu Solvent Dye</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Chỉ Số Kỹ Thuật & Khả Năng Kháng Hóa Chất
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <th className="py-3 px-4">Đặc tính kỹ thuật</th>
                  <th className="py-3 px-4">Chỉ số đo lường</th>
                  <th className="py-3 px-4">Điều kiện thử nghiệm</th>
                  <th className="py-3 px-4">Ứng dụng khuyên dùng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Trạng thái vật lý</td>
                  <td className="py-3.5 px-4 text-purple-600 font-bold">Dạng lỏng hoặc bột siêu mịn</td>
                  <td className="py-3.5 px-4">Nhiệt độ phòng 25°C</td>
                  <td className="py-3.5 px-4">Dễ dàng khuấy tan đều trong dung môi hữu cơ</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Độ bền nhiệt (Heat Resistance)</td>
                  <td className="py-3.5 px-4 text-purple-600 font-bold">180°C - 220°C</td>
                  <td className="py-3.5 px-4">Buồng sấy nhiệt 30 phút</td>
                  <td className="py-3.5 px-4">Không biến tính màu khi qua lò sấy chai lọ thủy tinh</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Độ bền ánh sáng (Light Fastness)</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">Cấp 7 - 8 / 8</td>
                  <td className="py-3.5 px-4">Xenon Arc Lamp (ISO 105-B02)</td>
                  <td className="py-3.5 px-4">Trưng bày tủ kính và ánh sáng ngoài trời không phai</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Kháng cồn & Nước hoa</td>
                  <td className="py-3.5 px-4 text-emerald-600 font-bold">Cấp 5 (Tuyệt hảo)</td>
                  <td className="py-3.5 px-4">Ngâm Ethanol 96° trong 24 giờ</td>
                  <td className="py-3.5 px-4">Chai nước hoa cao cấp, hũ mỹ phẩm cồn</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Tỷ lệ sử dụng khuyến nghị</td>
                  <td className="py-3.5 px-4">2% - 8% theo trọng lượng</td>
                  <td className="py-3.5 px-4">Pha trực tiếp vào nhựa nền/vecni</td>
                  <td className="py-3.5 px-4">Tùy chỉnh sắc độ từ nhạt thanh lịch đến đậm đà</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 3: Detailed Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Pipette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Sơn Phủ Chai Lọ Thủy Tinh & Hóa Mỹ Phẩm
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Các chai nước hoa, chai serum, tinh chất dưỡng da thủy tinh yêu cầu màu sắc có độ trong suốt và khúc xạ ánh sáng lấp lánh. Tinh màu Solvent Dye Vượng Phát tan hoàn toàn không để lại cặn hạt, giúp lớp sơn bám dính chắc chắn trên bề mặt thủy tinh đã qua xử lý silane, không bong tróc khi cọ xát.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Bề mặt bóng loáng, nhẵn mịn không tì vết</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Đa dạng màu sắc: Hổ phách, Xanh cobalt, Tím thạch anh, Hồng ruby</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Pha Màu Vecni Đồ Gỗ & Kim Loại Nghệ Thuật
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Trong ngành nội thất đồ gỗ thủ công mỹ nghệ xuất khẩu, tinh màu Solvent Dye được pha trực tiếp vào lớp sơn bóng PU hoặc NC để tôn vinh vân gỗ tự nhiên mà không làm đục mờ thớ gỗ. Đồng thời áp dụng xuất sắc cho sơn phủ nắp nhôm mạ kim loại cao cấp.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Thấy rõ từng đường vân gỗ quý tự nhiên</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Kháng cồn và chống ố vàng sau nhiều năm sử dụng</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4: Contact & Custom Consultation */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-400/30">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Pha Màu Theo Yêu Cầu Thiết Kế</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Bạn Cần Phối Màu Riêng Biệt Cho Dòng Chai Lọ Của Mình?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Phòng thí nghiệm Vượng Phát Ink nhận phối màu chính xác theo mẫu chai lọ khách hàng gửi tới. Chúng tôi cung cấp mẫu thử dung tích nhỏ để khách hàng sơn sấy mẫu thực tế trước khi lên đơn hàng sản xuất.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-slate-400">Tư vấn kỹ thuật sơn phủ chai lọ mỹ phẩm 24/7</p>
              <p className="text-lg font-bold text-white">Hotline kỹ sư trưởng: 094 76 76 021 (Mr. Vương)</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://zalo.me/0947676021"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition"
              >
                Chat Zalo Nhận Mẫu Màu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
