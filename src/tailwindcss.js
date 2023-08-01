import TailwindCSSPlugin from "prettier-plugin-tailwindcss";

import config from "./default.js";

const { plugins, ...defaultOptions } = config;

/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
export default {
	...defaultOptions,
	plugins: [...plugins, TailwindCSSPlugin],
	tailwindFunctions: ["classnames", "clsx", "cn", "ctl", "cva", "twJoin", "twMerge", "tv"],
};
