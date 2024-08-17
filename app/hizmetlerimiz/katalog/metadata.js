export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/katalog`;

  return {
    title: 'Ongboy | Katalog Tasarım',
    description:
      'Ongboy olarak, ürün ve hizmetlerinizi etkili bir şekilde tanıtmak için profesyonel katalog tasarım çözümleri sunuyoruz. Estetik ve işlevsel tasarımlar ile müşteri kitlenize ulaşın.',
    openGraph: {
      title: 'Ongboy | Katalog Tasarım',
      description:
        'Ongboy olarak, ürün ve hizmetlerinizi etkili bir şekilde tanıtmak için profesyonel katalog tasarım çözümleri sunuyoruz. Estetik ve işlevsel tasarımlar ile müşteri kitlenize ulaşın.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/katalog.svg`,
          width: 800,
          height: 600,
          alt: 'Katalog Tasarım',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Ongboy',
      title: 'Ongboy | Katalog Tasarım',
      description:
        'Ongboy olarak, ürün ve hizmetlerinizi etkili bir şekilde tanıtmak için profesyonel katalog tasarım çözümleri sunuyoruz. Estetik ve işlevsel tasarımlar ile müşteri kitlenize ulaşın.',
      image: `${siteUrl}/images/katalog.svg`,
    },
  };
}
