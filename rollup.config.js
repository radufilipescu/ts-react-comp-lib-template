import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  // exports compiled js files
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/__tests__", 
          "**/*.test.ts(x)",
          "**/*.stories.ts(x)",
          "./src/stories/**"
        ]
      }),
      postcss(),
    ],
  },

  // exports typescript types
  {
    input: "dist/esm/types/index.d.ts",
    output: [
      { file: "dist/index.d.ts", format: "esm" }
    ],
    plugins: [
      dts()
    ],
    external: [
      /\.(css|less|scss)$/
    ],
  },
];