const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./public/**/*.html", "./src/**/*.svelte"],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

const production = true;

module.exports = {
  plugins: [require("tailwindcss"), ...(production ? [purgecss] : [])],
};
