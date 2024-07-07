import Link from 'next/link';
import ECommerceSVG from './components/svg/ECommerceSVG';
import CatalogDesignSVG from './components/svg/CatalogDesignSVG';
import LogoDesignSVG from './components/svg/LogoDesignSVG';
import CorporateWebSVG from './components/svg/CorporateWebSVG';

const HomePage = () => (
  <div className="min-h-screen bg-customGray text-white flex flex-col items-center justify-center p-6 relative">
    <header className="w-full text-center py-10 bg-customBlack relative overflow-hidden">
      <h1 className="text-5xl font-bold mb-4 relative z-10">
        Yenilikçi Çözümler, Güçlü İşbirlikleri
      </h1>
      <p className="text-xl relative z-10">
        Teknoloji ve yenilik ile sınırları zorlayan çözümler
      </p>
      <div className="absolute inset-0 flex justify-around items-center z-0">
        <img
          src="/images/ongboy-logo-h.svg"
          alt="Logo"
          className="w-56 h-56 mx-4 animate-logo-1 opacity-25"
        />
        <img
          src="/images/ongboy-logo-h.svg"
          alt="Logo"
          className="w-72 h-72 mx-4 animate-logo-2 opacity-25"
        />
        <img
          src="/images/ongboy-logo-h.svg"
          alt="Logo"
          className="w-64 h-64 mx-4 animate-logo-3 opacity-25"
        />
        <img
          src="/images/ongboy-logo-h.svg"
          alt="Logo"
          className="w-72 h-72 mx-4 animate-logo-4 opacity-25"
        />
        <img
          src="/images/ongboy-logo-h.svg"
          alt="Logo"
          className="w-64 h-64 mx-4 animate-logo-5 opacity-25"
        />
        <img
          src="/images/ongboy-logo-h.svg"
          alt="Logo"
          className="w-72 h-72 mx-4 animate-logo-6 opacity-25"
        />
      </div>
    </header>

    <main className="w-full flex-1 flex flex-col items-center justify-center relative z-10">
      <section className="max-w-4xl text-center my-10">
        <h2 className="text-3xl font-semibold mb-6">Hoş Geldiniz</h2>
        <p className="text-lg mb-4">
          Biz, müşterilerimize en iyi hizmeti sunmak için yenilikçi yazılım
          çözümleri geliştiriyoruz. Modern ve kullanıcı dostu web siteleri,
          grafik tasarımlar, spor koçluğu ve kişisel danışmanlık hizmetlerimizle
          yanınızdayız.
        </p>
        <p className="text-lg mb-4">
          Hizmetlerimiz hakkında daha fazla bilgi edinmek için aşağıdaki
          bağlantılara göz atın.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        <Link
          href="/hizmetlerimiz/web-yazilim"
          className="block bg-customPurple p-4 rounded-lg text-center hover:bg-customPurpleDark transition duration-300"
        >
          <div className="flex flex-col items-center">
            <CorporateWebSVG className="w-12 h-12 mb-2" />
            <h3 className="text-xl font-bold mb-2">Kurumsal Web Siteleri</h3>
            <p>
              Şirketinizin online yüzünü oluşturan profesyonel web siteleri.
            </p>
          </div>
        </Link>
        <Link
          href="/hizmetlerimiz/web-yazilim"
          className="block bg-customPurple p-4 rounded-lg text-center hover:bg-customPurpleDark transition duration-300"
        >
          <div className="flex flex-col items-center">
            <ECommerceSVG className="w-12 h-12 mb-2" />
            <h3 className="text-xl font-bold mb-2">E-Ticaret Çözümleri</h3>
            <p>
              Ürünlerinizi online satmanıza olanak tanıyan güvenli ve kullanıcı
              dostu e-ticaret platformları.
            </p>
          </div>
        </Link>
        <Link
          href="/hizmetlerimiz/grafik"
          className="block bg-customPurple p-4 rounded-lg text-center hover:bg-customPurpleDark transition duration-300"
        >
          <div className="flex flex-col items-center">
            <LogoDesignSVG className="w-12 h-12 mb-2" />
            <h3 className="text-xl font-bold mb-2">Logo Tasarım</h3>
            <p>
              Markanızın yüzünü temsil edecek, özgün ve akılda kalıcı logo
              tasarımları.
            </p>
          </div>
        </Link>
        <Link
          href="/hizmetlerimiz/grafik"
          className="block bg-customPurple p-4 rounded-lg text-center hover:bg-customPurpleDark transition duration-300"
        >
          <div className="flex flex-col items-center">
            <CatalogDesignSVG className="w-12 h-12 mb-2" />
            <h3 className="text-xl font-bold mb-2">Katalog Tasarımı</h3>
            <p>
              Ürün ve hizmetlerinizi detaylı ve şık bir şekilde tanıtan katalog
              tasarımları.
            </p>
          </div>
        </Link>
      </section>
    </main>

    <footer className="w-full text-center py-6 bg-customBlack">
      <p>© {new Date().getFullYear()} Yazılım Firması</p>
    </footer>
  </div>
);

export default HomePage;
