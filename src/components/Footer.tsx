"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image src="/assets/images/logo.png" alt="Logo" width={55} height={52} className="rounded-lg" />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs text-center md:text-right">
              منصة تعليمية متخصصة في تدريس الكيمياء للمرحلة الثانوية مع أ.د عبدالله حبشي
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" },
              ].map((s) => (
                <a key={s.label} href="#" className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-colors" aria-label={s.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} />{s.label === "YouTube" && <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1a1a2e" />}</svg>
                </a>
              ))}
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-colors" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-white text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/store", label: "المتجر" },
                { href: "/leaderboard", label: "لائحة الصدارة" },
                { href: "/auth", label: "تسجيل الدخول" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-white text-lg mb-4">قانوني</h3>
            <ul className="space-y-2">
              {[
                { href: "/legal/privacy-policy", label: "سياسة الخصوصية" },
                { href: "/legal/terms-and-conditions", label: "الشروط والأحكام" },
                { href: "/legal/instructions", label: "سياسة الاستخدام" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>&copy; 2025</span>
            <Image src="/assets/svg/tafra_logo.svg" alt="طفرة تعليمية" width={18} height={18} />
            <span>طفرة تعليمية</span>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-400 border border-gray-600 rounded-lg hover:text-white hover:border-gray-400 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            عربي
          </button>
        </div>
      </div>
    </footer>
  );
}
