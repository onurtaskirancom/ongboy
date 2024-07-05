import Link from 'next/link';
import WebDevelopmentSVG from '../components/svg/WebDevelopmentSVG';
import GraphicDesignSVG from '../components/svg/GraphicDesignSVG';
import SportsSVG from '../components/svg/SportsSVG';
import PersonalConsultingSVG from '../components/svg/PersonalConsultingSVG';

const ServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6">Hizmetlerimiz</h1>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <WebDevelopmentSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Web Yazılım</h2>
            <p className="mt-2 text-gray-400">
              Modern ve kullanıcı dostu web siteleri oluşturmak için
              gereksinimlerinizi karşılar.{' '}
              <Link href="/hizmetlerimiz/web-yazilim">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <GraphicDesignSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Grafik</h2>
            <p className="mt-2 text-gray-400">
              Markanızın görsel kimliğini güçlendirmek için geniş bir yelpazede
              çözümler sunar.{' '}
              <Link href="/hizmetlerimiz/grafik">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <SportsSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Spor</h2>
            <p className="mt-2 text-gray-400">
              Bireylerin fiziksel sağlıklarını ve performanslarını en üst düzeye
              çıkarmayı hedefler.{' '}
              <Link href="/hizmetlerimiz/spor">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <PersonalConsultingSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Kişisel Danışmanlık</h2>
            <p className="mt-2 text-gray-400">
              Bireylerin yaşam kalitesini artırmayı ve kişisel hedeflerine
              ulaşmalarını sağlamayı amaçlar.{' '}
              <Link href="/hizmetlerimiz/kisisel-danismanlik">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
