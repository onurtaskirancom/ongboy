// app/blog/[slug]/page.js

import BlogPostPageWrapper from './BlogPostPageWrapper';

export default function BlogPostPage({ params }) {
  return <BlogPostPageWrapper params={params} />;
}
