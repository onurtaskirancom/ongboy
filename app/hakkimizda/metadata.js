export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/hakkimizda`;

  return {
    title: 'Ongboy | Hakkımızda',
    description:
      'Ongboy, teknoloji ve yenilik ile sınırları zorlayan bir yazılım firmasıdır. Misyonumuz, müşterilerimize en iyi hizmeti sunmak ve onların başarılarını artırmak için yenilikçi çözümler geliştirmektir.',
    openGraph: {
      title: 'Ongboy | Hakkımızda',
      description:
        'Ongboy, teknoloji ve yenilik ile sınırları zorlayan bir yazılım firmasıdır. Misyonumuz, müşterilerimize en iyi hizmeti sunmak ve onların başarılarını artırmak için yenilikçi çözümler geliştirmektir.',
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
      site: '@Ongboy',
      title: 'Ongboy | Hakkımızda',
      description:
        'Ongboy, teknoloji ve yenilik ile sınırları zorlayan bir yazılım firmasıdır. Misyonumuz, müşterilerimize en iyi hizmeti sunmak ve onların başarılarını artırmak için yenilikçi çözümler geliştirmektir.',
      image: `${siteUrl}/images/ongboy-logo.png`,
    },
  };
}
