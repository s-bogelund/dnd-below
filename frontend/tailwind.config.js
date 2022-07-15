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
			lg: '976px',
			xl: '1367px', // iPad Pro landscape + 1
		},
		extend: {
			gridTemplateRows: {
				12: 'repeat(12, minmax(0, 1fr))',
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
