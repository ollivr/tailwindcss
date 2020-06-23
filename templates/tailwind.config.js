const { theme } = require('tailwindcss/defaultConfig');

module.exports = {
	purge: [],
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
