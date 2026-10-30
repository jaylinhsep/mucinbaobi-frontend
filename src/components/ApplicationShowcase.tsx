"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Package,
  FileText,
  Pipette,
  FlaskConical,
  ArrowRight,
  PhoneCall,
  Flame,
  Award,
} from "lucide-react";

interface Slide {
  id: number;
  category: string;
  tagColor: string;
  title: string;
  substrate: string;
  description: string;
  image: string;
  highlights: string[];
}

const SLIDES: Slide[] = [
  {
    id: 1,
    category: "Bao bì nhựa thực phẩm",
    tagColor: "bg-sky-500/20 text-sky-300 border-sky-400/30",
    title: "Bao Bì Nhựa Thực Phẩm Màng Ghép Đa Lớp",
    substrate: "Màng BOPP, LLDPE, CPP, PET, Màng nhôm MPET",
    description:
      "Dòng mực in ống đồng chuyên dụng cho bao bì bánh kẹo, mì gói, snack ăn liền, hạt điều và túi hút chân không thủy hải sản. Đạt độ bóng cao, kháng dầu mỡ, không mùi, đạt tiêu chuẩn khắt khe cho xuất khẩu thực phẩm.",
    image: "/rotogravure-press.png",
    highlights: [
      "Kháng lạnh -20°C & Kháng nhiệt retort 121°C",
      "Đạt chuẩn Non-Toluene an toàn thực phẩm",
      "Tốc độ in cao đạt 200 - 300m/phút",
    ],
  },
  {
    id: 2,
    category: "Màng co nhiệt nhãn chai",
    tagColor: "bg-pink-500/20 text-pink-300 border-pink-400/30",
    title: "Màng Co Nhiệt PVC, PET-G Nhãn Chai Nước & Mỹ Phẩm",
    substrate: "Màng PVC Shrink Film, PET-G, OPS",
    description:
      "Ứng dụng làm nhãn co ôm sát thân chai nước giải khát, nước ngọt có ga, bình nước khoáng, lốc chai và chai lọ hóa mỹ phẩm. Độ đàn hồi cao, co ôm khít 360 độ mà không làm vỡ hạt mực hay bong tróc.",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2024/11/muc-in-ong-dong-non-toluene-1.webp",
    highlights: [
      "Tỷ lệ co rút nhiệt lên đến 65% - 70%",
      "Mực không lem, không bay màu qua buồng hơi sấy",
      "Độ bám dính băng dính 3M >98%",
    ],
  },
  {
    id: 3,
    category: "Bao bì giấy & Kraft",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    title: "Bao Bì Giấy Kraft, Túi Cà Phê & Hộp Quà Cao Cấp",
    substrate: "Giấy Kraft nâu/trắng, Couche, Duplex, Giấy mỹ thuật ghép màng",
    description:
      "Giải pháp mực in ống đồng cho bao bì túi cà phê giấy kraft mộc, túi đựng trà thảo mộc, bao bì nông sản và túi mua sắm thời trang. Thấm hút mực vừa phải, thể hiện màu sắc tự nhiên, mộc mạc và sắc nét từng chi tiết.",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink3.webp",
    highlights: [
      "Gốc dung môi bay hơi nhanh, không cong vênh giấy",
      "Nét chữ nhỏ và họa tiết mảnh siêu sắc nét",
      "Phù hợp xu hướng bao bì xanh, thân thiện môi trường",
    ],
  },
  {
    id: 4,
    category: "Bao bì dược phẩm & Vỉ nhôm",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    title: "Bao Bì Màng Nhôm Dược Phẩm & Y Tế (PTP Foil)",
    substrate: "Màng nhôm lá mỏng (Alu foil), Màng nhựa phức hợp y tế",
    description:
      "Mực in ống đồng chịu nhiệt chuyên in vỉ thuốc viên nén, màng nhôm ép nhiệt PTP, bao bì bông gạc và thiết bị y tế. Kháng ẩm tuyệt đối, cản khí, chịu nhiệt độ cao khi ép hàn nhiệt đóng gói tự động.",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink4.webp",
    highlights: [
      "Chịu nhiệt hàn ép vỉ thuốc tới 180°C",
      "Đạt kiểm định kim loại nặng & an toàn sinh học",
      "Bám dính tuyệt hảo trên bề mặt lá nhôm trơn bóng",
    ],
  },
  {
    id: 5,
    category: "Tinh màu Solvent Dye mỹ phẩm",
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    title: "Tinh Màu Solvent Dye Phủ Chai Lọ Mỹ Phẩm & Thủy Tinh",
    substrate: "Chai lọ thủy tinh cao cấp, Nhựa PET/PS, Vecni đồ gỗ",
    description:
      "Sơn phủ tạo màu trong suốt cho chai lọ nước hoa, hũ mỹ phẩm dưỡng da, nắp son cao cấp và phủ bóng đồ gỗ thủ công mỹ nghệ. Tạo màu sắc lấp lánh như pha lê với độ bóng gương sang trọng.",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink2.webp",
    highlights: [
      "Độ trong suốt quang học và khúc xạ ánh sáng tuyệt hảo",
      "Kháng tia cực tím UV, kháng cồn và dung môi",
      "Bề mặt bóng gương mịn màng, chống trầy xước",
    ],
  },
];

