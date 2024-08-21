export async function fetchPostData(slug) {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

  try {
    const res = await fetch(`${siteUrl}/api/mdx?slug=${slug}`);
    if (!res.ok) {
      throw new Error('Failed to fetch post data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching post data:', error);
    return null;
  }
}
