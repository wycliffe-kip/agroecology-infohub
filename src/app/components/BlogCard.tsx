// src/app/components/BlogCard.tsx
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  image: string;
  preview: string;
  tags: string[];
}

const BlogCard = ({ blog }: { blog: Blog }) => (
  <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow hover:shadow-md transition">
    <div className="relative w-full h-48">
      <Image
        src={blog.image}
        alt={blog.title}
        layout="fill"
        objectFit="cover"
        className="rounded-t"
        priority={false} // Optional: for above-the-fold images use `priority={true}`
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-200">{blog.title}</h2>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{blog.preview}</p>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default BlogCard;
