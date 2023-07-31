const { plugins, ...defaultOptions } = require("./default.cjs");

/** @type {import("prettier-plugin-tailwindcss").PluginOptions} */
const tailwindCSSPluginOptions = {
	tailwindFunctions: ["classnames", "clsx", "cn", "ctl", "cva", "twJoin", "twMerge", "tv"],
};

/** @type {import("prettier").Config} */
module.exports = {
	plugins: [...plugins, require("prettier-plugin-tailwindcss")],
	...defaultOptions,
	...tailwindCSSPluginOptions,
};
