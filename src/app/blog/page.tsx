'use client';

import blogPosts from '@/data/blog.json';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTag, setActiveTag] = useState('');

    const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)));

    const filteredPosts = blogPosts.filter((post) => {
        const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesTag && matchesSearch;
    });

    return (
        <main className="pt-24 px-6 py-10 bg-green-50 dark:bg-zinc-900">
            <div className='max-w-6xl mx-auto'>
                <h1 className="text-3xl font-bold mb-6 text-center text-green-800 dark:text-green-200">Blog</h1>

                <input
                    type="text"
                    placeholder="Search posts..."
                    className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded w-full mb-6"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveTag('')}
                        className={`px-3 py-1 rounded-full transition ${activeTag === ''
                                ? 'bg-green-700 text-white'
                                : 'bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-200'
                            }`}
                    >
                        All
                    </button>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`px-3 py-1 rounded-full transition ${activeTag === tag
                                    ? 'bg-green-700 text-white'
                                    : 'bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-200'
                                }`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredPosts.map((post) => (
                        <Link href={`/blog/${post.id}`} key={post.id}>
                            <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-200">{post.title}</h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-3">{post.excerpt}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </main>
    );
}
