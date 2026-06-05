// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import type { StorybookConfig } from '@storybook/vue3-vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, '../src'),
      '@/ol': path.resolve(__dirname, '../../build/ol'),
    });
    return config;
  },
};
export default config;
