import type { Config } from "prettier";
import type { PluginOptions } from "prettier-plugin-tailwindcss";

import config from "./default.js";

const { plugins, ...defaultOptions } = config;

export default {
  ...defaultOptions,
  plugins: [...plugins, "prettier-plugin-tailwindcss"],
  tailwindFunctions: [
    "classnames",
    "clsx",
    "cn",
    "ctl",
    "cva",
    "twJoin",
    "twMerge",
    "tv",
  ],
} satisfies Config & PluginOptions;
