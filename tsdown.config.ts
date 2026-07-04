import { defineConfig } from "tsdown";
import fg from "fast-glob";

const componentEntries = Object.fromEntries(
  fg
    .sync("src/components/ui/**/*.{ts,tsx}", {
      ignore: ["**/*.test.*", "**/*.stories.*", "**/index.ts"],
    })
    .map((file) => [
      file
        .replace(/^src\//, "")
        .replace(/\.(ts|tsx)$/, ""),
      file,
    ])
);

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "components/index": "src/components/index.ts",

    ...componentEntries,
  },

  format: ["esm"],

  dts: true,

  clean: true,

  sourcemap: true,

  treeshake: true,

  hash: false,

  copy: [{ from: "src/styles/*", to: "dist", flatten: false }],

  deps: {
    neverBundle: ["react", "react-dom", "next"],
  },
});