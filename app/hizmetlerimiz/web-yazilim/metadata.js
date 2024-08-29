export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/web-yazilim`;

  return {
    title: 'Ongboy | Web Yazılım',
    description:
      'Ongboy olarak, modern ve kullanıcı dostu web yazılım çözümleri sunuyoruz. Kurumsal web siteleri, e-ticaret çözümleri, blog ve içerik yönetim sistemleri, web uygulamaları ve sürekli bakım ve destek hizmetleri sağlıyoruz.',
    openGraph: {
      title: 'Ongboy | Web Yazılım',
      description:
        'Ongboy olarak, modern ve kullanıcı dostu web yazılım çözümleri sunuyoruz. Kurumsal web siteleri, e-ticaret çözümleri, blog ve içerik yönetim sistemleri, web uygulamaları ve sürekli bakım ve destek hizmetleri sağlıyoruz.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/web-gelistirme.svg`,
          width: 800,
          height: 600,
          alt: 'Web Yazılım',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | Web Yazılım',
      description:
        'Ongboy olarak, modern ve kullanıcı dostu web yazılım çözümleri sunuyoruz. Kurumsal web siteleri, e-ticaret çözümleri, blog ve içerik yönetim sistemleri, web uygulamaları ve sürekli bakım ve destek hizmetleri sağlıyoruz.',
      image: `${siteUrl}/images/web-gelistirme.svg`,
    },
  };
}
