const { Preset, Log } = require('use-preset');

module.exports = Preset.make({
	name: 'Tailwind CSS with Vite',
	actions: () => [
		{
			type: 'copy',
			files: '**/**',
		},
	],
	after: ({ git }) => {
		git.context.init();
		Log.success(
			`Run ${Log.colors.yellow(
				'npm install',
			)} to install dependencies, then run ${Log.colors.yellow(
				'npm run dev',
			)} to start Vite.`,
		);
	},
});
