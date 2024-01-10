/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/stories/Introduction.mdx", "../src/stories/*.mdx", "../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/preset-create-react-app",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {},
              },
            ],
          },
        ],
        scss: {
          implementation: require("sass"),
        },
      }
    })
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
