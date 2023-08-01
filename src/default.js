import PackageJSONPlugin from "prettier-plugin-packagejson";

/** @type {import("prettier").Config} */
export default {
	plugins: [PackageJSONPlugin],
	printWidth: 120,
	useTabs: true,
};
