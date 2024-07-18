import Image from 'next/image';
import ContactPanel from '../../components/ContactPanel';

const CorporateWebsitesPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Kurumsal Web Siteleri</h1>
      <Image
        src="/images/kurumsal-web-siteleri.svg"
        alt="Kurumsal Web Siteleri"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Kurumsal web sitesi çözümlerimiz, şirketinizin dijital dünyada
        profesyonel bir imaj sergilemesini sağlar. Modern ve işlevsel tasarımlar
        ile markanızın değerlerini en iyi şekilde yansıtıyoruz.
      </p>
      <p className="text-lg mb-4">
        Şirketinizin hizmetlerini, ürünlerini ve misyonunu en etkili şekilde
        sunmak için optimize edilmiş kurumsal web sitelerimiz, kullanıcı
        deneyimini ön planda tutarak ziyaretçilerinizi müşteriye dönüştürür.
      </p>
    </main>
    <ContactPanel />
  </div>
);

export default CorporateWebsitesPage;
