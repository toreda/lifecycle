module.exports = {
	$schema: 'https://typedoc.org/schema.json',
	out: './docs',
	entryPoints: 'src/index.ts',
	tsconfig: './tsconfig.json',
	emit: 'docs',
	name: '@toreda/verify',
	pretty: true,
	categorizeByGroup: false,
	includeVersion: true,
	sort: 'alphabetical',
	excludePrivate: true,
	githubPages: true,
	cacheBust: true,
	cleanOutputDir: true,
	includeVersion: true,
	alwaysCreateEntryPointModule: true
};
