// src/app/components/ProductCard.tsx
interface Product {
  id: number;
  name: string;
  certification: string;
  benefits: string[];
  image: string;
  category: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <div className="border rounded-lg shadow hover:shadow-md transition p-4 bg-white">
    <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-md mb-4" />
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-sm text-green-600 mb-2">{product.certification}</p>
    <div className="flex flex-wrap gap-2 text-xs mb-2">
      {product.benefits.map((b, i) => (
        <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
          {b}
        </span>
      ))}
    </div>
    <p className="text-sm text-gray-500">Category: {product.category}</p>
  </div>
);

export default ProductCard;
