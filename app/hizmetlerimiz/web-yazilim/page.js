import Image from "next/image";

const WebYazilimPage = () => (
  <div className="max-w-4xl mx-auto p-6 bg-customGray text-white rounded-lg shadow-md mt-10">
    <h1 className="text-3xl font-bold mb-6">Web Yazılım</h1>
    <Image
      src="/images/web-gelistirme.svg"
      alt="Logo"
      width={392}
      height={392}
      className="w-1/2 h-1/2 mx-auto mb-4"
    />
    <p className="text-lg">
      Modern ve kullanıcı dostu web siteleri oluşturmak için gereksinimlerinizi
      karşılar.
    </p>
  </div>
);

export default WebYazilimPage;
