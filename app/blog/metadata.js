export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/blog`;

  return {
    title: 'Ongboy | Yazılım ve Grafik Hizmetleri Blogu',
    description:
      'Ongboy blogunda, yazılım geliştirme, grafik tasarım ve dijital çözümlerle ilgili en güncel ve faydalı bilgileri bulabilirsiniz. Sektörümüzdeki yenilikler ve uzman görüşleri ile dolu içeriklerimizi keşfedin.',
    openGraph: {
      title: 'Ongboy | Yazılım ve Grafik Hizmetleri Blogu',
      description:
        'Ongboy blogunda, yazılım geliştirme, grafik tasarım ve dijital çözümlerle ilgili en güncel ve faydalı bilgileri bulabilirsiniz. Sektörümüzdeki yenilikler ve uzman görüşleri ile dolu içeriklerimizi keşfedin.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/blog-cover.jpg`,
          width: 800,
          height: 600,
          alt: 'Ongboy Blog',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | Yazılım ve Grafik Hizmetleri Blogu',
      description:
        'Ongboy blogunda, yazılım geliştirme, grafik tasarım ve dijital çözümlerle ilgili en güncel ve faydalı bilgileri bulabilirsiniz. Sektörümüzdeki yenilikler ve uzman görüşleri ile dolu içeriklerimizi keşfedin.',
      image: `${siteUrl}/images/blog-cover.jpg`,
    },
  };
}
