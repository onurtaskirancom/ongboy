'use client';

import { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';

const SportPage = () => {
  const [mdxSource, setMdxSource] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMdxContent = async () => {
      try {
        const response = await fetch('/api/mdx?slug=hizmetlerimiz/spor');
        if (!response.ok) {
          throw new Error(
            `Failed to fetch MDX content: ${response.statusText}`
          );
        }
        const mdxSource = await response.json();
        setMdxSource(mdxSource);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchMdxContent();
  }, []);

  if (error) {
    return <div>Hata: {error}</div>;
  }

  if (!mdxSource) {
    return <div>Loading...</div>;
  }

  return <MDXRemote {...mdxSource} />;
};

export default SportPage;
