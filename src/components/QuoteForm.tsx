"use client";

import { useState } from "react";
import { Send, CheckCircle, Sparkles } from "lucide-react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "Mực in ống đồng màng PVC co",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate fast instant submission & redirect or notification
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">Yêu Cầu Đã Được Tiếp Nhận!</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Cảm ơn bạn <strong className="text-white">{formData.name}</strong>. Kỹ sư tư vấn của Vượng Phát Ink sẽ gọi tới số <strong className="text-sky-400">{formData.phone}</strong> trong vòng ít phút.
        </p>
        <div className="pt-3">
          <a
            href={`https://zalo.me/0947676021?text=${encodeURIComponent(
              `Xin chào Vượng Phát Ink, tôi là ${formData.name} (${formData.phone}), tôi đang cần tư vấn: ${formData.product} - ${formData.message}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ưu tiên chat Zalo phản hồi ngay lập tức</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Họ và tên <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Nguyễn Văn A"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Số điện thoại / Zalo <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="09xx xxx xxx"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Email (nếu có)
          </label>
          <input
            type="email"
            placeholder="example@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Dòng sản phẩm quan tâm
          </label>
          <select
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 transition"
          >
            <option value="Mực in ống đồng màng PVC co">Mực in ống đồng màng PVC co</option>
            <option value="Mực in ống đồng Non-Toluene">Mực in ống đồng Non-Toluene (Châu Âu)</option>
            <option value="Mực in màng PE, PP, PET, OPP">Mực in màng PE, PP, PET, OPP</option>
            <option value="Tinh màu Solvent Dye mỹ phẩm">Tinh màu Solvent Dye mỹ phẩm</option>
            <option value="Máy bơm chiết rót mực từ phuy">Máy bơm chiết rót mực từ phuy</option>
            <option value="Dung môi pha mực & tẩy rửa">Dung môi pha mực & tẩy rửa</option>
            <option value="Khác">Khác / Cần mẫu thử tận nơi</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
          Yêu cầu chi tiết (Quy cách, số lượng, loại màng in...)
        </label>
        <textarea
          rows={3}
          placeholder="Ví dụ: Cần báo giá 500kg mực in màng PVC co màu trắng và đen, giao tại Long An..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{loading ? "Đang gửi yêu cầu..." : "Gửi Yêu Cầu Báo Giá & Mẫu Thử"}</span>
      </button>
    </form>
  );
}
