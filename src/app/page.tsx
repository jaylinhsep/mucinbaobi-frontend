import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Layers,
  Factory,
  Cpu,
  BookOpen,
} from "lucide-react";
import { PRODUCTS, getPosts, getPostThumbnail } from "@/lib/wp";
import QuoteForm from "@/components/QuoteForm";

export default async function HomePage() {
  const posts = await getPosts();
  const recentPosts = posts.slice(0, 4);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-20 lg:py-28 border-b border-slate-800">
        {/* Background Industrial Rotogravure Printing Press with atmospheric dark gradient overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/rotogravure-press.png"
            alt="Dàn máy in trục ống đồng công nghiệp Vượng Phát Ink"
            fill
            className="object-cover object-right-bottom md:object-center opacity-85"
            priority
            sizes="100vw"
          />
          {/* Subtle gradient to keep white text clearly legible while showcasing the full industrial machine */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Công nghệ Đài Loan tiên tiến • Chuẩn xuất khẩu Châu Âu</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Nhà Sản Xuất <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">Mực In Ống Đồng</span> & Dung Môi Bao Bì
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Vượng Phát Ink chuyên sản xuất các dòng mực in ống đồng cao cấp trên màng <strong className="text-white">PE, PP, PVC màng co, PET, OPP</strong>, mực <strong className="text-white">Non-Toluene</strong> an toàn thực phẩm, và tinh màu <strong className="text-white">Solvent Dye</strong> cho phủ chai lọ mỹ phẩm sang trọng.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Độ bám dính cao, không nứt màng</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Gam màu sắc tươi, ít hao mực</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tốc độ in cao, khô nhanh ổn định</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cung cấp mẫu thử & test tại xưởng</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/san-pham"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Khám phá sản phẩm</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:0947676021"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold flex items-center justify-center gap-2 backdrop-blur-md transition"
                >
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                  <span>094 76 76 021 (Hotline)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Graphic Card with Glassmorphism */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-900/85 p-6 sm:p-8 border border-sky-500/20 shadow-2xl backdrop-blur-xl hover:border-sky-500/40 transition duration-300">
                <div className="flex items-center justify-between pb-6 border-b border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-base">Vượng Phát Ink Co.ltd</h2>
                      <p className="text-xs text-slate-400">Năng lực sản xuất hàng đầu</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                    Sẵn sàng cung ứng
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                    <div className="text-2xl font-extrabold text-sky-400">100%</div>
                    <div className="text-xs text-slate-300 font-medium mt-1">Công nghệ Đài Loan</div>
                  </div>
                  <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                    <div className="text-2xl font-extrabold text-sky-400">Tiêu Chuẩn</div>
                    <div className="text-xs text-slate-300 font-medium mt-1">Xuất khẩu Châu Âu</div>
                  </div>
                  <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                    <div className="text-2xl font-extrabold text-sky-400">Non-Toluene</div>
                    <div className="text-xs text-slate-300 font-medium mt-1">An toàn thực phẩm</div>
                  </div>
                  <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                    <div className="text-2xl font-extrabold text-sky-400">24/7</div>
                    <div className="text-xs text-slate-300 font-medium mt-1">Tư vấn kỹ thuật</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/60">
                  <Link
                    href="/lien-he"
                    className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-center block text-sm transition shadow-lg shadow-sky-600/30"
                  >
                    Gửi yêu cầu nhận mẫu thử miễn phí
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-sky-600 font-bold text-xs uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>Sản Phẩm Cốt Lõi</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Các Dòng Mực In & Dung Môi Tiêu Biểu
              </h2>
            </div>
            <Link
              href="/san-pham"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition"
            >
              <span>Xem toàn bộ sản phẩm</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  {prod.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-600 text-white text-xs font-semibold shadow-md">
                      {prod.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-4 text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    {prod.categoryName}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition mb-2">
                      <Link href={`/san-pham#${prod.category}`}>{prod.name}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="space-y-1.5 mb-6 text-xs text-slate-500">
                      {prod.features.slice(0, 3).map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Quy cách: <strong className="text-slate-700">{prod.packaging}</strong>
                    </span>
                    <a
                      href="https://zalo.me/0947676021"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white text-xs font-semibold transition"
                    >
                      Báo giá
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VUONG PHAT INK */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-wider">
              Năng Lực Vượt Trội
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Vì Sao Khách Hàng Chọn Vượng Phát Ink?
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              Chúng tôi luôn xem chất lượng sản phẩm in ấn của khách hàng là thước đo giá trị.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition group">
              <div className="w-12 h-12 rounded-xl bg-sky-600/10 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Công Nghệ Đài Loan</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Được chuyển giao kỹ thuật từ Đài Loan, hạt mực siêu mịn phân tán hoàn hảo, không gây tắc nghẽn bản khắc ống đồng.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition group">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Tiêu Chuẩn Châu Âu</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dòng mực in Non-Toluene thân thiện môi trường, không để lại mùi hôi hay dung môi độc hại trên bao bì thực phẩm.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition group">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Độ Bền Màu Xuất Sắc</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Gam màu tươi sáng, bám chắc chắn trên các màng co ngót khó tính (PVC, PET, OPP), không lo trầy xước.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition group">
              <div className="w-12 h-12 rounded-xl bg-amber-600/10 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Tư Vấn Tận Nơi</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kỹ sư của Vượng Phát Ink trực tiếp đến xưởng in để canh chỉnh độ nhớt, tốc độ sấy và hỗ trợ kỹ thuật thực chiến.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL ARTICLES / BLOG PREVIEW WITH THUMBNAILS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-sky-600 font-bold text-xs uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Kỹ Thuật In Ấn</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Kiến Thức & Tin Tức Mới Nhất
              </h2>
            </div>
            <Link
              href="/blog"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition"
            >
              <span>Xem tất cả bài viết</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => {
              const thumbnail = getPostThumbnail(post);
              return (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={thumbnail}
                        alt={post.title.rendered}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-[11px] font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md mb-2">
                        {new Date(post.date).toLocaleDateString("vi-VN")}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm hover:text-sky-600 transition line-clamp-2 mb-2 leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
                      </h3>
                      <div
                        className="text-xs text-slate-500 line-clamp-2 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-5 pt-0 border-t border-slate-100 mt-3 flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700"
                    >
                      <span>Đọc tiếp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUICK QUOTE & CONSULTATION FORM */}
      <section className="py-20 bg-gradient-to-tr from-slate-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-sky-400 font-bold text-xs uppercase tracking-wider">
              Liên Hệ Trực Tiếp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
              Nhận Báo Giá & Mẫu Thử Miễn Phí
            </h2>
            <p className="text-slate-400 mt-3 text-sm sm:text-base">
              Điền thông tin bên dưới hoặc liên hệ Hotline <strong className="text-white">094 76 76 021</strong>, đội ngũ kỹ thuật của Vượng Phát Ink sẽ phản hồi trong 15 phút.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
