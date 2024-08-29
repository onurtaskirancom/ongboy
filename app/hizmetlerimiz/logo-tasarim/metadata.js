export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/logo-tasarim`;

  return {
    title: 'Ongboy | Logo Tasarım',
    description:
      'Ongboy olarak, markanızın kimliğini güçlendirecek özgün ve akılda kalıcı logo tasarımları sunuyoruz. Yaratıcı logo tasarımlarımızla markanızın tanınırlığını artırın.',
    openGraph: {
      title: 'Ongboy | Logo Tasarım',
      description:
        'Ongboy olarak, markanızın kimliğini güçlendirecek özgün ve akılda kalıcı logo tasarımları sunuyoruz. Yaratıcı logo tasarımlarımızla markanızın tanınırlığını artırın.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/logo-tasarim.svg`,
          width: 800,
          height: 600,
          alt: 'Logo Tasarım',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | Logo Tasarım',
      description:
        'Ongboy olarak, markanızın kimliğini güçlendirecek özgün ve akılda kalıcı logo tasarımları sunuyoruz. Yaratıcı logo tasarımlarımızla markanızın tanınırlığını artırın.',
      image: `${siteUrl}/images/logo-tasarim.svg`,
    },
  };
}
