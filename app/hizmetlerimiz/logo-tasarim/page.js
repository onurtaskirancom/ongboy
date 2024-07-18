import Image from 'next/image';
import ContactPanel from '../../components/ContactPanel';

const LogoDesignPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Logo Tasarım</h1>
      <Image
        src="/images/logo-tasarim.svg"
        alt="Logo Tasarım"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Logo tasarım hizmetlerimiz, markanızın yüzünü temsil edecek özgün ve
        akılda kalıcı çözümler sunar. Profesyonel logo tasarımlarımız ile
        markanızın kimliğini güçlendirin.
      </p>
      <p className="text-lg mb-4">
        Markanızın tanınırlığını artırmak ve müşterileriniz üzerinde kalıcı bir
        izlenim bırakmak için yaratıcı logo tasarımlarımızdan yararlanın.
      </p>
    </main>
    <ContactPanel />
  </div>
);

export default LogoDesignPage;
