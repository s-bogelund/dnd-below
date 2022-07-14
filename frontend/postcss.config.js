const { join } = require('path')

module.exports = {
	plugins: {
		'tailwindcss/nesting': {},
		tailwindcss: {},
		autoprefixer: {},
		// tailwindcss: {
		// 	config: join(__dirname, 'tailwind.config.js'),
		// },
	},
}
