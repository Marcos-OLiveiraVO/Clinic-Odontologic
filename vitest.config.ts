import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import swc from "unplugin-swc";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["html"],
    },
  },
  plugins: [tsconfigPaths(), swc.vite()],
});
