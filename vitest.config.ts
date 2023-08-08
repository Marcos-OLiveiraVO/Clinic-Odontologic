import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import swc from "unplugin-swc";

export default defineConfig({
  test: {
    allowOnly: true,
    include: ["**/*.spec.ts"],
    coverage: {
      provider: "v8",
      reporter: ["html"],
    },
    environmentMatchGlobs: [["src/**", "prisma"]],
  },
  plugins: [
    tsconfigPaths(),
    swc.vite({
      module: { type: "es6" },
    }),
  ],
});
