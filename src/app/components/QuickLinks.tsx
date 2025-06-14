// src/app/components/QuickLinks.tsx
import Link from "next/link";

const links = [
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/map", label: "Map" },
  { href: "/faqs", label: "FAQs" },
];

const QuickLinks = () => {
  return (
    <section className="py-12 bg-white dark:bg-zinc-900">
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
