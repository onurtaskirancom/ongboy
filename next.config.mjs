// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
import withMDX from '@next/mdx';

const mdxOptions = {
  extension: /\.mdx?$/,
};

const nextConfig = withMDX(mdxOptions)({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

export default nextConfig;
