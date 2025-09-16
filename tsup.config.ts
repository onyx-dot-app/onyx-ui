import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    icons: "src/icons.tsx",
    text: "src/Text/index.tsx",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react"],
  treeshake: true,
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
