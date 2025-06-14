// src/app/components/NavigationBar.tsx
"use client";

import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-700 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">AE/EOA Platform</div>
        <div className="space-x-6 text-sm md:text-base">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/map" className="hover:underline">Map</Link>
          <Link href="/faqs" className="hover:underline">FAQs</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
