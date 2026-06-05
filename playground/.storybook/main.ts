// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import type { StorybookConfig } from '@storybook/vue3-vite';
import type { AliasOptions } from 'vite';

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
    const aliases: AliasOptions = [
      { find: /^@\/ol(?=\/|$)/, replacement: path.resolve(__dirname, '../../build/ol') },
      { find: /^@(?=\/|$)/, replacement: path.resolve(__dirname, '../src') },
    ];
    const existingAliases = config.resolve.alias;
    config.resolve.alias = Array.isArray(existingAliases)
      ? [...aliases, ...existingAliases]
      : [
          ...aliases,
          ...Object.entries(existingAliases ?? {}).map(([find, replacement]) => ({
            find,
            replacement,
          })),
        ];
    return config;
  },
};
export default config;
