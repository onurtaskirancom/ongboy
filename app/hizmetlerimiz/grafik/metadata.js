export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/grafik`;

  return {
    title: 'Ongboy | Grafik Tasarım',
    description:
      'Ongboy olarak, markanızın görsel kimliğini güçlendirmek için geniş bir yelpazede grafik tasarım hizmetleri sunuyoruz. Yaratıcı ve özgün tasarımlarımızla dikkat çekici ve etkileyici görseller oluşturuyoruz.',
    openGraph: {
      title: 'Ongboy | Grafik Tasarım',
      description:
        'Ongboy olarak, markanızın görsel kimliğini güçlendirmek için geniş bir yelpazede grafik tasarım hizmetleri sunuyoruz. Yaratıcı ve özgün tasarımlarımızla dikkat çekici ve etkileyici görseller oluşturuyoruz.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/grafik.svg`,
          width: 800,
          height: 600,
          alt: 'Grafik Tasarım',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | Grafik Tasarım',
      description:
        'Ongboy olarak, markanızın görsel kimliğini güçlendirmek için geniş bir yelpazede grafik tasarım hizmetleri sunuyoruz. Yaratıcı ve özgün tasarımlarımızla dikkat çekici ve etkileyici görseller oluşturuyoruz.',
      image: `${siteUrl}/images/grafik.svg`,
    },
  };
}
