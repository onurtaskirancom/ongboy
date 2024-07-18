import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  const blogDirectory = path.join(process.cwd(), 'app', 'blog');
  let { page, limit } = req.query;
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 6;

  try {
    const files = fs.readdirSync(blogDirectory);
    const posts = files
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => {
        const filePath = path.join(blogDirectory, filename);
        const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
          slug: filename.replace('.mdx', ''),
          frontMatter,
        };
      })
      .sort(
        (a, b) => new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
      );

    const total = posts.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    const hasMore = endIndex < total;

    res.status(200).json({ posts: paginatedPosts, hasMore, total });
  } catch (error) {
    console.error('Error loading posts:', error);
    res
      .status(500)
      .json({ error: 'Failed to load posts', details: error.message });
  }
}
