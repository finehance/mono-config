module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		es2020: true,
		commonjs: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'@finehance/eslint-config-base', // has to be at the end because ts eslint plugin overrides some eslint rules
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-unused-vars': 'off', // to avoid doubled notifications from eslint (via typescript-eslint/recommended)
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-empty-function': 'warn',
	},
	overrides: [
		{
			files: ['**/*.jsx', '**/*.js'],
			rules: {
				'no-unused-vars': 'off', // to avoid doubled notifications from eslint (via typescript-eslint/recommended)
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
};
