import Image from 'next/image';
import ContactPanel from '../../components/ContactPanel';
import { generateMetadata } from './metadata'; 

export { generateMetadata }; 

const WebDevelopmentPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Web Yazılım</h1>
      <Image
        src="/images/web-gelistirme.svg"
        alt="Logo"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Web yazılım hizmetlerimiz, modern ve kullanıcı dostu çözümler sunarak
        dijital dünyada varlık göstermenin en iyi yolunu sağlar. Hizmetlerimiz
        şunları içerir:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg mb-2">
          <strong>Kurumsal Web Siteleri:</strong> Şirketinizin online yüzünü
          oluşturan profesyonel web siteleri.
        </li>
        <li className="text-lg mb-2">
          <strong>E-Ticaret Çözümleri:</strong> Ürünlerinizi online satmanıza
          olanak tanıyan güvenli ve kullanıcı dostu e-ticaret platformları.
        </li>
        <li className="text-lg mb-2">
          <strong>Blog ve İçerik Yönetim Sistemleri:</strong> Kolayca içerik
          yönetimi yapabilmenizi sağlayan blog ve CMS sistemleri.
        </li>
        <li className="text-lg mb-2">
          <strong>Web Uygulamaları:</strong> Özel ihtiyaçlarınıza göre
          tasarlanmış, iş süreçlerinizi optimize eden web tabanlı uygulamalar.
        </li>
        <li className="text-lg">
          <strong>Bakım ve Destek:</strong> Web sitenizin sorunsuz çalışmasını
          sağlamak için sürekli bakım ve teknik destek hizmetleri.
        </li>
      </ul>
    </main>
    <ContactPanel />
  </div>
);

export default WebDevelopmentPage;
