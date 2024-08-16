// app/metadata.js
export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}`;

  return {
    title: 'Ongboy | Yazılım ve Tasarım Hizmetleri',
    description:
      'Ongboy, teknoloji ve yenilik ile sınırları zorlayan, müşterilerine en iyi hizmeti sunmayı hedefleyen bir yazılım firmasıdır. Grafik tasarım, dergi tasarımı, kitap tasarımı ve katalog hizmetleri de sunmaktayız.',
    openGraph: {
      title: 'Ongboy | Yazılım ve Tasarım Hizmetleri',
      description:
        'Ongboy, teknoloji ve yenilik ile sınırları zorlayan, müşterilerine en iyi hizmeti sunmayı hedefleyen bir yazılım firmasıdır. Grafik tasarım, dergi tasarımı, kitap tasarımı ve katalog hizmetleri de sunmaktayız.',
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
      title: 'Ongboy | Yazılım ve Tasarım Hizmetleri',
      description:
        'Ongboy, teknoloji ve yenilik ile sınırları zorlayan, müşterilerine en iyi hizmeti sunmayı hedefleyen bir yazılım firmasıdır. Grafik tasarım, dergi tasarımı, kitap tasarımı ve katalog hizmetleri de sunmaktayız.',
      image: `${siteUrl}/images/ongboy-logo.png`,
    },
  };
}
