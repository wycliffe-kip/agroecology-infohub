import { notFound } from "next/navigation";
import Image from "next/image";
import productsData from "@/data/products.json";
import { Product } from "@/types/Product";

interface Params {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: Params) {
  const productId = parseInt(params.id);
  const product = (productsData as Product[]).find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={400}
          className="rounded-lg object-cover w-full"
        />
        <div>
          <h1 className="text-3xl font-bold text-green-800">{product.name}</h1>
          <p className="mt-2 text-sm text-gray-600">
            Certification: <span className="font-semibold">{product.certification}</span>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Category: <span className="font-semibold">{product.category}</span>
          </p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Nutrition Benefits:</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {product.nutrition.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
