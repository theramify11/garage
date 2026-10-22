import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  // Silence the R3F 8.x unstable_act import warning (test-only internal,
  // not used at runtime — safe to stub out in production builds)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = config.resolve ?? {};
      config.resolve.alias = {
        ...(config.resolve.alias ?? {}),
      };
    }
    // Suppress the harmless unstable_act warning from @react-three/fiber 8.x
    config.ignoreWarnings = [
      ...(config.ignoreWarnings ?? []),
      /unstable_act/,
    ];
    return config;
  },
};

export default nextConfig;
