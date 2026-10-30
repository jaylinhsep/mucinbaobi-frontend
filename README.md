# Mucinbaobi Frontend - Next.js (Headless WordPress)

Frontend hiện đại, siêu tốc được xây dựng bằng **Next.js 16 + React Server Components (RSC) + Tailwind CSS** cho thương hiệu **Vượng Phát Ink (mucinbaobi.com)**.

## 🚀 Đặc Điểm Kỹ Thuật (Chuẩn Tốc Độ Như tdpackage.com)
1. **SSG (Static Site Generation) & ISR (Incremental Static Regeneration)**:
   - Toàn bộ 28 trang (Trang chủ, Giới thiệu, Sản phẩm, Liên hệ, Blog và các bài viết kỹ thuật) được dựng sẵn (prerendered) thành HTML tĩnh.
   - Khi có người truy cập, phản hồi trả về là `x-nextjs-cache: HIT` dưới 10ms.
2. **Next-Router-Prefetch**:
   - Khi rê chuột hoặc cuộn trang, trình duyệt tải trước dữ liệu ngầm giúp chuyển trang tức thì (0 delay).
3. **Headless WordPress Integration**:
   - Kết nối tự động tới `https://mucinbaobi.com/wp-json/wp/v2/`.
   - Cung cấp sẵn fallback bộ dữ liệu tĩnh ngoại tuyến giúp website luôn luôn hoạt động 100% dù WordPress có khởi động lại hay cập nhật.
4. **Chuẩn SEO & Tương Tác**:
   - Thẻ Meta title, description, OpenGraph, JSON-LD Schema.
   - Nút gọi Hotline `094 76 76 021`, nút Chat Zalo trực tiếp, Form nhận mẫu thử & báo giá nhanh.

---

## 🛠 Hướng Dẫn Sử Dụng

### 1. Chạy ở môi trường phát triển (Development)
```bash
cd "C:\Users\VSHO Trucking14\.gemini\antigravity\scratch\mucinbaobi-frontend"
npm run dev
```
Truy cập: `http://localhost:3000`

### 2. Xây dựng bản tối ưu sản xuất (Production Build)
```bash
npm run build
npm run start
```

### 3. Đưa lên Internet (Deploy lên Vercel miễn phí trong 2 phút)
1. Đẩy mã nguồn này lên tài khoản GitHub của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: modern native Next.js frontend for mucinbaobi.com"
   git remote add origin https://github.com/<your-username>/mucinbaobi-frontend.git
   git push -u origin main
   ```
2. Đăng nhập vào [Vercel](https://vercel.com) -> Bấm **Add New Project** -> Chọn repository vừa tạo.
3. Bấm **Deploy**. Vercel sẽ tự động cấu hình CDN toàn cầu và cấp chứng chỉ SSL miễn phí.
4. Trong cài đặt Domains của Vercel, trỏ tên miền chính `mucinbaobi.com` vào!
