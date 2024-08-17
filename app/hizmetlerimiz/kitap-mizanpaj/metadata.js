export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/kitap-mizanpaj`;

  return {
    title: 'Ongboy | Kitap Mizanpaj',
    description:
      'Ongboy olarak, kitaplarınızın profesyonel ve estetik bir görünüme sahip olmasını sağlayan mizanpaj hizmetleri sunuyoruz. İçerik düzenlemeleri ve sayfa tasarımları ile kaliteli bir okuma deneyimi sunuyoruz.',
    openGraph: {
      title: 'Ongboy | Kitap Mizanpaj',
      description:
        'Ongboy olarak, kitaplarınızın profesyonel ve estetik bir görünüme sahip olmasını sağlayan mizanpaj hizmetleri sunuyoruz. İçerik düzenlemeleri ve sayfa tasarımları ile kaliteli bir okuma deneyimi sunuyoruz.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/kitap-mizanpaj.svg`,
          width: 800,
          height: 600,
          alt: 'Kitap Mizanpaj',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Ongboy',
      title: 'Ongboy | Kitap Mizanpaj',
      description:
        'Ongboy olarak, kitaplarınızın profesyonel ve estetik bir görünüme sahip olmasını sağlayan mizanpaj hizmetleri sunuyoruz. İçerik düzenlemeleri ve sayfa tasarımları ile kaliteli bir okuma deneyimi sunuyoruz.',
      image: `${siteUrl}/images/kitap-mizanpaj.svg`,
    },
  };
}
