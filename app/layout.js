'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import './globals.css';
import { metadata } from './config';
import DropdownMenu from './components/DropdownMenu';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="tr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} bg-customBlack text-white`}>
        <nav className="bg-customGray p-4 text-white flex items-center justify-between fixed w-full top-0 z-50 shadow-md px-8">
          <img src="/images/ongboy-logo.svg" alt="Logo" className="h-12" />
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
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                )}
              </svg>
            </button>
          </div>
          <ul
            className={`flex-col lg:flex-row lg:flex items-center space-x-4 ${
              menuOpen ? 'flex' : 'hidden'
            } lg:flex`}
          >
            <li>
              <Link
                href="/"
                className="hover:border-b-2 hover:border-customPurple transition duration-300"
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="/hakkimizda"
                className="hover:border-b-2 hover:border-customPurple transition duration-300"
              >
                Hakkımızda
              </Link>
            </li>
            <DropdownMenu />
            <li>
              <Link
                href="/blog"
                className="hover:border-b-2 hover:border-customPurple transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/iletisim"
                className="hover:border-b-2 hover:border-customPurple transition duration-300"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
        <main className="pt-28 p-4 relative z-10">{children}</main>
        <footer className="bg-customGray text-white p-4 text-center">
          <p>© {currentYear} Yazılım Firması</p>
        </footer>
      </body>
    </html>
  );
}
