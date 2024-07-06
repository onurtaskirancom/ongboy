import Image from "next/image";

const SporPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
    <header className="w-full text-center py-6">
      <h1 className="text-3xl font-bold mb-6">
        Spor Koçluğu ve Performans Yönetimi
      </h1>
      <Image
        src="/images/spor.svg"
        alt="Logo"
        width={192}
        height={192}
        className="w-2/3 h-48 mx-auto mb-4"
      />
    </header>

    <main>
      <p className="text-lg mb-4">
        Kişisel Gelişim ve Danışmanlık hizmetlerimiz, yaşam kalitenizi artırmak
        ve hedeflerinize ulaşmak için profesyonel destek ve rehberlik sunar.
      </p>
      <p className="text-lg mb-4">
        Uzman danışmanlarımız, kişisel ve profesyonel gelişiminizi desteklemek
        için size özel çözümler sunar.
      </p>
    </main>
  </div>
);

export default SporPage;


