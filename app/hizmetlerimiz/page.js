import Link from 'next/link';
import WebDevelopmentSVG from '../components/svg/WebDevelopmentSVG';
import GraphicDesignSVG from '../components/svg/GraphicDesignSVG';
import ECommerceSVG from '../components/svg/EcommerceSVG';
import CorporateWebSVG from '../components/svg/CorporateWebSVG';
import CatalogDesignSVG from '../components/svg/CatalogDesignSVG';
import BookLayoutSVG from '../components/svg/BookLayoutSVG';
import LogoDesignSVG from '../components/svg/LogoDesignSVG';
import BlogCMSVG from '../components/svg/BlogCMSVG';
import MagazineSVG from '../components/svg/MagazineSVG';
import PosterBrochureSVG from '../components/svg/PosterBrochureSVG';
import BusinessCardSVG from '../components/svg/BusinessCardSVG';

const ServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md">
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
          <ECommerceSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">E-Ticaret</h2>
            <p className="mt-2 text-gray-400">
              Ürünlerinizi online satmanıza olanak tanıyan güvenli ve kullanıcı
              dostu e-ticaret platformları.{' '}
              <Link href="/hizmetlerimiz/eticaret">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CorporateWebSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Kurumsal Web Siteleri</h2>
            <p className="mt-2 text-gray-400">
              Şirketinizin online yüzünü oluşturan profesyonel web siteleri.{' '}
              <Link href="/hizmetlerimiz/kurumsal-web-siteleri">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BlogCMSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">
              Blog ve İçerik Yönetim Sistemleri
            </h2>
            <p className="mt-2 text-gray-400">
              Kolayca içerik yönetimi yapabilmenizi sağlayan blog ve CMS
              sistemleri.{' '}
              <Link href="/hizmetlerimiz/blog-icerik-yonetim-sistemleri">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MagazineSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Dergi</h2>
            <p className="mt-2 text-gray-400">
              Dergi tasarımı ile okuyucularınıza görsel açıdan zengin ve ilgi
              çekici içerikler sunun.{' '}
              <Link href="/hizmetlerimiz/dergi">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <CatalogDesignSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Katalog</h2>
            <p className="mt-2 text-gray-400">
              Ürün ve hizmetlerinizi detaylı ve şık bir şekilde tanıtan katalog
              tasarımları.{' '}
              <Link href="/hizmetlerimiz/katalog">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BookLayoutSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Kitap Mizanpaj</h2>
            <p className="mt-2 text-gray-400">
              Kitaplarınız için profesyonel ve estetik mizanpaj tasarımları.{' '}
              <Link href="/hizmetlerimiz/kitap-mizanpaj">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <PosterBrochureSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Afiş, Broşür</h2>
            <p className="mt-2 text-gray-400">
              Etkinliklerinizi ve kampanyalarınızı tanıtmak için etkileyici afiş
              ve broşür tasarımları.{' '}
              <Link href="/hizmetlerimiz/afis-brosur">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BusinessCardSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Kartvizit Tasarım</h2>
            <p className="mt-2 text-gray-400">
              İş ilişkilerinizi güçlendirecek, profesyonel ve yaratıcı kartvizit
              tasarımları.{' '}
              <Link href="/hizmetlerimiz/kartvizit-tasarim">
                <span className="text-customPurple hover:underline">
                  Daha Fazla
                </span>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <LogoDesignSVG className="w-16 h-16" />
          <div>
            <h2 className="text-2xl font-semibold">Logo Tasarım</h2>
            <p className="mt-2 text-gray-400">
              Markanızın yüzünü temsil edecek, özgün ve akılda kalıcı logo
              tasarımları.{' '}
              <Link href="/hizmetlerimiz/logo-tasarim">
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
