import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { metadata } from './config';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/hakkimizda">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/hizmetlerimiz">Hizmetler</Link>
            </li>
          </ul>
        </nav>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2024 OngBoy</p>
        </footer>
      </body>
    </html>
  );
}
