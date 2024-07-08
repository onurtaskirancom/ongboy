import Image from 'next/image';

const BlogContentManagementPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">
        Blog ve İçerik Yönetim Sistemleri
      </h1>
      <Image
        src="/images/blog-icerik-yonetim-sistemleri.svg"
        alt="Blog ve İçerik Yönetim Sistemleri"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Blog ve içerik yönetim sistemlerimiz, içeriğinizi kolayca yönetmenizi ve
        yayınlamanızı sağlar. Kullanıcı dostu arayüzler ile içerik üretim
        sürecinizi hızlandırıyoruz.
      </p>
      <p className="text-lg mb-4">
        SEO dostu yapıları ve esnek yönetim seçenekleri ile blog ve içerik
        yönetim sistemlerimiz, dijital stratejilerinizi en etkili şekilde hayata
        geçirmenize olanak tanır.
      </p>
    </main>
  </div>
);

export default BlogContentManagementPage;
