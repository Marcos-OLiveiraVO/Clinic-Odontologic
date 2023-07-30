import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    allowOnly: true,
    include: ["**/*.spec.ts"],
    coverage: {
      provider: "v8",
      reporter: ["html"],
    },
    setupFiles: ["./src/shared/infra/prisma/__mocks__/mocks.ts"],
  },
  plugins: [tsconfigPaths()],
});
