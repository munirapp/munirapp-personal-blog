// test
require("dotenv").config();
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withPWA = require("next-pwa");
const tailwindCss = require("tailwindcss");
const { API_URL } = process.env;

const getAllBlogRoutes = async () => {
  let exportMap = {};
  const allBlogRoutes = await (await fetch(`${API_URL}/artikel`)).json();
  allBlogRoutes.foreEach((item) => {
    exportMap[item.link] = {
      page: "/blog/[slug]",
      query: { slug: `${item.date}-${item.slug}` },
    };
  });

  return exportMap;
};

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
    [withPWA, { pwa: { dest: "public" } }],
  ],
  {
    env: {
      API_URL,
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return { ...getAllBlogRoutes };
    },
  }
);
