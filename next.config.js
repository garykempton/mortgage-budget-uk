/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mortgagebudgetuk.co.uk' }],
        destination: 'https://mortgagebudgetuk.co.uk/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
