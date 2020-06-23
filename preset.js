const { Preset } = require('use-preset');

module.exports = Preset.make({
	name: 'Tailwind CSS preset',
	actions: () => [
		{
			type: 'copy',
			files: '**/**',
		},
	],
});
