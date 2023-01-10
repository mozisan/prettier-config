const typescriptConfig = require("./typescript");

module.exports = {
	...typescriptConfig,
	plugins: [...typescriptConfig.plugins, require.resolve("prettier-plugin-tailwindcss")],
};
