export async function generateMetadata({ params }) {
  const { slug } = params;

  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/blog/${slug}`;

  try {
    const res = await fetch(`${siteUrl}/api/mdx?slug=${slug}`);
    if (!res.ok) {
      throw new Error('Failed to fetch post data');
    }
    const post = await res.json();

    return {
      title: post.frontMatter.title,
      description: post.frontMatter.excerpt || 'Ongboy Blog',
      openGraph: {
        title: post.frontMatter.title,
        description: post.frontMatter.excerpt || 'Ongboy Blog',
        url: canonicalUrl,
        type: 'article',
        images: [
          {
            url: post.frontMatter.image || `${siteUrl}/images/default.jpg`,
            width: 800,
            height: 600,
            alt: post.frontMatter.title,
          },
        ],
        site_name: 'Ongboy',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@Ongboy',
        title: post.frontMatter.title,
        description: post.frontMatter.excerpt || 'Ongboy Blog',
        image: post.frontMatter.image || `${siteUrl}/images/default.jpg`,
      },
    };
  } catch (error) {
    return {
      title: 'Ongboy | Blog',
      description: 'Ongboy blogunda en güncel içerikleri bulabilirsiniz.',
      openGraph: {
        title: 'Ongboy | Blog',
        description: 'Ongboy blogunda en güncel içerikleri bulabilirsiniz.',
        url: canonicalUrl,
        type: 'website',
        images: [
          {
            url: `${siteUrl}/images/default.jpg`,
            width: 800,
            height: 600,
            alt: 'Ongboy Blog',
          },
        ],
        site_name: 'Ongboy',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@Ongboy',
        title: 'Ongboy | Blog',
        description: 'Ongboy blogunda en güncel içerikleri bulabilirsiniz.',
        image: `${siteUrl}/images/default.jpg`,
      },
    };
  }
}
