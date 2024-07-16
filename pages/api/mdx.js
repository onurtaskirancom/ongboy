import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  try {
    const filePath = path.join(process.cwd(), 'app', 'blog', `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return res
        .status(404)
        .json({ error: 'File not found', details: filePath });
    }
    const source = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(source);
    const mdxSource = await serialize(content);

    res.status(200).json({ mdxSource, frontMatter: data });
  } catch (error) {
    console.error('Error loading MDX content:', error);
    res
      .status(500)
      .json({ error: 'Failed to load MDX content', details: error.message });
  }
}
