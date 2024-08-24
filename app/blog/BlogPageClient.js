'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';

const BlogPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromUrl = searchParams.get('page');
  const [page, setPage] = useState(pageFromUrl ? parseInt(pageFromUrl, 10) : 1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page) => {
    setLoading(true);
    try {
      const res = await fetch(`/api?page=${page}&limit=6`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setPosts(data.posts);
      setHasMore(data.hasMore);
      setTotalPages(Math.ceil(data.total / 6)); // Assuming API response includes a total count of posts
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage !== page) {
      setPage(newPage);
      setPosts([]);
      router.push(`/blog?page=${newPage}`);
      window.scrollTo(0, 0);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded ${
            i === page
              ? 'bg-customPurple text-white'
              : 'bg-customDarkGray text-customPurple'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(({ slug, frontMatter }) => (
          <div
            key={slug}
            className="bg-customDarkGray rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/blog/${slug}`}>
              <div className="relative w-full cursor-pointer">
                <Image
                  src={frontMatter.image || '/images/default.jpg'}
                  alt={frontMatter.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover rounded-t-lg"
                  priority
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
      {loading && (
        <div className="flex justify-center items-center my-8">
          <ClipLoader color="#849fd9" size={50} />
        </div>
      )}
      <div className="flex justify-center my-8">
        <button
          onClick={() => handlePageChange(page - 1)}
          className="bg-customPurple text-white py-2 px-4 rounded-md hover:bg-customPurpleDark mx-2"
          disabled={page === 1 || loading}
        >
          Önceki
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(page + 1)}
          className="bg-customPurple text-white py-2 px-4 rounded-md hover:bg-customPurpleDark mx-2"
          disabled={!hasMore || loading}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

const BlogPageClient = () => {
  return (
    <Suspense fallback={<div>Loading page data...</div>}>
      <BlogPageContent />
    </Suspense>
  );
};

export default BlogPageClient;
