export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/afis-brosur`;

  return {
    title: 'Ongboy | Afiş ve Broşür Tasarım',
    description:
      'Ongboy olarak, etkinliklerinizi ve kampanyalarınızı en etkileyici şekilde tanıtmanızı sağlayan profesyonel afiş ve broşür tasarım hizmetleri sunuyoruz. Görsel olarak çekici ve bilgilendirici tasarımlar ile hedef kitlenize ulaşın.',
    openGraph: {
      title: 'Ongboy | Afiş ve Broşür Tasarım',
      description:
        'Ongboy olarak, etkinliklerinizi ve kampanyalarınızı en etkileyici şekilde tanıtmanızı sağlayan profesyonel afiş ve broşür tasarım hizmetleri sunuyoruz. Görsel olarak çekici ve bilgilendirici tasarımlar ile hedef kitlenize ulaşın.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/afis-brosur.svg`,
          width: 800,
          height: 600,
          alt: 'Afiş ve Broşür',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Ongboy',
      title: 'Ongboy | Afiş ve Broşür Tasarım',
      description:
        'Ongboy olarak, etkinliklerinizi ve kampanyalarınızı en etkileyici şekilde tanıtmanızı sağlayan profesyonel afiş ve broşür tasarım hizmetleri sunuyoruz. Görsel olarak çekici ve bilgilendirici tasarımlar ile hedef kitlenize ulaşın.',
      image: `${siteUrl}/images/afis-brosur.svg`,
    },
  };
}
