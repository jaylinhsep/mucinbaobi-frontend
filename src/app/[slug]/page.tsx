import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/wp";
import { Calendar, ArrowLeft, Phone, Tag, BookOpen, Share2 } from "lucide-react";

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

            {/* Article Footer & Share */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
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
