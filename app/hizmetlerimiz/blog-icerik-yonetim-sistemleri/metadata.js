export async function generateMetadata() {
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const canonicalUrl = `${siteUrl}/blog-icerik-yonetim-sistemleri`;

  return {
    title: 'Ongboy | Blog ve İçerik Yönetim Sistemleri',
    description:
      'Ongboy olarak, blog ve içerik yönetim sistemlerimiz ile içeriğinizi kolayca yönetmenizi ve yayınlamanızı sağlıyoruz. Kullanıcı dostu arayüzler ve SEO dostu yapılar ile dijital stratejilerinizi en etkili şekilde hayata geçirmenize olanak tanıyoruz.',
    openGraph: {
      title: 'Ongboy | Blog ve İçerik Yönetim Sistemleri',
      description:
        'Ongboy olarak, blog ve içerik yönetim sistemlerimiz ile içeriğinizi kolayca yönetmenizi ve yayınlamanızı sağlıyoruz. Kullanıcı dostu arayüzler ve SEO dostu yapılar ile dijital stratejilerinizi en etkili şekilde hayata geçirmenize olanak tanıyoruz.',
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/blog-icerik-yonetim-sistemleri.svg`,
          width: 800,
          height: 600,
          alt: 'Blog ve İçerik Yönetim Sistemleri',
        },
      ],
      site_name: 'Ongboy',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ongboycom',
      title: 'Ongboy | Blog ve İçerik Yönetim Sistemleri',
      description:
        'Ongboy olarak, blog ve içerik yönetim sistemlerimiz ile içeriğinizi kolayca yönetmenizi ve yayınlamanızı sağlıyoruz. Kullanıcı dostu arayüzler ve SEO dostu yapılar ile dijital stratejilerinizi en etkili şekilde hayata geçirmenize olanak tanıyoruz.',
      image: `${siteUrl}/images/blog-icerik-yonetim-sistemleri.svg`,
    },
  };
}
