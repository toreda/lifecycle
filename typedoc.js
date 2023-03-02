module.exports = {
	$schema: 'https://typedoc.org/schema.json',
	out: './docs',
	entryPoints: ['./src/index.ts'],
	tsconfig: './tsconfig.json',
	emit: 'docs',
	pretty: true,
	includeVersion: true,
	sort: 'alphabetical',
	githubPages: false,
	categorizeByGroup: true,
	cleanOutputDir: true
};
