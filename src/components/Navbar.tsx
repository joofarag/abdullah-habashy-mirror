"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-3">
        <Link href="/" className="shrink-0">
          <Image src="/assets/images/logo.png" alt="Logo" width={55} height={52} className="rounded-lg" />
        </Link>

        <div className={`${mobileOpen ? "flex" : "hidden"} md:flex items-center gap-1 absolute md:relative top-full left-0 right-0 md:top-auto bg-white dark:bg-gray-900 md:bg-transparent flex-col md:flex-row p-4 md:p-0 border-b md:border-0 border-gray-200 dark:border-gray-700 shadow-lg md:shadow-none z-50`}>
          <div className="group relative">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 transition-colors whitespace-nowrap">
              المراحل الدراسية
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-180"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            <div className="hidden group-hover:block absolute top-full right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[160px] z-50">
              <Link href="/" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700">الصف الثاني الثانوي</Link>
              <Link href="/" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700">الصف الثالث الثانوي</Link>
            </div>
          </div>
          <div className="group relative">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 transition-colors whitespace-nowrap">
              المواد الدراسية
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-180"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            <div className="hidden group-hover:block absolute top-full right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[160px] z-50">
              <Link href="/" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700">كيمياء</Link>
            </div>
          </div>
          <Link href="/store" className="px-3 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 transition-colors whitespace-nowrap">المتجر</Link>
          <Link href="/leaderboard" className="px-3 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600 transition-colors whitespace-nowrap">لائحة الصدارة</Link>
        </div>

        <form onSubmit={handleSearch} className="relative shrink-0">
          <input
            type="text"
            placeholder="بحث..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-28 focus:w-44 transition-all px-3 py-2 pr-8 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-sm outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-white"
          />
          <button type="submit" className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </button>
        </form>

        <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors" aria-label="تبديل الوضع">
          {theme === "light" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
          )}
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <Link href="/auth" className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors whitespace-nowrap">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" /></svg>
            تسجيل الدخول
          </Link>
          <Link href="/auth" className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30 transition-all whitespace-nowrap">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
            سجل معانا!
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-700 dark:text-gray-300" aria-label="القائمة">
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          )}
        </button>
      </div>
    </nav>
  );
}
