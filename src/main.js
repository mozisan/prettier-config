module.exports = {
	plugins: [require.resolve("prettier-plugin-packagejson"), require.resolve("prettier-plugin-organize-imports")],
	pluginSearchDirs: false,
	printWidth: 120,
	trailingComma: "all",
	useTabs: true,
};
