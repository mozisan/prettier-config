const generalConfig = require("./general");

module.exports = {
	...generalConfig,
	plugins: [...generalConfig.plugins, require.resolve("prettier-plugin-tailwindcss")],
	tailwindFunctions: ["classnames", "clsx", "ctl", "cva", "twJoin", "twMerge", "tv"],
};
