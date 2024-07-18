'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';
import MDXComponents from '../../components/MDXComponents';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      <div className="w-full mb-8">
        <Image
          src={post.frontMatter?.image || '/images/default.jpg'}
          alt={post.frontMatter?.title}
          layout="responsive"
          width={800}
          height={300}
          className="w-full rounded-xl"
        />
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">{post.frontMatter?.title}</h1>
        <p className="text-sm mb-8">{post.frontMatter?.date}</p>
        <MDXRemote {...post.mdxSource} components={MDXComponents} />
      </div>
    </div>
  );
};

export default BlogPostPage;
