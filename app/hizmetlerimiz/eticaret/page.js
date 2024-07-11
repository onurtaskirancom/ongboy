import Image from 'next/image';

const EcommercePage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">E-Ticaret</h1>
      <Image
        src="/images/eticaret.svg"
        alt="Eticaret"
        width={392}
        height={392}
        className="w-1/3 h-1/3 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        E-ticaret çözümlerimiz, işletmenizin dijital pazarda güçlü bir varlık
        göstermesini sağlar. Kullanıcı dostu ve güvenli platformlar oluşturarak,
        müşterilerinize kesintisiz bir alışveriş deneyimi sunuyoruz.
      </p>
      <p className="text-lg mb-4">
        Özgün tasarımlar ve işlevsel özelliklerle donatılmış e-ticaret
        sitelerimiz, satışlarınızı artırmak ve müşteri memnuniyetini en üst
        düzeye çıkarmak için optimize edilmiştir.
      </p>
    </main>
  </div>
);

export default EcommercePage;
