import BlogPostPageWrapper from './BlogPostPageWrapper';
import { generateMetadata } from './metadata';

export { generateMetadata }; 
export default function Page({ params }) {
  return <BlogPostPageWrapper params={params} />;
}
