'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownVisible(true);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200);
  };

  return (
    <li
      className="relative group"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <Link
        href="/hizmetlerimiz"
        className="focus:outline-none hover:border-b-4 hover:border-customPurple transition duration-300"
      >
        Hizmetler
      </Link>
      <ul
        className={`absolute right-0 ${
          isDropdownVisible ? 'block' : 'hidden'
        } bg-customGray p-2 mt-2 space-y-2 rounded shadow-lg z-20`}
      >
        <li>
          <Link
            href="/hizmetlerimiz/web-yazilim"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Web Yazılım
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/grafik"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Grafik
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/eticaret"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Eticaret
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/kurumsal-web-siteleri"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Kurumsal Web Siteleri
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/blog-icerik-yonetim-sistemleri"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Blog ve İçerik Yönetim Sistemleri
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/dergi"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Dergi
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/katalog"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Katalog
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/kitap-mizanpaj"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Kitap Mizanpaş
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/afis-brosur"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Afiş, Broşür
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/kartvizit-tasarim"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Kartvizit Tasarım
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/logo-tasarim"
            className="block px-4 py-2 hover:bg-gray-700 rounded whitespace-nowrap"
          >
            Logo Tasarım
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default DropdownMenu;
