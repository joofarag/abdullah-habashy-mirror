"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-50/50 dark:bg-gray-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-8 min-h-[500px] py-8 lg:py-0">
        {/* Image Side */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-full max-w-[420px]">
            <div className="absolute top-[5%] left-[10%] w-[80%] h-[90%] bg-gradient-to-br from-purple-600/80 to-purple-800/90 rounded-2xl z-[1]" style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 85%, 70% 100%, 0% 100%, 0% 15%)" }} />
            <Image
              src="/assets/images/hero-photo.png"
              alt="د. عبدالله حبشي"
              width={420}
              height={420}
              priority
              className="relative z-[2] w-full animate-float"
            />
            {/* Chemistry Elements */}
            <span className="absolute bottom-[25%] left-0 text-2xl font-bold text-purple-600 opacity-70 z-[3]">H<sub>2</sub>O</span>
            <span className="absolute top-[10%] right-[30%] text-xl font-bold text-purple-600 opacity-70 z-[3]">CO<sub>2</sub></span>
            <svg className="absolute top-[5%] left-[15%] opacity-60 z-[3]" width="50" height="50" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="4" fill="#7d4bd2" />
              <ellipse cx="30" cy="30" rx="28" ry="10" stroke="#7d4bd2" strokeWidth="1.5" fill="none" />
              <ellipse cx="30" cy="30" rx="28" ry="10" stroke="#7d4bd2" strokeWidth="1.5" fill="none" transform="rotate(60 30 30)" />
              <ellipse cx="30" cy="30" rx="28" ry="10" stroke="#7d4bd2" strokeWidth="1.5" fill="none" transform="rotate(120 30 30)" />
            </svg>
            <svg className="absolute top-[15%] right-[5%] opacity-50 z-[3]" width="35" height="45" viewBox="0 0 35 45">
              <circle cx="17" cy="6" r="5" fill="#9b6edb" />
              <line x1="17" y1="11" x2="17" y2="20" stroke="#9b6edb" strokeWidth="2" />
              <circle cx="17" cy="24" r="4" fill="#7d4bd2" />
              <line x1="17" y1="28" x2="8" y2="38" stroke="#7d4bd2" strokeWidth="2" />
              <line x1="17" y1="28" x2="26" y2="38" stroke="#7d4bd2" strokeWidth="2" />
              <circle cx="8" cy="40" r="4" fill="#9b6edb" />
              <circle cx="26" cy="40" r="4" fill="#9b6edb" />
            </svg>
            <svg className="absolute bottom-[15%] right-[10%] opacity-50 z-[3]" width="40" height="50" viewBox="0 0 40 50">
              <circle cx="20" cy="8" r="6" fill="#7d4bd2" />
              <line x1="20" y1="14" x2="20" y2="24" stroke="#7d4bd2" strokeWidth="2" />
              <circle cx="20" cy="28" r="4" fill="#9b6edb" />
              <line x1="20" y1="32" x2="10" y2="42" stroke="#7d4bd2" strokeWidth="2" />
              <line x1="20" y1="32" x2="30" y2="42" stroke="#7d4bd2" strokeWidth="2" />
              <circle cx="10" cy="44" r="4" fill="#7d4bd2" />
              <circle cx="30" cy="44" r="4" fill="#7d4bd2" />
            </svg>
            <svg className="absolute top-[20%] right-[15%] opacity-40 z-[3]" width="45" height="55" viewBox="0 0 50 60" fill="none">
              <path d="M18 5 H32 V20 L45 50 Q47 55 42 57 H8 Q3 55 5 50 L18 20 Z" stroke="#7d4bd2" strokeWidth="1.5" fill="rgba(125,75,210,0.1)" />
              <line x1="15" y1="5" x2="35" y2="5" stroke="#7d4bd2" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex-1 text-center lg:text-right py-8">
          <h1 className="text-3xl md:text-[42px] font-extrabold text-gray-900 dark:text-white leading-tight mb-2">
            اكتشف طريقك مع
            <span className="block text-4xl md:text-[48px] mt-1 font-[OMNES-ARABIC]">د. عبدالله حبشي</span>
          </h1>
          <Image src="/assets/svg/shapeLine.svg" alt="shape" width={150} height={12} className="mx-auto lg:mr-0 lg:ml-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 max-w-lg mx-auto lg:mr-0 lg:ml-auto">
            دكتور عبدالله حبشي – مدرس كيمياء ثانوية عامة بمصر
            بالخطة النهائية المحدثة 🚀 شرح العضوية، الكهرباء، التحليل،
            مراجعات ما قبل الامتحان بدقة وإتقان.
          </p>

          <div className="flex items-center gap-6 justify-center lg:justify-start flex-wrap mb-8">
            <Link href="/auth" className="inline-flex items-center gap-2 px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="4" width="20" height="16" rx="2" fill="#f5a623" /><rect x="6" y="8" width="12" height="3" rx="1" fill="#fff" opacity="0.5" /></svg>
              انضم للاوائل
            </Link>
            <div className="flex gap-3">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", path: "" },
                { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" },
              ].map((s) => (
                <a key={s.label} href="#" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors" aria-label={s.label}>
                  {s.label === "Instagram" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} />{s.label === "YouTube" && <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff" />}</svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 justify-center lg:justify-start flex-wrap">
            {[
              { text: "طريقك للنجاح", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7d4bd2" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
              { text: "اقوى نظام متابعة", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7d4bd2" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
              { text: "دعم بالذكاء الاصطناعي", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7d4bd2" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg> },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-2 font-bold text-sm text-gray-800 dark:text-gray-200 relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-purple-600/30 after:rounded">
                {f.icon}
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
