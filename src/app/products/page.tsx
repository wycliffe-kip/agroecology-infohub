// src/app/products/page.tsx
import ProductCard from "../components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
    return (
        <main className="pt-24 px-6">
            <h1 className="text-3xl font-bold mb-6 text-green-800">Agroecological Products</h1>
            <div className="mb-6 flex flex-wrap gap-4">
                <select className="border px-3 py-2 rounded">
                    <option>All Categories</option>
                    <option>Fruits</option>
                    <option>Grains</option>
                </select>
                <select className="border px-3 py-2 rounded">
                    <option>All Certifications</option>
                    <option>Certified Organic</option>
                    <option>Eco Certified</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}
