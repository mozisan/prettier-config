const generalConfig = require("./general");

module.exports = {
	...generalConfig,
	plugins: [...generalConfig.plugins, require.resolve("prettier-plugin-tailwindcss")],
};
