"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "", grade: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setLoading(false);
      setMessage(mode === "login" ? "تم تسجيل الدخول بنجاح!" : "تم إنشاء الحساب بنجاح!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-center">
            <Image src="/assets/images/logo.png" alt="Logo" width={55} height={52} className="mx-auto rounded-lg mb-3" />
            <h1 className="text-xl font-bold text-white">
              {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب جديد"}
            </h1>
          </div>

          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => { setMode("login"); setMessage(""); }}
              className={`flex-1 py-3 text-sm font-bold transition-colors ${mode === "login" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700 dark:text-gray-400"}`}
            >
              تسجيل الدخول
            </button>
            <button
              onClick={() => { setMode("register"); setMessage(""); }}
              className={`flex-1 py-3 text-sm font-bold transition-colors ${mode === "register" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700 dark:text-gray-400"}`}
            >
              حساب جديد
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {mode === "register" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-sm outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">البريد الإلكتروني</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-sm outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">كلمة المرور</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-sm outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="أدخل كلمة المرور"
              />
            </div>

            {mode === "register" && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">المرحلة الدراسية</label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-sm outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-white transition-colors"
                >
                  <option value="">اختر المرحلة</option>
                  <option value="2sec">الصف الثاني الثانوي</option>
                  <option value="3sec">الصف الثالث الثانوي</option>
                </select>
              </div>
            )}

            {message && (
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold text-center">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" /><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75" /></svg>
                  جاري التحميل...
                </span>
              ) : mode === "login" ? "تسجيل الدخول" : "إنشاء الحساب"}
            </button>

            {mode === "login" && (
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                <a href="#" className="text-purple-600 hover:underline">نسيت كلمة المرور؟</a>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
