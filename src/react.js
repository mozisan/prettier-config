const config = require("./main");

module.exports = {
	...config,
	plugins: [...config.plugins, require("prettier-plugin-tailwindcss")],
};
