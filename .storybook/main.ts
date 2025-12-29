// This file has been automatically migrated to valid ESM format by Storybook.

import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(vanillaExtractPlugin());

    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        "@": path.resolve(__dirname, "../src"),
      },
    };

    return config;
  },
};

export default config;
