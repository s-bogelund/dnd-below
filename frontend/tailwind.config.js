/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1025px',
			xl: '1367px', // iPad Pro landscape + 1
		},
		extend: {
			gridTemplateRows: {
				12: 'repeat(12, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
				18: 'repeat(18, minmax(0, 1fr))',
			},
			gridRow: {
				'span-8': 'span 8 / span 8',
				'span-9': 'span 9 / span 9',
				'span-10': 'span 10 / span 10',
				'span-11': 'span 11 / span 11',
				'span-12': 'span 12 / span 12',
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
				'span-17': 'span 17 / span 17',
				'span-18': 'span 18 / span 18',
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
