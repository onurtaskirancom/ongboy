import Image from 'next/image';
import { generateMetadata } from './metadata';

export { generateMetadata };

const AboutPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-6">Hakkımızda</h1>
    <Image
      src="/images/ongboy-logo.svg"
      alt="Logo"
      width={650}
      height={250}
      className="mx-auto mb-4"
      style={{ width: '650px', height: '250px', objectFit: 'contain' }}
    />
    <p className="text-lg mb-4">
      Biz, teknoloji ve yenilik ile sınırları zorlayan bir yazılım firmasıyız.
      Misyonumuz, müşterilerimize en iyi hizmeti sunmak ve onların başarılarını
      artırmak için yenilikçi çözümler geliştirmektir.
    </p>
    <p className="text-lg mb-4">
      Ekibimiz, alanında uzman profesyonellerden oluşmaktadır. Her biri, en son
      teknolojileri ve en iyi uygulamaları kullanarak müşteri memnuniyetini en
      üst düzeyde tutmayı hedefler.
    </p>
    <p className="text-lg mb-4">
      Vizyonumuz, dünya çapında tanınan ve güvenilen bir yazılım firması
      olmaktır. Sürekli olarak kendimizi geliştiriyor ve sektördeki yenilikleri
      yakından takip ediyoruz.
    </p>
    <p className="text-lg">
      Bizi tercih ettiğiniz için teşekkür ederiz. Başarıya giden yolda sizlere
      destek olmaktan mutluluk duyuyoruz.
    </p>
  </div>
);

export default AboutPage;
