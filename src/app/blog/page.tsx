import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, getCategories } from "@/lib/wp";
import { Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Tin Tức & Kỹ Thuật In Ấn Ống Đồng | Vượng Phát Ink",
  description:
    "Chia sẻ kinh nghiệm kỹ thuật ngành in ấn bao bì: xử lý corona màng, dung môi pha mực, linh kiện máy in ống đồng, màng PVC co, mực in Non-Toluene.",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            <span>Kỹ Thuật Ngành In</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tin Tức & Kiến Thức Kỹ Thuật
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Tổng hợp các cẩm nang, tài liệu thực chiến và hướng dẫn chọn mực in chất lượng cho ngành in bao bì nhựa.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories
            .filter((c) => c.count > 0)
            .map((cat) => (
              <span
                key={cat.id}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <Tag className="w-3 h-3 text-sky-500" />
                <span>{cat.name} ({cat.count})</span>
              </span>
            ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const cleanExcerpt = post.excerpt.rendered
              .replace(/<[^>]+>/g, "")
              .replace(/&nbsp;/g, " ")
              .slice(0, 160);

            return (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group p-6 sm:p-7"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 bg-sky-50 text-sky-700 px-3 py-1 rounded-md font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("vi-VN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-slate-400">Vượng Phát Ink</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {cleanExcerpt}...
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 group-hover:text-sky-700 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Xem chi tiết bài viết</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
