import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  const blogDirectory = path.join(process.cwd(), 'app', 'blog');

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
      });

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error loading posts:', error);
    res
      .status(500)
      .json({ error: 'Failed to load posts', details: error.message });
  }
}
