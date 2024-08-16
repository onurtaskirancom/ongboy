import RootLayoutClient from './RootLayoutClient';
import { generateMetadata } from './metadata';

export { generateMetadata };

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
