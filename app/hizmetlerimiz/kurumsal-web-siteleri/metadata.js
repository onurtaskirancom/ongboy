export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/kurumsal-web-siteleri`;

  return {
    title: 'Ongboy | Kurumsal Web Siteleri',
    description:
      'Ongboy olarak, şirketinizin dijital dünyada profesyonel bir imaj sergilemesini sağlayan kurumsal web sitesi çözümleri sunuyoruz. Modern ve işlevsel tasarımlarla markanızın değerlerini yansıtıyoruz.',
    openGraph: {
      title: 'Ongboy | Kurumsal Web Siteleri',
      description:
        'Ongboy olarak, şirketinizin dijital dünyada profesyonel bir imaj sergilemesini sağlayan kurumsal web sitesi çözümleri sunuyoruz. Modern ve işlevsel tasarımlarla markanızın değerlerini yansıtıyoruz.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/kurumsal-web-siteleri.svg`,
          width: 800,
          height: 600,
          alt: 'Kurumsal Web Siteleri',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | Kurumsal Web Siteleri',
      description:
        'Ongboy olarak, şirketinizin dijital dünyada profesyonel bir imaj sergilemesini sağlayan kurumsal web sitesi çözümleri sunuyoruz. Modern ve işlevsel tasarımlarla markanızın değerlerini yansıtıyoruz.',
      image: `${siteUrl}/images/kurumsal-web-siteleri.svg`,
    },
  };
}
