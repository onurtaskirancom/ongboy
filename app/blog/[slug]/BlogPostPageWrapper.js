import { Suspense } from 'react';
import BlogPostPageClient from './BlogPostPageClient';
import { fetchPostData } from '../../lib/fetchPostData';

export default async function BlogPostPageWrapper({ params }) {
  const { slug } = params;

  try {
    const post = await fetchPostData(slug);

    if (!post) {
      throw new Error('Post data is undefined');
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPostPageClient post={post} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error in BlogPostPageWrapper:', error.message);
    return <div>Error loading post data. Please try again later.</div>;
  }
}
