import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "د. عبدالله حبشي - منصة تعليمية للكيمياء",
  description:
    "منصة تعليمية متخصصة في تدريس الكيمياء للمرحلة الثانوية مع د. عبدالله حبشي",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-cairo)]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
