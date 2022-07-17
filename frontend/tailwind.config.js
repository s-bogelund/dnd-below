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
				11: 'repeat(11, minmax(0, 1fr))',
				12: 'repeat(12, minmax(0, 1fr))',
				13: 'repeat(13, minmax(0, 1fr))',
				14: 'repeat(14, minmax(0, 1fr))',
				15: 'repeat(15, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
				17: 'repeat(17, minmax(0, 1fr))',
				18: 'repeat(18, minmax(0, 1fr))',
				19: 'repeat(19, minmax(0, 1fr))',
				20: 'repeat(20, minmax(0, 1fr))',
				45: 'repeat(45, minmax(0, 1fr))',
				50: 'repeat(50, minmax(0, 1fr))',
				100: 'repeat(100, minmax(0, 1fr))',
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
				'span-19': 'span 19 / span 19',
				'span-20': 'span 20 / span 20',

				'span-50': 'span 50 / span 50',
				'span-55': 'span 55 / span 55',
				'span-60': 'span 60 / span 60',
				'span-65': 'span 65 / span 65',
				'span-100': 'span 100 / span 100',
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
