import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/wp";
import { Calendar, ArrowLeft, Phone, Tag, BookOpen, Share2, Sparkles, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const RESERVED_SLUGS = [
  "gioi-thieu",
  "san-pham",
  "ung-dung",
  "lien-he",
  "blog",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
];

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts
    .filter((post) => !RESERVED_SLUGS.includes(post.slug))
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (RESERVED_SLUGS.includes(slug)) {
    return {};
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Không tìm thấy bài viết" };
  }

  const cleanDescription = post.excerpt.rendered
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .slice(0, 160);

  const canonicalUrl = `https://mucinbaobi.com/${slug}`;

  return {
    title: `${post.title.rendered} | Vượng Phát Ink`,
    description: cleanDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title.rendered} | Vượng Phát Ink`,
      description: cleanDescription,
      url: canonicalUrl,
      type: "article",
    },
  };
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params;

  if (RESERVED_SLUGS.includes(slug)) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && !RESERVED_SLUGS.includes(p.slug))
    .slice(0, 3);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 hover:text-sky-700 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách bài viết</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm">
            <header className="space-y-4 pb-8 border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 bg-sky-50 text-sky-700 px-3 py-1 rounded-md font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("vi-VN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-400">
                  <Tag className="w-3.5 h-3.5" />
                  Kỹ thuật ngành in
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {post.title.rendered}
              </h1>
            </header>

            {/* Rich Content from WordPress - ensuring all images load from LiteSpeed server */}
            <div
              className="article-content pt-8"
              dangerouslySetInnerHTML={{
                __html: post.content.rendered
                  .replaceAll("https://www.mucinbaobi.com/wp-content/", "https://admin.mucinbaobi.com/wp-content/")
                  .replaceAll("https://mucinbaobi.com/wp-content/", "https://admin.mucinbaobi.com/wp-content/")
                  .replaceAll("http://mucinbaobi.com/wp-content/", "https://admin.mucinbaobi.com/wp-content/"),
              }}
            />

            {/* CTA Box for Core Products */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-slate-50 to-indigo-50 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Giải pháp ngành in chuyên nghiệp</span>
                <p className="text-sm font-bold text-slate-900">
                  Cần thử mẫu mực in ống đồng hoặc tinh màu chai lọ mỹ phẩm?
                </p>
                <p className="text-xs text-slate-600">
                  Xem chi tiết tại <Link href="/san-pham/muc-in-ong-dong-vuong-phat" className="text-sky-600 font-semibold underline hover:text-sky-700">Mực in ống đồng Vượng Phát</Link> hoặc <Link href="/san-pham/muc-in-chai-lo-my-pham" className="text-purple-600 font-semibold underline hover:text-purple-700">Mực in chai lọ mỹ phẩm</Link>.
                </p>
              </div>
              <Link
                href="/san-pham"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs whitespace-nowrap transition shrink-0"
              >
                Xem Tất Cả Sản Phẩm &rarr;
              </Link>
            </div>

            {/* Article Footer & Share */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Nguồn: <strong className="text-slate-800">Vượng Phát Ink - mucinbaobi.com</strong>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://zalo.me/0947676021?text=${encodeURIComponent(
                    `Tôi muốn tư vấn về bài viết: ${post.title.rendered}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white text-xs font-semibold transition"
                >
                  Hỏi kỹ thuật viên qua Zalo
                </a>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Consultation Widget */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-7 rounded-3xl shadow-xl space-y-5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Cần Tư Vấn Kỹ Thuật Trực Tiếp?</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Đội ngũ kỹ thuật của Vượng Phát Ink sẵn sàng hỗ trợ giải đáp về độ bám màng, dung môi pha mực và căn chỉnh trục in.
              </p>
              <a
                href="tel:0947676021"
                className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm text-center block shadow-lg transition"
              >
                Gọi ngay: 094 76 76 021
              </a>
            </div>

            {/* Featured Core Products Widget */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Sản Phẩm Trọng Tâm</span>
              </h3>
              <div className="space-y-3 pt-1">
                <Link
                  href="/san-pham/muc-in-ong-dong-vuong-phat"
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-300 block group transition"
                >
                  <span className="text-[11px] font-bold text-sky-700 block mb-1">Mực In Ống Đồng Vượng Phát</span>
                  <span className="text-xs text-slate-600 group-hover:text-slate-900 line-clamp-2">
                    Chuyên in màng PE, PP, PVC màng co, PET, Non-Toluene bám dính &gt;98%.
                  </span>
                  <span className="text-[11px] text-sky-600 font-semibold mt-2 inline-flex items-center gap-1">
                    Xem chi tiết &rarr;
                  </span>
                </Link>

                <Link
                  href="/san-pham/muc-in-chai-lo-my-pham"
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200/80 hover:border-purple-300 block group transition"
                >
                  <span className="text-[11px] font-bold text-purple-700 block mb-1">Mực In Chai Lọ Mỹ Phẩm (Solvent Dye)</span>
                  <span className="text-xs text-slate-600 group-hover:text-slate-900 line-clamp-2">
                    Tinh màu bóng gương cho chai lọ thủy tinh, nước hoa, hũ mỹ phẩm.
                  </span>
                  <span className="text-[11px] text-purple-600 font-semibold mt-2 inline-flex items-center gap-1">
                    Xem chi tiết &rarr;
                  </span>
                </Link>

                <Link
                  href="/ung-dung"
                  className="p-3.5 rounded-2xl bg-slate-900 text-white block group hover:bg-slate-800 transition"
                >
                  <span className="text-xs font-bold block mb-1">Thư Viện Ứng Dụng Thực Tế</span>
                  <span className="text-[11px] text-slate-300 block">
                    Khám phá hình ảnh bao bì đã in thực tế tại xưởng.
                  </span>
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <span>Bài Viết Liên Quan</span>
              </h3>
              <div className="space-y-4 pt-2">
                {relatedPosts.map((rel) => (
                  <div key={rel.id} className="group border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <Link
                      href={`/${rel.slug}`}
                      className="text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition line-clamp-2 leading-snug"
                    >
                      {rel.title.rendered}
                    </Link>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      {new Date(rel.date).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
