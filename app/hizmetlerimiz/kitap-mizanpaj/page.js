import Image from 'next/image';

const BookLayoutPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Kitap Mizanpaj</h1>
      <Image
        src="/images/kitap-mizanpaj.svg"
        alt="Kitap Mizanpaj"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Kitap mizanpaj hizmetlerimiz, kitaplarınızın profesyonel ve estetik bir
        görünüme sahip olmasını sağlar. İçerik düzenlemeleri ve sayfa
        tasarımları ile okuyucularınıza kaliteli bir okuma deneyimi sunuyoruz.
      </p>
      <p className="text-lg mb-4">
        Kitaplarınızın her sayfasında görsel tutarlılığı ve estetiği ön planda
        tutarak, okuyucularınıza profesyonel bir yayın sunabilirsiniz.
      </p>
    </main>
  </div>
);

export default BookLayoutPage;
