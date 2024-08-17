import Image from 'next/image';
import ContactPanel from '../../components/ContactPanel';
import { generateMetadata } from './metadata'; 

export { generateMetadata }; 

const MagazinePage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Dergi</h1>
      <Image
        src="/images/dergi.svg"
        alt="Dergi"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Dergi tasarım hizmetlerimiz, içeriklerinizi görsel olarak
        zenginleştirerek okuyucularınıza etkileyici bir deneyim sunar. Yaratıcı
        ve profesyonel tasarımlar ile derginizi öne çıkarıyoruz.
      </p>
      <p className="text-lg mb-4">
        Dergilerinizin her sayfasında markanızın kimliğini yansıtacak özgün
        tasarımlar ile okuyucularınıza benzersiz bir deneyim yaşatın.
      </p>
    </main>
    <ContactPanel />
  </div>
);

export default MagazinePage;
