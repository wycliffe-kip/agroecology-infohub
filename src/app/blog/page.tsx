// src/app/blog/page.tsx
import BlogCard from "../components/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="pt-24 px-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Agroecology Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}
