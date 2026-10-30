import postsData from "@/data/posts.json";
import pagesData from "@/data/pages.json";
import categoriesData from "@/data/categories.json";
import mediaData from "@/data/media.json";

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media?: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt?: { rendered: string };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const WP_API_URL = "https://admin.mucinbaobi.com/wp-json/wp/v2";

// Helper to format clean image URL ensuring it loads from admin.mucinbaobi.com
export function normalizeImageUrl(url?: string): string {
  if (!url) return "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink1.jpg";
  // If the URL has mucinbaobi.com/wp-content (without admin), point to admin.mucinbaobi.com where LiteSpeed serves the media files
  return url.replace("https://www.mucinbaobi.com/wp-content/", "https://admin.mucinbaobi.com/wp-content/")
            .replace("https://mucinbaobi.com/wp-content/", "https://admin.mucinbaobi.com/wp-content/")
            .replace("http://mucinbaobi.com/wp-content/", "https://admin.mucinbaobi.com/wp-content/");
}

// Helper to get image URL from media id fallback
export function getMediaUrlById(id?: number): string {
  if (!id) return "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink1.jpg";
  const found = (mediaData as Array<{ id: number; source_url: string }>).find((m) => m.id === id);
  return normalizeImageUrl(found?.source_url);
}

// Helper to get thumbnail image URL for a post
export function getPostThumbnail(post: WPPost): string {
  let url = "";
  if (post._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
    url = post._embedded["wp:featuredmedia"][0].source_url;
  } else if (post.featured_media && post.featured_media > 0) {
    const found = (mediaData as Array<{ id: number; source_url: string }>).find((m) => m.id === post.featured_media);
    if (found && found.source_url) url = found.source_url;
  } else {
    // Extract first image from HTML content
    const match = post.content?.rendered?.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (match && match[1]) {
      url = match[1];
    }
  }
  return normalizeImageUrl(url);
}

// Fetch all posts with live API fallback
export async function getPosts(): Promise<WPPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 }, // Revalidate every 60s for immediate detection of newly published posts
      headers: { "User-Agent": "Mozilla/5.0 (Next.js Headless Client)" },
    });
    if (res.ok) {
      const livePosts = await res.json();
      if (Array.isArray(livePosts) && livePosts.length > 0) {
        return livePosts;
      }
    }
  } catch {
    // Silently fall back to cached dataset
  }
  return postsData as unknown as WPPost[];
}

// Fetch single post by slug
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) || null;
}

// Fetch all pages
export async function getPages(): Promise<WPPage[]> {
  try {
    const res = await fetch(`${WP_API_URL}/pages?per_page=100`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const livePages = await res.json();
      if (Array.isArray(livePages) && livePages.length > 0) {
        return livePages;
      }
    }
  } catch {
    // Fall back to cached dataset
  }
  return pagesData as unknown as WPPage[];
}

// Fetch single page by slug
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await getPages();
  return pages.find((p) => p.slug === slug) || null;
}

