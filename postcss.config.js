// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss").default || require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
    purgecss({
      content: ["./**/*.html", "./**/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
