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
      <button className="focus:outline-none">Hizmetler</button>
      <ul
        className={`absolute left-0 ${
          isDropdownVisible ? 'block' : 'hidden'
        } bg-gray-800 p-2 mt-2 space-y-2 rounded shadow-lg`}
      >
        <li>
          <Link
            href="/hizmetlerimiz/web-yazilim"
            className="block px-4 py-2 hover:bg-gray-700 rounded"
          >
            Web Yazılım
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/grafik"
            className="block px-4 py-2 hover:bg-gray-700 rounded"
          >
            Grafik
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/spor"
            className="block px-4 py-2 hover:bg-gray-700 rounded"
          >
            Spor
          </Link>
        </li>
        <li>
          <Link
            href="/hizmetlerimiz/kisisel-danismanlik"
            className="block px-4 py-2 hover:bg-gray-700 rounded"
          >
            Kişisel Danışmanlık 
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default DropdownMenu;
