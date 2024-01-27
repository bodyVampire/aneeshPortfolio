/** @type {import('next').NextConfig} */
const nextConfig = {
  
    basePath: '/portfolio',
    

     assetPrefix: 'portfolio',
  
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
          ],
        },
      ]
    },
  }
  
  module.exports = nextConfig;
  
