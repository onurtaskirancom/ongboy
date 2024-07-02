'use client';

import { MDXProvider } from '@mdx-js/react';

const components = {
  // You can add MDX components here
};

const HomePage = () => (
  <MDXProvider components={components}>
    <h1>Hoş Geldiniz</h1>
    <p>Firmamızın tanıtım sitesine hoş geldiniz.</p>
  </MDXProvider>
);

export default HomePage;
