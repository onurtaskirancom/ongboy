import withMDX from '@next/mdx';

const mdxOptions = {
  extension: /\.mdx?$/,
};

const nextConfig = withMDX(mdxOptions)({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
});

export default nextConfig;
