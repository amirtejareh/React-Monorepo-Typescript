import typescript from "rollup-plugin-typescript2";
export default {
  input: ["src/index.ts"],
  external: ["src/MenuCreator/MenuCreator.css"],
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].js",
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [typescript()],
  external: ["react"],
};
