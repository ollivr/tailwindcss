const { theme } = require('tailwindcss/defaultConfig');

module.exports = {
	purge: [
		'src/**/*.html', 
		'src/**/*.vue', 
		'src/**/*.js', 
		'**/*.html'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...theme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [],
};