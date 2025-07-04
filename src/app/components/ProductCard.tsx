"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
  certification: string;
  nutrition: string[];
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg shadow-sm p-4 hover:shadow-md transition">
      <div className="relative w-full h-48 mb-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <h3 className="mt-2 font-semibold text-lg">{product.name}</h3>
      <span className="text-sm text-green-600">{product.certification}</span>

      <div className="text-sm mt-2">
        {product.nutrition.map((n) => (
          <span
            key={n}
            className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2 mb-1"
          >
            {n}
          </span>
        ))}
      </div>

      <Link href={`/products/${product.id}`} className="block mt-4 text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
}
