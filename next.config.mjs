/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/next-page-transition/' : '',
    output: 'export',
    distDir: 'out',
};

export default nextConfig;
