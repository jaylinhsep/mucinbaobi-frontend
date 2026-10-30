import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mucinbaobi.com"),
  title: {
    default: "Mực in bao bì nhựa Vượng Phát Ink | Nhà sản xuất mực in ống đồng & dung môi",
    template: "%s | Vượng Phát Ink",
  },
  description:
    "Vượng Phát Ink chuyên sản xuất các loại mực in ống đồng trên màng PE, PP, PVC màng co, PET, OPP, Non-Toluene thân thiện môi trường, tinh màu Solvent Dye phủ chai lọ mỹ phẩm và dung môi ngành in.",
  keywords: [
    "mực in ống đồng",
    "mực in bao bì nhựa",
    "mực in màng PVC co",
    "mực in non-toluene",
    "dung môi pha mực",
    "tinh màu solvent dye",
    "máy bơm mực in ống đồng",
    "Vượng Phát Ink",
  ],
  authors: [{ name: "Vượng Phát Ink" }],
  openGraph: {
    title: "Mực in bao bì nhựa Vượng Phát Ink | Nhà sản xuất dung môi & mực in ống đồng",
    description:
      "Chuyên cung cấp mực in ống đồng, tinh màu Solvent Dye và dung môi ngành in theo công nghệ Đài Loan, đạt chuẩn Châu Âu.",
    url: "https://mucinbaobi.com",
    siteName: "Vượng Phát Ink",
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`h-full scroll-smooth ${inter.className}`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
