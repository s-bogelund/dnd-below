/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

// const nextConfig = withPWA({
// 	pwa: {
// 		dest: 'public',
// 		register: true,
// 		skipWaiting: true,
// 		runtimeCaching,
// 		buildExcludes: [/middleware-manifest.json$/],
// 	},
// 	reactStrictMode: true,
// })

// module.exports = nextConfig

const withPWA = require('next-pwa')({
	dest: 'public',
})

module.exports = withPWA({
	reactStrictMode: true,
})
