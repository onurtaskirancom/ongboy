import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' });
  }

  try {
    const filePath = path.join(process.cwd(), 'app', slug, 'page.mdx');
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    const source = fs.readFileSync(filePath, 'utf8');
    const mdxSource = await serialize(source);
    res.status(200).json(mdxSource);
  } catch (error) {
    console.error('Error loading MDX content:', error);
    res.status(500).json({ error: 'Failed to load MDX content' });
  }
}
