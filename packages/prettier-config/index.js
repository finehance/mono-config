'use strict';

module.exports = {
	tabWidth: 2,
	useTabs: false,
	singleQuote: true,
	endOfLine: 'lf',
	semi: true,
	jsxSingleQuote: true,
	jsxBracketSameLine: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	overrides: [
		{
			files: ['**/*.css', '**/*.scss', '**/*.html', '**/*.json'],
			options: {
				singleQuote: false,
			},
		},
	],
};
