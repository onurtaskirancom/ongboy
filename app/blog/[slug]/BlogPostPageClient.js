'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';

const MDXRemote = dynamic(
  () => import('next-mdx-remote').then((mod) => mod.MDXRemote),
  {
    ssr: false,
  }
);

import MDXComponents from '../../components/MDXComponents';

const BlogPostPageClient = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);

    if (slug) {
      const fetchPost = async () => {
        try {
          const res = await fetch(`/api/mdx?slug=${slug}`);
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await res.json();
          setPost(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#849fd9" size={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-customGray text-white rounded-xl shadow-md">
      <div className="relative w-full h-96 mb-8">
        <Image
          src={post.frontMatter?.image || '/images/default.jpg'}
          alt={post.frontMatter?.title}
          fill
          sizes="50vw"
          className="object-cover rounded-xl"
          priority
        />
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{post.frontMatter?.title}</h1>
        <p className="text-sm mb-8">{post.frontMatter?.date}</p>
        <p>Search Param: {searchParams?.get('paramName')}</p>
        <MDXRemote {...post.mdxSource} components={MDXComponents} />
      </div>
    </div>
  );
};

export default BlogPostPageClient;
