'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
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

export default function BlogPostPageClient({ post }) {
  const searchParams = useSearchParams();
  const paramValue = searchParams.get('paramName'); // URL'den parametreyi alıyoruz.

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#849fd9" size={50} />
        <p>Loading post data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-customGray text-white rounded-xl shadow-md">
      <div className="relative w-full h-96 mb-8">
        <Image
          src={post.frontMatter?.image || '/images/default.jpg'}
          alt={post.frontMatter?.title || 'Post image'}
          fill
          sizes="50vw"
          className="object-cover rounded-xl"
          priority
        />
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          {post.frontMatter?.title || 'No title available'}
        </h1>
        <p className="text-sm mb-8">
          {post.frontMatter?.date || 'No date available'}
        </p>
        <p>Search Param: {paramValue}</p>
        <MDXRemote {...post.mdxSource} components={MDXComponents} />
      </div>
    </div>
  );
}
