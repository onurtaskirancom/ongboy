export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/kartvizit-tasarim`;

  return {
    title: 'Ongboy | Kartvizit Tasarım',
    description:
      'Ongboy olarak, iş ilişkilerinizi güçlendirecek profesyonel ve yaratıcı kartvizit tasarım hizmetleri sunuyoruz. Markanızın kimliğini yansıtan özgün kartvizit tasarımlarımız ile fark yaratın.',
    openGraph: {
      title: 'Ongboy | Kartvizit Tasarım',
      description:
        'Ongboy olarak, iş ilişkilerinizi güçlendirecek profesyonel ve yaratıcı kartvizit tasarım hizmetleri sunuyoruz. Markanızın kimliğini yansıtan özgün kartvizit tasarımlarımız ile fark yaratın.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/kartvizit-tasarim.svg`,
          width: 800,
          height: 600,
          alt: 'Kartvizit Tasarım',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Ongboy',
      title: 'Ongboy | Kartvizit Tasarım',
      description:
        'Ongboy olarak, iş ilişkilerinizi güçlendirecek profesyonel ve yaratıcı kartvizit tasarım hizmetleri sunuyoruz. Markanızın kimliğini yansıtan özgün kartvizit tasarımlarımız ile fark yaratın.',
      image: `${siteUrl}/images/kartvizit-tasarim.svg`,
    },
  };
}
