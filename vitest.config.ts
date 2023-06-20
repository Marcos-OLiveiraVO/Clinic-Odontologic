import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    allowOnly: true,
    include: ["**/*.spec.ts"],
  },
  plugins: [tsconfigPaths()],
});
