'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-customGray text-white p-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(({ slug, frontMatter }) => (
          <div
            key={slug}
            className="bg-customDarkGray rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/blog/${slug}`}>
              <div className="relative w-full h-48 cursor-pointer">
                <Image
                  src={frontMatter.image || '/images/default.jpg'}
                  alt={frontMatter.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/blog/${slug}`}>
                <span className="text-2xl text-customPurple cursor-pointer block mb-4">
                  {frontMatter.title}
                </span>
              </Link>
              <p>{frontMatter.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
