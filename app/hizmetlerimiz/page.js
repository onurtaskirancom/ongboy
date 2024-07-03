'use client';

import { useEffect, useState } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import WebDevelopmentSVG from '../components/svg/WebDevelopmentSVG';
import GraphicDesignSVG from '../components/svg/GraphicDesignSVG';
import SportsSVG from '../components/svg/SportsSVG';
import PersonalConsultingSVG from '../components/svg/PersonalConsultingSVG';

const components = {
  WebDevelopmentSVG,
  GraphicDesignSVG,
  SportsSVG,
  PersonalConsultingSVG,
};

const ServicesPage = () => {
  const [mdxSource, setMdxSource] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMdxContent = async () => {
      try {
        const response = await fetch('/api/mdx?slug=hizmetlerimiz');
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

  return (
    <div className="services-container">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default ServicesPage;
