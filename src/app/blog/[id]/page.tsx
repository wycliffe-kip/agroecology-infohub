import blogPosts from '@/data/blog.json';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));
  if (!post) return notFound();

  return (
    <main className="pt-24 px-4 pb-10 max-w-3xl mx-auto">
      <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-green-800 dark:text-green-200">
            {post.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {post.content}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
