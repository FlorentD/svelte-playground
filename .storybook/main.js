const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.pcss$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    });
    config.plugins.push(new MiniCssExtractPlugin());

    return config;
  },
};
