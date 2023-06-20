import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    allowOnly: true,
    include: ["**/*.spec.ts"],
  },
});
