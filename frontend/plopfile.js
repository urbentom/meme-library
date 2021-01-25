module.exports = (plop) => {
	plop.setGenerator('scene', {
		description: 'Creates a scene',
		prompts: [
			{
				type: 'input',
				name: 'sceneName',
				message: 'What is the name of the scene?',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'src/scenes/{{titleCase sceneName}}',
				base: `./plop-templates/scene-templates`,
				templateFiles: `./plop-templates/scene-templates/*.hbs`,
			},
		],
	});

	plop.setGenerator('component', {
		description: 'Creates a Component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the component?',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'src/components/{{titleCase name}}',
				base: `./plop-templates/component`,
				templateFiles: `./plop-templates/component/*.hbs`,
			},
		],
	});
	plop.setGenerator('dataComponent', {
		description: 'Creates a Data Component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the data component?',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'src/data/{{titleCase name}}',
				base: `./plop-templates/dataComponent`,
				templateFiles: `./plop-templates/dataComponent/*.hbs`,
			},
		],
	});
};
