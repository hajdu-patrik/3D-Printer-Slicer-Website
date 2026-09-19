/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ['192.168.56.1'],
  images: {
    formats: ['image/avif', 'image/webp'],
    // Adds a bucket close to the 18-20px header/CTA icons so they are not forced up to the
    // default 32px floor (keeps served bytes within ~1.6x of their rendered CSS size).
    imageSizes: [24, 32, 48, 64, 96, 128, 256, 384],
    // The default quality (75) softens the fine text in the round logo at small AVIF/WebP
    // sizes; the logo usages request 90 to keep it crisp (still tiny in bytes at this size).
    qualities: [75, 90]
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
