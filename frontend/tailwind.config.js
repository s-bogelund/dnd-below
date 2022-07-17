/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: [
		'./pages/**/*.{html,js,ts,jsx,tsx}',
		'./components/**/**/**/*.{html,js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1367px', // iPad Pro landscape + 1
		},
		extend: {
			gridTemplateRows: {
				7: 'repeat(7, minmax(0, 1fr))',
				8: 'repeat(8, minmax(0, 1fr))',
				9: 'repeat(9, minmax(0, 1fr))',
				10: 'repeat(10, minmax(0, 1fr))',
			},
			gridTemplateColumns: {
				'stat-line': 'minmax(20px, 25px) minmax(20px, 28px) 1fr',
				'stat-lineLg': 'minmax(20px, 30px) minmax(20px, 40px) 1fr',
				'stat-lineXl': 'minmax(20px, 35px) minmax(20px, 45px) 1fr',
			},

			gridRow: {
				'span-8': 'span 8 / span 8',
				'span-9': 'span 9 / span 9',
				'span-10': 'span 10 / span 10',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('daisyui'),
	],
	// require('daisyui')
	daisyui: {
		themes: [
			'coffee',
			'garden',
			{
				night: {
					...require('daisyui/src/colors/themes')['[data-theme=night]'],
					primary: '#216fb4',
					secondary: '#5964af',
					accent: '#7b426e',
					warning: '#ddb04f',
					success: '#27b1a3',
					info: '#0d98d6',
				},
			},
			{
				forest: {
					...require('daisyui/src/colors/themes')['[data-theme=forest]'],
				},
			},
			'cmyk',
			'halloween',
			'dark',
		],
	},
}
// ['coffee', 'halloween', 'cmyk', 'night', 'garden', 'forest']
