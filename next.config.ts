// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coffee-shoppage.netlify.app',
        // Opcional: você pode especificar portas ou caminhos
        // port: '',
        // pathname: '/imagens/**',
      },
      {
        protocol: 'https',
        hostname: 'elements-resized.envatousercontent.com',
        // Opcional: você pode especificar portas ou caminhos
        // port: '',
        // pathname: '/imagens/**',
      },
    ],
  },
};