// Fetch categories
export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_API_URL}/categories?per_page=100`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const liveCats = await res.json();
      if (Array.isArray(liveCats)) return liveCats;
    }
  } catch {
    // Fallback
  }
  return categoriesData as unknown as WPCategory[];
}

// Curated Products catalog for Vượng Phát Ink
export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: "muc-in-ong-dong" | "solvent-dye" | "may-bom-muc" | "dung-moi";
  categoryName: string;
  description: string;
  features: string[];
  applications: string;
  packaging: string;
  image: string;
  badge?: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "p1",
    slug: "muc-in-ong-dong-pvc-mang-co",
    name: "Mực in ống đồng cho Màng PVC Co",
    category: "muc-in-ong-dong",
    categoryName: "Mực in ống đồng",
    description: "Dòng mực in cao cấp chuyên dụng cho màng PVC co (PVC Shrink Film). Độ bám dính vượt trội, màu sắc tươi sáng, chịu nhiệt độ co sấy cao không nứt nẻ hay bong tróc.",
    features: [
      "Công nghệ Đài Loan tiên tiến",
      "Độ đàn hồi cao, tương thích tốt với tỷ lệ co ngót màng PVC",
      "Độ bền màu và độ bóng cao",
      "Không bị biến dạng màu khi qua buồng nhiệt co màng",
    ],
    applications: "In tem nhãn màng co chai lọ nước ngọt, mỹ phẩm, bình nước, bao bì đóng gói thực phẩm.",
    packaging: "Thùng 18kg / Phuy 200kg",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink1.jpg",
    badge: "Bán chạy nhất",
  },
  {
    id: "p2",
    slug: "muc-in-ong-dong-non-toluene",
    name: "Mực in ống đồng Non-Toluene (Thân thiện môi trường)",
    category: "muc-in-ong-dong",
    categoryName: "Mực in ống đồng",
    description: "Mực in thế hệ mới không chứa dung môi Toluene độc hại, đạt tiêu chuẩn khắt khe để xuất khẩu bao bì sang thị trường Châu Âu, Mỹ, Nhật Bản.",
    features: [
      "Hàm lượng VOC cực thấp, an toàn cho người thao tác và môi trường",
      "Đạt chuẩn xuất khẩu sang thị trường khó tính",
      "Tốc độ in cao, khô nhanh và ổn định",
      "Tiết kiệm lượng mực tiêu hao trên mỗi mét in",
    ],
    applications: "Bao bì thực phẩm, bao bì dược phẩm, túi bánh kẹo, xuất khẩu quốc tế.",
    packaging: "Thùng 18kg / 20kg",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2024/11/muc-in-ong-dong-non-toluene.webp",
    badge: "Đạt chuẩn Châu Âu",
  },
  {
    id: "p3",
    slug: "muc-in-ong-dong-pe-pp-pet-opp",
    name: "Mực in ống đồng màng PE, PP, PET, OPP",
    category: "muc-in-ong-dong",
    categoryName: "Mực in ống đồng",
    description: "Giải pháp in ấn toàn diện cho các loại màng nhựa mềm. Bám dính chắc chắn sau khi xử lý Corona màng, chống trầy xước và chịu ma sát xuất sắc.",
    features: [
      "Độ phủ hạt mực mịn, phân tán sắc tố đồng đều",
      "Màu sắc rực rỡ, chân thực theo tiêu chuẩn pantone",
      "Hạn chế nghẹt bản in (clogging) trên trục ống đồng",
      "Kháng nước, kháng dầu mỡ và hóa chất nhẹ",
    ],
    applications: "Túi xốp, bao bì màng ghép phức hợp, túi đựng gạo, bao phân bón, túi siêu thị.",
    packaging: "Thùng 18kg / Phuy 180kg",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink2.webp",
  },
  {
    id: "p4",
    slug: "tinh-mau-solvent-dye-chai-lo-my-pham",
    name: "Tinh màu Solvent Dye (Sơn phủ chai lọ mỹ phẩm & gỗ)",
    category: "solvent-dye",
    categoryName: "Mực in Solvent Dye",
    description: "Dòng tinh màu dạng lỏng cao cấp hòa tan trong dung môi hữu cơ. Chuyên dùng tạo màu trong suốt óng ánh, phủ màu bề mặt chai lọ thủy tinh, nhựa acrylic và sơn bóng gỗ cao cấp.",
    features: [
      "Độ hòa tan tuyệt hảo trong dung môi, không lắng cặn",
      "Màu sắc trong suốt, độ bóng gương lộng lẫy",
      "Độ bền nhiệt và bền ánh sáng vượt trội",
      "Cung cấp đầy đủ các gam màu hiếm gặp trên thị trường",
    ],
    applications: "Chai lọ mỹ phẩm sang trọng, đồ thủ công mỹ nghệ, bề mặt kính, vecni sơn gỗ.",
    packaging: "Chai 1 lít / Can 5 lít / Thùng 25kg",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink3.webp",
    badge: "Cao cấp",
  },
  {
    id: "p5",
    slug: "may-bom-chiet-rot-muc-tu-phuy",
    name: "Máy bơm chiết rót mực từ phuy chuyên dụng",
    category: "may-bom-muc",
    categoryName: "Máy bơm mực",
    description: "Thiết bị bơm màng khí nén chuyên dụng chiết rót mực in, dung môi từ phuy sang máng mực máy in trục ống đồng một cách tự động, an toàn và chống cháy nổ tuyệt đối.",
    features: [
      "Vận hành bằng khí nén 100%, chống tia lửa điện và cháy nổ",
      "Lưu lượng bơm tuần hoàn ổn định, chống lắng cặn mực",
      "Thân bơm hợp kim nhôm/inox chống ăn mòn hóa chất",
      "Giảm thiểu 90% hao hụt và rơi vãi mực ra sàn xưởng",
    ],
    applications: "Xưởng in ống đồng bao bì, xưởng pha chế dung môi, nhà máy sản xuất sơn.",
    packaging: "Bộ máy tiêu chuẩn kèm ống hút, van điều áp",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2025/08/may-bom-chiet-rot-muc-tu-phuy-vuong-phat-ink.webp",
  },
  {
    id: "p6",
    slug: "dung-moi-pha-muc-tay-rua-truc-in",
    name: "Dung môi pha mực & Dung môi tẩy rửa trục in",
    category: "dung-moi",
    categoryName: "Dung môi phụ trợ",
    description: "Bộ đôi dung môi pha loãng điều chỉnh tốc độ bay hơi (nhanh/chậm) và dung môi rửa chuyên sâu làm sạch trục in ống đồng, trả lại bề mặt khắc vi mô nguyên bản.",
    features: [
      "Điều chỉnh độ nhớt mực in mượt mà, chống bọt",
      "Tẩy sạch vết mực khô kết dính sâu trong các lỗ vi mô của trục",
      "Bảo vệ lớp mạ crom của trục in ống đồng không bị ăn mòn",
      "Giá thành cạnh tranh tối ưu chi phí vận hành cho nhà in",
    ],
    applications: "Pha mực in flexo, ống đồng, vệ sinh máng mực, con lăn, trục in.",
    packaging: "Can 20L / Phuy 200L / Tank 1000L",
    image: "https://admin.mucinbaobi.com/wp-content/uploads/2026/10/vuongphatink4.webp",
  },
];
