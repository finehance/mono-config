'use strict';
module.exports = {
	extends: ['plugin:react/recommended'],
	plugins: ['react', 'react-hooks'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'warn',
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
	},
	overrides: [
		{
			files: ['**/*.tsx'],
			rules: {
				'react/prop-types': 'off',
			},
		},
	],
};
