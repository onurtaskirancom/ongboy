import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-customBlack text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Aradığınız sayfa bulunamadı.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-customPurple text-white rounded-md hover:bg-customPurpleDark transition duration-300"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage;
