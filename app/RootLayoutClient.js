'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import './globals.css';
import DropdownMenu from './components/DropdownMenu';
import CanonicalHead from './components/CanonicalHead';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayoutClient({ children }) {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <CanonicalHead
        siteUrl={process.env.SITE_URL || 'http://localhost:3000'}
      />
      <nav className="bg-customGray p-4 text-white flex items-center justify-between fixed w-full top-0 z-50 shadow-md px-8">
        <Link href="/" className="flex items-center ml-4">
          <img
            src="/images/ongboy-logo.svg"
            alt="Ongboy Logo"
            className="h-12 cursor-pointer"
          />
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`flex-col lg:flex-row lg:flex items-center space-x-4 ${
            menuOpen ? 'flex' : 'hidden'
          } lg:flex mr-4`}
        >
          <li>
            <Link
              href="/"
              className="hover:border-b-4 hover:border-customPurple transition duration-300 px-2"
            >
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link
              href="/hakkimizda"
              className="hover:border-b-4 hover:border-customPurple transition duration-300 px-2"
            >
              Hakkımızda
            </Link>
          </li>
          <DropdownMenu />
          <li>
            <Link
              href="/blog"
              className="hover:border-b-4 hover:border-customPurple transition duration-300 px-2"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/iletisim"
              className="hover:border-b-4 hover:border-customPurple transition duration-300 px-2"
            >
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
      <main className="pt-28 p-4 relative z-10">{children}</main>
      <footer className="bg-customGray text-white p-4 text-center flex flex-col items-center md:flex-row md:justify-center">
        <Link href="/" className="flex items-center ml-4">
          <img
            src="/images/ongboy-footer-logo.svg"
            alt="Ongboy Logo"
            className="h-5 cursor-pointer mr-2"
          />
          <p>© {currentYear} Ongboy</p>
        </Link>
      </footer>
    </div>
  );
}
