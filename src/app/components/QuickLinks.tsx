'use client';

import Link from "next/link";
import { useTranslation } from "react-i18next";

const QuickLinks = () => {
  const { t } = useTranslation();

  const links = [
    { href: "/products", label: t("products") },
    { href: "/blog", label: t("blog") },
    { href: "/map", label: t("map") },
    { href: "/faqs", label: t("faqs") },
  ];

  return (
    <section className="py-12 bg-green-50 dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border border-gray-200 dark:border-zinc-700 rounded-lg p-6 hover:bg-green-100 dark:hover:bg-zinc-800 transition"
          >
            <span className="text-green-800 dark:text-green-200 font-semibold">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
