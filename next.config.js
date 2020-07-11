// test
require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withPWA = require("next-pwa");
const tailwindCss = require("tailwindcss");
const { API_URL } = process.env;

module.exports = withPlugins(
  [
    [
      withSass,
      {
        webpack(config, options) {
          const rules = [
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "postcss-loader",
                  options: {
                    ident: "postcss",
                    plugins: [tailwindCss("./tailwind.config.js")],
                  },
                },
                { loader: "sass-loader" },
              ],
            },
          ];
          return {
            ...config,
            module: {
              ...config.module,
              rules: [...config.module.rules, ...rules],
            },
          };
        },
      },
    ],
    [
      withPWA,
      {
        pwa: {
          dest: "public",
        },
      },
    ],
  ],
  {
    env: {
      API_URL,
    },
  }
);
