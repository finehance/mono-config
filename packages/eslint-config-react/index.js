'use strict';
module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	overrides: [
		{
			files: ['**/*.tsx'],
			rules: {
				'react/prop-types': 'off',
			},
		},
	],
};

// module.exports = {
// 	parser: '@typescript-eslint/parser',
// 	extends: [
// 		'plugin:react/recommended',
// 		'plugin:@typescript-eslint/recommended',
// 		'prettier/@typescript-eslint',
// 		'plugin:prettier/recommended',
// 		'plugin:jest/recommended',
// 	],
// 	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
// 	settings: {
// 		react: {
// 			version: 'detect',
// 		},
// 	},
// 	env: {
// 		browser: true,
// 		node: true,
// 		es6: true,
// 		es2020: true,
// 	},
// 	parserOptions: {
// 		ecmaFeatures: {
// 			jsx: true,
// 		},
// 		ecmaVersion: 2018,
// 		sourceType: 'module',
// 	},
// 	rules: {
// 		'react/prop-types': 'off',
// 		'prettier/prettier': 'warn',
// 		'no-console': 'warn',
// 		'react/display-name': 'off',
// 		'react/react-in-jsx-scope': 'off',
// 		'react-hooks/rules-of-hooks': 'warn',
// 		'react-hooks/exhaustive-deps': 'warn',
// 	},
// 	globals: {
// 		React: 'writable',
// 	},
// };
