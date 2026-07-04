import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/index.ts",
  ],
  format: "esm",
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: [
    "react",
    "react-dom",
    "next",
  ],
});