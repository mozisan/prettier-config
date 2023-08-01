import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: ["src/*"],
		outDir: "dist/esm",
		format: "esm",
		clean: true,
	},
	{
		entry: ["src/*"],
		outDir: "dist/cjs",
		format: "cjs",
		clean: true,
	},
]);
