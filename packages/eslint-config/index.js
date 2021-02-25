'use strict';

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'plugin:jest/recommended',
	],
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		es2020: true,
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'react/prop-types': 'off',
		'prettier/prettier': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'no-console': 'warn',
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
	},
	globals: {
		React: 'writable',
	},
};
