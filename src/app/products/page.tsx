"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/Product";

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [certification, setCertification] = useState("All");

  const products: Product[] = productsData;

  const filteredProducts = products.filter((product) => {
    const matchCategory = category === "All" || product.category === category;
    const matchCert = certification === "All" || product.certification === certification;
    return matchCategory && matchCert;
  });

  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
  const uniqueCertifications = Array.from(new Set(products.map((p) => p.certification)));

  return (
    <div className=" bg-cream mx-auto p-6 pt-24 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Agroecological Products</h1>

      <div className="mb-6 flex flex-wrap gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All Categories</option>
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={certification}
          onChange={(e) => setCertification(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="All">All Certifications</option>
          {uniqueCertifications.map((cert) => (
            <option key={cert} value={cert}>{cert}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-600">No products found.</p>
        )}
      </div>
      </div>
    </div>
  );
}
