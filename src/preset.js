const { Preset } = require('use-preset');
const fs = require('fs-extra');

// prettier-ignore
module.exports = Preset.make('Tailwind CSS')
	.prompts()
		.if(({ targetDirectory }) => fs.readdirSync(targetDirectory).length === 0)
		.confirm('Directory is empty. Do you want to scaffold the Vite app?', 'scaffoldVite')
		.title('Ask to scaffold the application if required')
		.chain()
	.command()
		.run('npx', ['create-vite-app'])
		.if(({ prompts }) => Boolean(prompts.scaffoldVite))
		.title('Scaffold a Vite application')
		.chain()
	.copyTemplates()
	.editJson('package.json')
		.title('Add Tailwind CSS as a dependency')
		.merge({
			devDependencies: {
				'tailwindcss': '^1',
				'@tailwindcss/ui': '^0',
				'autoprefixer': '9.8'
			}
		})
		.chain()
	.installDependencies();
