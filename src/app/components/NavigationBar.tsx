"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // optional icons

export default function NavigationBar() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full bg-green-700 dark:bg-zinc-900 text-white px-6 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-2xl font-bold">
          <Link href="/">{t("title")}</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 flex items-center text-sm font-medium">
          <Link href="/">{t("home")}</Link>
          <Link href="/products">{t("products")}</Link>
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/map">{t("map")}</Link>
          <Link href="/faqs">{t("faqs")}</Link>
          <LanguageSwitcher />

          {/* Theme toggle button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 p-1 border rounded text-white border-white hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
