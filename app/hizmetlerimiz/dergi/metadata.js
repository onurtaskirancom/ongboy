export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/dergi`;

  return {
    title: 'Ongboy | Dergi Tasarım',
    description:
      'Ongboy olarak, içeriklerinizi görsel olarak zenginleştirerek okuyucularınıza etkileyici bir deneyim sunan profesyonel dergi tasarım hizmetleri sunuyoruz. Yaratıcı ve özgün tasarımlar ile derginizi öne çıkarıyoruz.',
    openGraph: {
      title: 'Ongboy | Dergi Tasarım',
      description:
        'Ongboy olarak, içeriklerinizi görsel olarak zenginleştirerek okuyucularınıza etkileyici bir deneyim sunan profesyonel dergi tasarım hizmetleri sunuyoruz. Yaratıcı ve özgün tasarımlar ile derginizi öne çıkarıyoruz.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/dergi.svg`,
          width: 800,
          height: 600,
          alt: 'Dergi Tasarım',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | Dergi Tasarım',
      description:
        'Ongboy olarak, içeriklerinizi görsel olarak zenginleştirerek okuyucularınıza etkileyici bir deneyim sunan profesyonel dergi tasarım hizmetleri sunuyoruz. Yaratıcı ve özgün tasarımlar ile derginizi öne çıkarıyoruz.',
      image: `${siteUrl}/images/dergi.svg`,
    },
  };
}
