// lib/fetchPostData.js

export async function fetchPostData(slug) {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  console.log(`Fetching post data for slug: ${slug}`); // Hangi slug için veri çektiğimizi kontrol ediyoruz

  try {
    const res = await fetch(`${siteUrl}/api/mdx?slug=${slug}`);
    if (!res.ok) {
      throw new Error('Failed to fetch post data');
    }
    const data = await res.json();
    console.log('Fetched post data:', data); // Çekilen veriyi kontrol ediyoruz
    return data;
  } catch (error) {
    console.error('Error fetching post data:', error);
    return null;
  }
}
