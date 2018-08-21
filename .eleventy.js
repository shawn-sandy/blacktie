const syntax = require('@11ty/eleventy-plugin-syntaxhighlight')
const toc = require('eleventy-plugin-toc')

module.exports = function () {

  return {
    dir: {
      input: "docs",
      output: "dist/content"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/content/"
  }
};
