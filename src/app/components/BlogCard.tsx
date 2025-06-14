// src/app/components/BlogCard.tsx
interface Blog {
  id: number;
  title: string;
  image: string;
  preview: string;
  tags: string[];
}

const BlogCard = ({ blog }: { blog: Blog }) => (
  <div className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-md transition">
    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-sm text-gray-700 mb-2">{blog.preview}</p>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default BlogCard;
