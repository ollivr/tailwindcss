const { Preset, Logger } = require('use-preset');

module.exports = Preset.make({
	name: 'Tailwind CSS with Vite',
	actions: () => [
		{
			type: 'copy',
			files: '**/**',
		},
	],
	after: ({ generator }) => {
		Logger.info(
			`Use 'yarn' or 'npm install' to install dependencies, then run 'yarn dev' to start Vite.`,
		);
	},
});
