/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './index.html', './src/**/*.{js,jsx}' ],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				orange: 'hsl(26, 100%, 55%)',
				paleOrange: 'hsl(25, 100%, 94%)',
				veryDarkBlue: 'hsl(220, 13%, 13%)',
				darkGrayishBlue: 'hsl(219, 9%, 45%)',
				grayishBlue: 'hsl(220, 14%, 75%)',
				lightGrayishBlue: 'hsl(223, 64%, 98%)',
				white: 'hsl(0, 0%, 100%)',
				black: 'hsla(0, 0%, 0%, 0.75)'
			},
			fontFamily: {
				Kumbh: [ 'Kumbh Sans', 'sans-serif' ]
			}
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px'
		}
	},
	plugins: []
};
