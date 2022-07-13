/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	future: {
		hoverOnlyWhenSupported: true,
	},
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				betterhover: { raw: '(hover: hover)' },
			},
		},
	},
	plugins: [require('daisyui')],
	// require('daisyui')
	daisyui: {
		themes: [
			{
				myCoffee: {
					...require('daisyui/src/colors/themes')['[data-theme=coffee]'],
				},
			},
			'coffee',
			'garden',
			{
				night: {
					...require('daisyui/src/colors/themes')['[data-theme=night]'],

					'primary-focus': '#3abff8',
					'secondary-focus': '#828df8',
					'neutral-focus': '#1d283a',
					'primary-focus-hover': '#FFFFFF',
					'--animation-btn': '0.25s',
				},
			},
			{
				forest: {
					...require('daisyui/src/colors/themes')['[data-theme=forest]'],
				},
			},
			'cmyk',
		],
	},
}
// ['coffee', 'halloween', 'cmyk', 'night', 'garden', 'forest']
