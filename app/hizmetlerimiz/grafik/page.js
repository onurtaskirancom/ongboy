import Image from "next/image";

const GrafikPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">Grafik Tasarım</h1>
      <Image
        src="/images/grafik.svg"
        alt="Logo"
        width={392}
        height={392}
        className="w-1/2 h-1/2 mx-auto mb-4"
      />
    </header>
    <main>
      <p className="text-lg mb-4">
        Grafik tasarım hizmetlerimiz, markanızın görsel kimliğini güçlendirmek
        için geniş bir yelpazede çözümler sunar. Yaratıcı ve özgün
        tasarımlarımızla dikkat çekici ve etkileyici görseller oluşturuyoruz.
        Grafik tasarım hizmetlerimiz şunları içerir:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg mb-2">
          <strong>Dergi:</strong> Dergi tasarımı ile okuyucularınıza görsel
          açıdan zengin ve ilgi çekici içerikler sunun.
        </li>
        <li className="text-lg mb-2">
          <strong>Katalog:</strong> Ürün ve hizmetlerinizi detaylı ve şık bir
          şekilde tanıtan katalog tasarımları.
        </li>
        <li className="text-lg mb-2">
          <strong>Kitap Mizanpaj:</strong> Kitaplarınız için profesyonel ve
          estetik mizanpaj tasarımları.
        </li>
        <li className="text-lg mb-2">
          <strong>Afiş, Broşür:</strong> Etkinliklerinizi ve kampanyalarınızı
          tanıtmak için etkileyici afiş ve broşür tasarımları.
        </li>
        <li className="text-lg mb-2">
          <strong>Kartvizit:</strong> İş ilişkilerinizi güçlendirecek,
          profesyonel ve yaratıcı kartvizit tasarımları.
        </li>
        <li className="text-lg">
          <strong>Logo Tasarım:</strong> Markanızın yüzünü temsil edecek, özgün
          ve akılda kalıcı logo tasarımları.
        </li>
      </ul>
    </main>
  </div>
);

export default GrafikPage;
