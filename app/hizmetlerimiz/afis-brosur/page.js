import Image from 'next/image';
import ContactPanel from '../../components/ContactPanel';

const PosterBrochurePage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Afiş ve Broşür</h1>
      <Image
        src="/images/afis-brosur.svg"
        alt="Afiş ve Broşür"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Afiş ve broşür tasarım hizmetlerimiz, etkinliklerinizi ve
        kampanyalarınızı en etkileyici şekilde tanıtmanızı sağlar. Görsel olarak
        çekici ve bilgilendirici tasarımlar ile hedef kitlenize ulaşın.
      </p>
      <p className="text-lg mb-4">
        Etkinliklerinizi, ürünlerinizi veya hizmetlerinizi tanıtmak için
        profesyonel afiş ve broşür tasarımlarımızla fark yaratın.
      </p>
    </main>
    <ContactPanel />
  </div>
);

export default PosterBrochurePage;
