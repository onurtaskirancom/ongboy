// app/iletisim/metadata.js
export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/iletisim`;

  return {
    title: 'Ongboy | İletişim',
    description:
      'Ongboy ile iletişime geçin. Teknoloji ve yazılım çözümleri hakkında bilgi almak için bizimle iletişime geçin.',
    openGraph: {
      title: 'Ongboy | İletişim',
      description:
        'Ongboy ile iletişime geçin. Teknoloji ve yazılım çözümleri hakkında bilgi almak için bizimle iletişime geçin.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/ongboy-logo.png`,
          width: 800,
          height: 600,
          alt: 'Ongboy Logo',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | İletişim',
      description:
        'Ongboy ile iletişime geçin. Teknoloji ve yazılım çözümleri hakkında bilgi almak için bizimle iletişime geçin.',
      image: `${siteUrl}/images/ongboy-logo.png`,
    },
  };
}
