"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavigationBar() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 shadow-md text-white transition-all duration-300 ${
        scrolled ? "mt-0" : "mt-9"
      } ${scrolled ? "bg-green-700 dark:bg-zinc-900" : "bg-green-700 dark:bg-zinc-900"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            className="bg-green-50"
            src="/images/logo.png"
            alt="Logo"
            width={70}
            height={20}
          />
          <span className="text-2xl font-bold">{t("title")}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
          <Link href="/">{t("home")}</Link>
          <Link href="/products">{t("products")}</Link>
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/map">{t("map")}</Link>
          <Link href="/faqs">{t("faqs")}</Link>
          <LanguageSwitcher />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 p-1 border rounded text-white border-white hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <ul className="md:hidden mt-4 px-4 pb-4 space-y-3 text-sm font-medium list-none">
          {["home", "products", "blog", "map", "faqs"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item === "home" ? "" : item}`}
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                {t(item)}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
          <li>
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setMobileOpen(false);
              }}
              className="p-1 border rounded text-white border-white hover:bg-white/10 transition w-full text-left"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
