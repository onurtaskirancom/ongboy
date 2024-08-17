export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/hizmetlerimiz`;

  return {
    title: 'Ongboy | Hizmetlerimiz',
    description:
      'Ongboy olarak, web yazılım, grafik tasarım, e-ticaret, kurumsal web siteleri, dergi tasarımı, katalog, kitap mizanpajı, afiş ve broşür, kartvizit ve logo tasarımı gibi birçok hizmet sunuyoruz.',
    openGraph: {
      title: 'Ongboy | Hizmetlerimiz',
      description:
        'Ongboy olarak, web yazılım, grafik tasarım, e-ticaret, kurumsal web siteleri, dergi tasarımı, katalog, kitap mizanpajı, afiş ve broşür, kartvizit ve logo tasarımı gibi birçok hizmet sunuyoruz.',
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
      title: 'Ongboy | Hizmetlerimiz',
      description:
        'Ongboy olarak, web yazılım, grafik tasarım, e-ticaret, kurumsal web siteleri, dergi tasarımı, katalog, kitap mizanpajı, afiş ve broşür, kartvizit ve logo tasarımı gibi birçok hizmet sunuyoruz.',
      image: `${siteUrl}/images/ongboy-logo.png`,
    },
  };
}
