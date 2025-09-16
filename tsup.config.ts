import { defineConfig } from "tsup";
import { build as esbuild } from "esbuild";
import * as path from "path";

export default defineConfig({
  entry: ["src/index.tsx", "src/icons/index.tsx", "src/components/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  // Add custom esbuild plugin to handle SVG files
  esbuildPlugins: [
    {
      name: "svg-to-react",
      setup(build) {
        build.onResolve({ filter: /\.svg$/ }, args => {
          if (args.path.startsWith("@assets/")) {
            const newPath = path.join(
              process.cwd(),
              "src",
              args.path.replace("@assets/", "")
            );
            return { path: newPath };
          }
          return { path: args.path };
        });

        build.onLoad({ filter: /\.svg$/ }, async args => {
          const { transform } = await import("@svgr/core");
          const svg = await require("fs").promises.readFile(args.path, "utf8");
          const result = await transform(
            svg,
            {
              jsxRuntime: "automatic",
              typescript: true,
            },
            { componentName: "SvgComponent" }
          );
          return {
            contents: result,
            loader: "jsx",
          };
        });
      },
    },
  ],
});