const APPLICATION_ITEMS = [
  {
    id: "thuc-pham",
    category: "nhua",
    title: "Túi Màng Ghép Thực Phẩm & Bánh Kẹo",
    material: "OPP / CPP, PET / PE, MPET",
    desc: "In ống đồng trên màng ngoài (Reverse Printing) rồi ghép màng lót thực phẩm. Lớp mực nằm ở giữa hai lớp màng giúp giữ trọn hương vị, chống thẩm thấu oxy và không bao giờ tiếp xúc với thực phẩm.",
    features: ["Độ bền kéo dãn cao", "Không mùi dung môi", "Màu in rực rỡ, bắt mắt"],
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink5.webp",
    inkType: "Mực PU đa năng / Mực ghép đùn",
  },
  {
    id: "mang-co",
    category: "mang-co",
    title: "Nhãn Co Thân Chai Nước Giải Khát",
    material: "PVC Màng Co, PET-G, OPS",
    desc: "Mực in ngược trên mặt trong của màng co nhiệt, sau đó ống màng được dẫn qua buồng sấy nhiệt để ôm khít thân chai có biên dạng phức tạp mà không bong rộp hay nhăn rách.",
    features: ["Tỷ lệ co rút 60% - 70%", "Chịu buồng hơi nước 100°C", "Chống xước khi vận chuyển lốc"],
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2024/11/muc-in-ong-dong-non-toluene-1.webp",
    inkType: "Mực màng PVC co nhiệt chuyên dụng",
  },
  {
    id: "bao-bi-giay",
    category: "giay",
    title: "Bao Bì Giấy Kraft & Túi Giấy Mỹ Thuật",
    material: "Giấy Kraft 70-120gsm, Couche, Duplex",
    desc: "Mực in ống đồng thấm sâu vừa đủ vào sợi cellulose của giấy kraft, tạo bề mặt in mịn màng, tôn vinh nét đẹp thủ công mộc mạc và phong cách bao bì sinh thái hiện đại.",
    features: ["Không làm nhăn phồng giấy", "Màu đen sâu thẳm, mực màu tươi", "Khô tức thì trên dàn sấy"],
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink3.webp",
    inkType: "Mực in ống đồng cho giấy & Kraft",
  },
  {
    id: "nong-nghiep",
    category: "nhua",
    title: "Bao Bì Nông Nghiệp & Thức Ăn Chăn Nuôi",
    material: "BOPP ghép màng dệt PP (Woven Bag)",
    desc: "Bao gạo xuất khẩu, bao phân bón và thức ăn thủy hải sản đòi hỏi mực in có độ dẻo cao, chịu được va đập cơ học nặng, chống cọ xát khi bốc dỡ và chịu được ánh nắng gắt ngoài trời.",
    features: ["Chống trầy xước cực tốt", "Bền màu dưới tia nắng UV", "Bám dính tuyệt đối màng BOPP"],
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2024/08/may-in-truc-ong-dong-chong-mau.webp",
    inkType: "Mực in lót trắng OPW & Mực bề mặt",
  },
  {
    id: "duoc-pham",
    category: "duoc-pham",
    title: "Vỉ Thuốc Ép Nhôm & Kháng Khuẩn Y Tế",
    material: "Nhôm lá PTP Alu Foil, Màng phức hợp",
    desc: "In thông tin nhãn thuốc, liều dùng và hạn sử dụng trực tiếp trên mặt lá nhôm. Đòi hỏi độ sắc nét tuyệt đối của các ký tự nhỏ, không bong tróc khi chịu nhiệt ép máy hàn vỉ.",
    features: ["Chịu nhiệt hàn ép 180°C", "Không thôi nhiễm độc tố", "Sắc nét từng dòng chữ nhỏ"],
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink4.webp",
    inkType: "Mực Non-Toluene Y Tế",
  },
  {
    id: "my-pham",
    category: "my-pham",
    title: "Tinh Màu Solvent Dye Phủ Chai Thủy Tinh",
    material: "Chai thủy tinh, nắp nhôm, hũ mỹ phẩm",
    desc: "Pha trộn trực tiếp với vecni bóng hoặc sơn sấy công nghiệp để phủ màu cho chai lọ mỹ phẩm trong suốt với ánh màu hổ phách, xanh ngọc bích, tím thạch anh sang trọng.",
    features: ["Trong suốt quang học tuyệt hảo", "Bền màu với ánh sáng mặt trời", "Bề mặt căng bóng không tì vết"],
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink2.webp",
    inkType: "Tinh màu Solvent Dye hòa tan cao",
  },
];

