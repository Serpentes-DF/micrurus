import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: !isDev ? '/micrurus' : '',
    assetPrefix: !isDev ? '/micrurus/' : '', // Adicione isso! (com barra no final)
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
