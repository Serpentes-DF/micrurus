import type { NextConfig } from "next";
const isDev = process.env.NODE_ENV == 'development';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: !isDev ? '/micrurus' : '',
    assetPrefix: !isDev ? '/micrurus/' : '', // Adicione isso! (com barra no final)
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
