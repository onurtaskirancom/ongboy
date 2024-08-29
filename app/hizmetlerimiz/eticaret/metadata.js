export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/eticaret`;

  return {
    title: 'Ongboy | E-Ticaret Çözümleri',
    description:
      'Ongboy olarak, kullanıcı dostu ve güvenli e-ticaret platformları oluşturarak işletmenizin dijital pazarda güçlü bir varlık göstermesini sağlıyoruz. Özgün tasarımlar ve işlevsel özelliklerle donatılmış e-ticaret siteleri sunuyoruz.',
    openGraph: {
      title: 'Ongboy | E-Ticaret Çözümleri',
      description:
        'Ongboy olarak, kullanıcı dostu ve güvenli e-ticaret platformları oluşturarak işletmenizin dijital pazarda güçlü bir varlık göstermesini sağlıyoruz. Özgün tasarımlar ve işlevsel özelliklerle donatılmış e-ticaret siteleri sunuyoruz.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/eticaret.svg`,
          width: 800,
          height: 600,
          alt: 'E-Ticaret',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | E-Ticaret Çözümleri',
      description:
        'Ongboy olarak, kullanıcı dostu ve güvenli e-ticaret platformları oluşturarak işletmenizin dijital pazarda güçlü bir varlık göstermesini sağlıyoruz. Özgün tasarımlar ve işlevsel özelliklerle donatılmış e-ticaret siteleri sunuyoruz.',
      image: `${siteUrl}/images/eticaret.svg`,
    },
  };
}
