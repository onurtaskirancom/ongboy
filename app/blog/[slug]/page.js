import { Suspense } from 'react';
import BlogPostPageClient from './BlogPostPageClient';
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function BlogPostPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPostPageClient />
    </Suspense>
  );
}
