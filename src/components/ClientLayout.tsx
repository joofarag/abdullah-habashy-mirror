"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
