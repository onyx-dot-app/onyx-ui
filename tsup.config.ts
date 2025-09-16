import { defineConfig } from "tsup";
import * as path from "path";
import * as fs from "fs";

export default defineConfig({
  entry: {
    index: "index.tsx",
    components: "src/components/index.tsx",
    icons: "src/icons/index.tsx",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  // Add custom esbuild plugin to handle SVG files
  esbuildPlugins: [
    {
      name: "svg-to-react",
      setup(build) {
        build.onResolve({ filter: /\.svg$/ }, args => {
          if (args.path.startsWith("@assets/")) {
            const newPath = path.join(
              process.cwd(),
              "assets",
              args.path.replace("@assets/", "")
            );
            return { path: newPath };
          }
          return { path: args.path };
        });

        build.onLoad({ filter: /\.svg$/ }, async args => {
          const { transform } = await import("@svgr/core");
          const svg = fs.readFileSync(args.path, "utf8");
          const result = await transform(
            svg,
            {
              jsxRuntime: "automatic",
              typescript: true,
              exportType: "default",
              svgProps: {
                width: "{props.width || '1em'}",
                height: "{props.height || '1em'}",
              },
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
