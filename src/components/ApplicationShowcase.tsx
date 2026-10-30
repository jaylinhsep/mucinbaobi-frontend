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
  badge: string;
  title: string;
  substrate: string;
  description: string;
  image: string;
  highlights: string[];
  photoTag: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    category: "Bao Bì Nhựa Thực Phẩm",
    badge: "Màng Ghép Đa Lớp",
    title: "Bao Bì Nhựa Thực Phẩm, Bánh Kẹo & Snack Ăn Liền",
    substrate: "Màng BOPP, LLDPE, CPP, PET, MPET",
    description:
      "Dòng mực in ống đồng cao cấp chuyên dụng cho bao bì snack khoai tây, mì gói, bánh kẹo và túi hút chân không thực phẩm đông lạnh. Màu in rực rỡ, độ bóng bề mặt cao, kháng dầu mỡ và tuyệt đối không mùi dung môi, đáp ứng khắt khe tiêu chuẩn xuất khẩu Châu Âu.",
    image: "/applications/food-snack-bag.jpg",
    photoTag: "Màu in rực rỡ • Chuẩn Non-Toluene",
    highlights: [
      "Kháng lạnh -20°C & Kháng nhiệt retort 121°C",
      "Đạt chuẩn Non-Toluene an toàn thực phẩm",
      "Tốc độ in đạt 200 - 300m/phút",
    ],
  },
  {
    id: 2,
    category: "Màng Co Nhãn Chai",
    badge: "Co Nhiệt 360°",
    title: "Màng Co Nhiệt PVC, PET-G Nhãn Chai Nước Giải Khát",
    substrate: "Màng PVC Shrink Film, PET-G, OPS",
    description:
      "Ứng dụng làm nhãn co ôm sát thân chai nước ngọt, trà xanh, nước ép trái cây, bình nước tinh khiết và hóa mỹ phẩm. Độ đàn hồi cao, co ôm khít 360 độ mà không làm nứt vỡ hạt mực, không bong tróc khi qua buồng sấy nhiệt.",
    image: "/applications/beverage-shrink-bottle.jpg",
    photoTag: "Tỷ lệ co 70% • Không phai màu",
    highlights: [
      "Tỷ lệ co rút nhiệt lên đến 65% - 70%",
      "Mực không lem, không bay màu qua buồng hơi sấy",
      "Độ bám dính băng dính 3M >98%",
    ],
  },
  {
    id: 3,
    category: "Bao Bì Giấy Kraft",
    badge: "Bao Bì Xanh Sinh Thái",
    title: "Túi Cà Phê Giấy Kraft & Bao Bì Nông Sản Mộc",
    substrate: "Giấy Kraft 70-120gsm, Couche, Duplex ghép màng",
    description:
      "Giải pháp mực in ống đồng cho bao bì túi cà phê giấy kraft mộc, túi trà thảo mộc, bột mì và ngũ cốc dinh dưỡng. Mực thấm hút vừa vặn vào thớ giấy, tạo độ mộc mạc tinh tế, giữ màu sắc sắc nét mà không làm cong vênh sợi giấy.",
    image: "/applications/coffee-kraft-pouch.jpg",
    photoTag: "Thân thiện môi trường • Nét in siêu mịn",
    highlights: [
      "Gốc dung môi bay hơi nhanh, không cong vênh giấy",
      "Nét chữ nhỏ và họa tiết mảnh siêu sắc nét",
      "Phù hợp xu hướng bao bì xanh, thân thiện môi trường",
    ],
  },
  {
    id: 4,
    category: "Túi Giấy & Hộp Quà",
    badge: "Thương Hiệu Thời Trang",
    title: "Túi Giấy Mua Sắm & Bao Bì Hộp Quà Nghệ Thuật",
    substrate: "Giấy mỹ thuật, Giấy Couche, Ivory",
    description:
      "In ống đồng cho túi giấy thương hiệu thời trang, hộp quà mỹ phẩm, bao bì bánh kẹo cao cấp. Mực phủ mịn màng, độ bóng cao, chống trầy xước và nứt gãy ở mép gấp nếp, khẳng định đẳng cấp thương hiệu.",
    image: "/applications/paper-shopping-bag.jpg",
    photoTag: "Bóng mịn hoàn hảo • Gấp nếp không nứt",
    highlights: [
      "Độ che phủ màu đồng đều, không đốm trắng",
      "Chống lem trầy khi gấp nếp túi hộp",
      "Hạt màu tươi sáng rực rỡ dưới ánh đèn",
    ],
  },
  {
    id: 5,
    category: "Dược Phẩm & Y Tế",
    badge: "Kháng Khuẩn & Kháng Ẩm",
    title: "Vỉ Thuốc Ép Màng Nhôm PTP & Bao Bì Y Tế",
    substrate: "Lá nhôm mỏng Alu Foil, Màng phức hợp y tế",
    description:
      "Mực in ống đồng chịu nhiệt chuyên in thông tin liều dùng và hạn sử dụng trên vỉ thuốc viên nén, màng nhôm ép nhiệt PTP, bao bì bông gạc y tế. Chịu được nhiệt độ cao khi ép hàn niêm phong mà không thôi nhiễm độc tố.",
    image: "/applications/pharma-blister-foil.jpg",
    photoTag: "Chịu nhiệt 180°C • An toàn sinh học",
    highlights: [
      "Chịu nhiệt hàn ép vỉ thuốc tới 180°C",
      "Đạt kiểm định kim loại nặng & an toàn sinh học",
      "Bám dính tuyệt hảo trên bề mặt lá nhôm trơn bóng",
    ],
  },
  {
    id: 6,
    category: "Mỹ Phẩm & Thủy Tinh",
    badge: "Bóng Gương Pha Lê",
    title: "Tinh Màu Solvent Dye Phủ Chai Lọ Mỹ Phẩm Thủy Tinh",
    substrate: "Chai lọ thủy tinh cao cấp, Nhựa PET/PS, Nắp son",
    description:
      "Sơn phủ tạo màu trong suốt cho chai lọ nước hoa, hũ mỹ phẩm dưỡng da, nắp son cao cấp và phủ bóng đồ gỗ thủ công mỹ nghệ. Tạo màu sắc lấp lánh như pha lê với độ bóng gương sang trọng, kháng tia UV bền màu vĩnh cửu.",
    image: "/applications/cosmetic-luxury-bottle.jpg",
    photoTag: "Trong suốt như pha lê • Kháng tia UV",
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
    image: "/applications/food-snack-bag.jpg",
    inkType: "Mực PU đa năng / Mực ghép đùn",
  },
  {
    id: "mang-co",
    category: "mang-co",
    title: "Nhãn Co Thân Chai Nước Giải Khát",
    material: "PVC Màng Co, PET-G, OPS",
    desc: "Mực in ngược trên mặt trong của màng co nhiệt, sau đó ống màng được dẫn qua buồng sấy nhiệt để ôm khít thân chai có biên dạng phức tạp mà không bong rộp hay nhăn rách.",
    features: ["Tỷ lệ co rút 60% - 70%", "Chịu buồng hơi nước 100°C", "Chống xước khi vận chuyển lốc"],
    image: "/applications/beverage-shrink-bottle.jpg",
    inkType: "Mực màng PVC co nhiệt chuyên dụng",
  },
  {
    id: "bao-bi-giay",
    category: "giay",
    title: "Túi Cà Phê Giấy Kraft & Bao Bì Sinh Thái",
    material: "Giấy Kraft 70-120gsm, Couche, Duplex",
    desc: "Mực in ống đồng thấm sâu vừa đủ vào sợi cellulose của giấy kraft, tạo bề mặt in mịn màng, tôn vinh nét đẹp thủ công mộc mạc và phong cách bao bì sinh thái hiện đại.",
    features: ["Không làm nhăn phồng giấy", "Màu đen sâu thẳm, mực màu tươi", "Khô tức thì trên dàn sấy"],
    image: "/applications/coffee-kraft-pouch.jpg",
    inkType: "Mực in ống đồng cho giấy & Kraft",
  },
  {
    id: "tui-giay-nghe-thuat",
    category: "giay",
    title: "Túi Giấy Mua Sắm & Bao Bì Thương Hiệu",
    material: "Giấy Couche, Ivory, Giấy mỹ thuật",
    desc: "In ống đồng cho các dòng túi giấy thời trang, túi quà tặng hội nghị, hộp giấy mỹ phẩm với độ sắc nét từng đường line và hoa văn kim loại nhũ vàng, nhũ bạc.",
    features: ["Phủ mực đều mịn màng", "Gấp nếp không bong tróc", "Chuẩn màu thương hiệu"],
    image: "/applications/paper-shopping-bag.jpg",
    inkType: "Mực in giấy cao cấp",
  },
  {
    id: "duoc-pham",
    category: "duoc-pham",
    title: "Vỉ Thuốc Ép Nhôm & Kháng Khuẩn Y Tế",
    material: "Nhôm lá PTP Alu Foil, Màng phức hợp",
    desc: "In thông tin nhãn thuốc, liều dùng và hạn sử dụng trực tiếp trên mặt lá nhôm. Đòi hỏi độ sắc nét tuyệt đối của các ký tự nhỏ, không bong tróc khi chịu nhiệt ép máy hàn vỉ.",
    features: ["Chịu nhiệt hàn ép 180°C", "Không thôi nhiễm độc tố", "Sắc nét từng dòng chữ nhỏ"],
    image: "/applications/pharma-blister-foil.jpg",
    inkType: "Mực Non-Toluene Y Tế",
  },
  {
    id: "my-pham",
    category: "my-pham",
    title: "Tinh Màu Solvent Dye Phủ Chai Thủy Tinh",
    material: "Chai thủy tinh, nắp nhôm, hũ mỹ phẩm",
    desc: "Pha trộn trực tiếp với vecni bóng hoặc sơn sấy công nghiệp để phủ màu cho chai lọ mỹ phẩm trong suốt với ánh màu hổ phách, xanh ngọc bích, tím thạch anh sang trọng.",
    features: ["Trong suốt quang học tuyệt hảo", "Bền màu với ánh sáng mặt trời", "Bề mặt căng bóng không tì vết"],
    image: "/applications/cosmetic-luxury-bottle.jpg",
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

  const currentSlide = SLIDES[activeSlide];

  // Filtered Items
  const filteredItems =
    selectedCategory === "all"
      ? APPLICATION_ITEMS
      : APPLICATION_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16">
      {/* 1. INTERACTIVE HERO SLIDER - SPLIT VIVID DISPLAY */}
      <div
        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-slate-800"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[460px]">
            {/* Left Column: Typography & Specs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentSlide.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold backdrop-blur-md">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                {currentSlide.title}
              </h2>

              {/* Substrate Material Badge */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-sky-300 font-medium bg-sky-950/70 border border-sky-800/60 px-4 py-2 rounded-xl backdrop-blur-sm">
                <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Chất liệu: <strong>{currentSlide.substrate}</strong></span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentSlide.description}
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {currentSlide.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/lien-he"
                  className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm flex items-center gap-2 transition active:scale-95 shadow-lg shadow-sky-500/25"
                >
                  <span>Nhận mẫu thử chất liệu này</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:0947676021"
                  className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm flex items-center gap-2 transition"
                >
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                  <span>094 76 76 021</span>
                </a>
              </div>
            </div>

            {/* Right Column: Crystal Clear Vivid Packaging Photo Frame */}
            <div className="lg:col-span-5 relative group">
              <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 bg-slate-900 group-hover:border-sky-500/50 transition-colors">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Floating Photo Tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="px-4 py-2 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs text-white font-bold flex items-center justify-between shadow-xl">
                    <span className="truncate">{currentSlide.photoTag}</span>
                    <span className="text-sky-400 text-[11px] font-semibold shrink-0">Vượng Phát Ink</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Bottom Control Bar */}
        <div className="border-t border-slate-800/80 bg-slate-950/80 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(i)}
                className={`transition-all duration-300 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  i === activeSlide
                    ? "w-10 h-3 bg-sky-400 text-transparent"
                    : "w-3 h-3 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Chuyển tới slide ${i + 1}`}
              />
            ))}
            <span className="ml-3 text-xs text-slate-400 font-mono">
              0{activeSlide + 1} / 0{SLIDES.length}
            </span>
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-sky-600 text-white transition active:scale-90 border border-slate-700 hover:border-sky-500"
              aria-label="Slide trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-sky-600 text-white transition active:scale-90 border border-slate-700 hover:border-sky-500"
              aria-label="Slide kế tiếp"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. CATEGORY FILTER TABS */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
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
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/85 text-sky-400 text-xs font-bold backdrop-blur-md border border-slate-700">
                      {item.inkType}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs text-white font-medium">Chất liệu: {item.material}</span>
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
                  className="w-full py-2.5 rounded-xl border border-sky-600 text-sky-600 hover:bg-sky-50 text-xs font-bold flex items-center justify-center gap-2 transition active:scale-95"
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
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm text-center transition"
            >
              Chat Zalo Kỹ Thuật
            </a>
            <a
              href="tel:0947676021"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm text-center flex items-center justify-center gap-2 transition"
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
