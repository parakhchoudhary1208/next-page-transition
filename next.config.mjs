/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
    output: 'export',
    distDir: 'out',
};

export default nextConfig;
