const config = require("./main");

module.exports = {
	...config,
	plugins: [...config.plugins, require.resolve("prettier-plugin-tailwindcss")],
};