export default function ApplicationShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const touchStartX = useRef<number | null>(null);

  // Auto-play Carousel every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Touch Swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  // Filtered Items
  const filteredItems =
    selectedCategory === "all"
      ? APPLICATION_ITEMS
      : APPLICATION_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16">
      {/* 1. INTERACTIVE HERO SLIDER */}
      <div
        className="relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-800"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Slide Container */}
        <div className="relative min-h-[480px] sm:min-h-[520px] flex items-center">
          {SLIDES.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center ${
                  isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover object-center scale-105 transition-transform duration-1000"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 max-w-4xl px-6 sm:px-14 py-12 space-y-6">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-md uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{slide.category}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white max-w-3xl">
                    {slide.title}
                  </h2>

                  {/* Material Substrate Badge */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-sky-300 font-medium bg-sky-950/60 border border-sky-800/50 px-3.5 py-2 rounded-xl backdrop-blur-sm max-w-fit">
                    <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Chất liệu: {slide.substrate}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 max-w-2xl">
                    {slide.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-lg backdrop-blur-sm"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href="/lien-he"
                      className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition active:scale-95 shadow-lg shadow-sky-500/20"
                    >
                      <span>Nhận mẫu thử màng này</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="tel:0947676021"
                      className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm flex items-center gap-2 transition"
                    >
                      <PhoneCall className="w-4 h-4 text-sky-400" />
                      <span>094 76 76 021</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/70 hover:bg-sky-600 text-white flex items-center justify-center border border-white/10 backdrop-blur-md transition-all active:scale-90"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/70 hover:bg-sky-600 text-white flex items-center justify-center border border-white/10 backdrop-blur-md transition-all active:scale-90"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-950/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeSlide ? "w-8 h-2.5 bg-sky-400" : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. CATEGORY FILTER TABS */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
            <span>Danh Mục Ứng Dụng Chuyên Sâu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Giải Pháp Mực In Ống Đồng Cho Từng Bề Mặt
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Vượng Phát Ink thiết kế công thức hóa học riêng biệt cho từng loại màng nhựa và giấy, tối ưu hóa độ bám dính, độ bóng và tốc độ chạy máy.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "all", label: "Tất cả ứng dụng", icon: Package },
            { id: "nhua", label: "Bao bì nhựa (PE / PP / PET)", icon: Layers },
            { id: "mang-co", label: "Màng co nhãn chai (PVC)", icon: Flame },
            { id: "giay", label: "Bao bì giấy & Kraft", icon: FileText },
            { id: "duoc-pham", label: "Dược phẩm & Lá nhôm", icon: ShieldCheck },
            { id: "my-pham", label: "Tinh màu Solvent Dye", icon: Pipette },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition active:scale-95 ${
                  isSelected
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3. APPLICATION CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 text-sky-400 text-xs font-bold backdrop-blur-md border border-slate-700">
                      {item.inkType}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-slate-300 font-medium">Chất liệu: {item.material}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Link
                  href="/lien-he"
                  className="w-full py-2.5 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-50 text-xs font-bold flex items-center justify-center gap-2 transition"
                >
                  <span>Yêu cầu mẫu test màng này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SUBSTRATE TECHNICAL MATRIX */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-700 text-xs font-bold">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Thông Số Kỹ Thuật Bề Mặt In</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Bảng Khả Năng Tương Thích Của Mực In Ống Đồng Vượng Phát
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Mỗi loại màng nhựa và giấy yêu cầu mức xử lý bề mặt (Corona treatment) và hệ dung môi tương thích để đảm bảo độ bám dính hoàn hảo.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <th className="py-3 px-4">Chất liệu bề mặt</th>
                <th className="py-3 px-4">Lực căng bề mặt (Dyne)</th>
                <th className="py-3 px-4">Dòng mực khuyến nghị</th>
                <th className="py-3 px-4">Dung môi pha mực</th>
                <th className="py-3 px-4">Đặc tính nổi bật</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4 font-semibold text-slate-900">BOPP / OPP</td>
                <td className="py-3.5 px-4">≥ 38 Dynes</td>
                <td className="py-3.5 px-4 text-sky-600 font-medium">Mực in lót & Mực ghép PU</td>
                <td className="py-3.5 px-4">EA / MEK / IPA</td>
                <td className="py-3.5 px-4">Độ bóng cao, kháng dầu mỡ, không mùi</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4 font-semibold text-slate-900">PVC Màng Co</td>
                <td className="py-3.5 px-4">≥ 40 Dynes</td>
                <td className="py-3.5 px-4 text-sky-600 font-medium">Mực in màng PVC co nhiệt</td>
                <td className="py-3.5 px-4">Cyclohexanone / MEK / Tol.</td>
                <td className="py-3.5 px-4">Co 70% không nứt, chịu nhiệt buồng sấy</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4 font-semibold text-slate-900">PET / MPET</td>
                <td className="py-3.5 px-4">≥ 50 Dynes</td>
                <td className="py-3.5 px-4 text-sky-600 font-medium">Mực Non-Toluene cao cấp</td>
                <td className="py-3.5 px-4">Ethyl Acetate / IPA</td>
                <td className="py-3.5 px-4">Kháng lạnh -20°C, kháng nhiệt 121°C</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Giấy Kraft / Couche</td>
                <td className="py-3.5 px-4">Tự nhiên</td>
                <td className="py-3.5 px-4 text-sky-600 font-medium">Mực in ống đồng cho giấy</td>
                <td className="py-3.5 px-4">IPA / Ethyl Alcohol / Nước</td>
                <td className="py-3.5 px-4">Màu sắc mộc, không nhăn sợi giấy</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4 font-semibold text-slate-900">Lá nhôm ép vỉ (Alu)</td>
                <td className="py-3.5 px-4">≥ 54 Dynes</td>
                <td className="py-3.5 px-4 text-sky-600 font-medium">Mực Y tế PTP Foil</td>
                <td className="py-3.5 px-4">Ethanol / Ethyl Acetate</td>
                <td className="py-3.5 px-4">Chịu nhiệt ép hàn 180°C, kháng ẩm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. WORKSHOP SAMPLING PROCESS */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>Dịch Vụ Khách Hàng Tận Tâm</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Quy Trình Cung Cấp Mẫu Thử & Căn Chỉnh Tại Xưởng Của Bạn
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Chúng tôi hiểu rằng mỗi nhà máy in đều có thông số trục anilox, tốc độ dàn sấy và lực căng màng khác nhau. Kỹ sư Vượng Phát Ink sẵn sàng hỗ trợ trực tiếp tại xưởng để đảm bảo mực chạy êm nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
            <span className="text-2xl font-black text-sky-400">01</span>
            <h4 className="font-bold text-white text-base">Nhận Mẫu Màng</h4>
            <p className="text-xs text-slate-400">
              Đo lực căng bề mặt màng (Dyne) và xác định độ phân cực của mẫu màng khách hàng đang in.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
            <span className="text-2xl font-black text-sky-400">02</span>
            <h4 className="font-bold text-white text-base">Phối Màu Vi Tính</h4>
            <p className="text-xs text-slate-400">
              Pha màu chuẩn theo mã Pantone hoặc mẫu in thực tế với sai số quang học delta E &lt; 1.0.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
            <span className="text-2xl font-black text-sky-400">03</span>
            <h4 className="font-bold text-white text-base">Cấp Mẫu Thử Miễn Phí</h4>
            <p className="text-xs text-slate-400">
              Giao tận xưởng xô mẫu mực 5kg - 20kg để kỹ thuật viên xưởng chạy thử nghiệm thực tế.
            </p>
          </div>
          <div className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-2xl space-y-2">
            <span className="text-2xl font-black text-sky-400">04</span>
            <h4 className="font-bold text-white text-base">Cân Chỉnh Tốc Độ</h4>
            <p className="text-xs text-slate-400">
              Kỹ sư Vượng Phát Ink túc trực hỗ trợ căn chỉnh tỷ lệ dung môi, độ nhớt Zahn Cup đạt tốc độ tối đa.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h5 className="font-bold text-lg text-white">Bạn đang chuẩn bị lên bài in mới hoặc gặp lỗi dính màng?</h5>
            <p className="text-xs text-slate-400">Hãy gọi ngay hotline kỹ sư trưởng để nhận tư vấn kỹ thuật miễn phí.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://zalo.me/0947676021"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm text-center transition"
            >
              Chat Zalo Kỹ Thuật
            </a>
            <a
              href="tel:0947676021"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm text-center flex items-center justify-center gap-2 transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Gọi 094 76 76 021</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
