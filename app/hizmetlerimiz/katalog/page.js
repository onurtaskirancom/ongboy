import Image from 'next/image';

const CatalogPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Katalog</h1>
      <Image
        src="/images/katalog.svg"
        alt="Katalog"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Katalog tasarım hizmetlerimiz, ürün ve hizmetlerinizi etkili bir şekilde
        tanıtmak için profesyonel çözümler sunar. Estetik ve işlevsel tasarımlar
        ile müşteri kitlenize ulaşın.
      </p>
      <p className="text-lg mb-4">
        Kataloglarınızda markanızın değerlerini ve ürünlerinizi en iyi şekilde
        yansıtan özgün tasarımlar ile müşteri memnuniyetini artırın.
      </p>
    </main>
  </div>
);

export default CatalogPage;
