module.exports = {
	$schema: 'https://typedoc.org/schema.json',
	out: './docs',
	entryPoints: 'src/index.ts',
	tsconfig: './tsconfig.json',
	emit: 'docs',
	pretty: true,
	categorizeByGroup: false,
	includeVersion: true,
	sort: 'alphabetical',
	githubPages: true,
	cleanOutputDir: true
};
