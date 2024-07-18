import Image from 'next/image';
import ContactPanel from '../../components/ContactPanel';

const BusinessCardDesignPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Kartvizit Tasarım</h1>
      <Image
        src="/images/kartvizit-tasarim.svg"
        alt="Kartvizit Tasarım"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Kartvizit tasarım hizmetlerimiz, iş ilişkilerinizi güçlendirecek
        profesyonel ve yaratıcı çözümler sunar. Markanızın kimliğini yansıtan
        özgün kartvizit tasarımlarımız ile fark yaratın.
      </p>
      <p className="text-lg mb-4">
        Yaratıcı ve etkileyici kartvizit tasarımlarımız, iş dünyasında ilk
        izleniminizi güçlendirmenize yardımcı olur.
      </p>
    </main>
    <ContactPanel />
  </div>
);

export default BusinessCardDesignPage;
