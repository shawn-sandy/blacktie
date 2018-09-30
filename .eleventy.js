const syntax = require('@11ty/eleventy-plugin-syntaxhighlight')
const toc = require('eleventy-plugin-toc')

module.exports = function (eleventyConfig) {

eleventyConfig.addPlugin(toc)

  	/* Markdown */
	let markdownIt = require("markdown-it");
	let markdownItAnchor = require("markdown-it-anchor");
	let options = {
		html: true,
		breaks: true,
		linkify: true
	};
	let opts = {
		permalink: true,
		permalinkClass: "direct-link",
		permalinkSymbol: "#",
		level: [1,2,3,4]
	};

	eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor, opts));

  return {
    dir: {
      input: "docs",
      output: "eleventy/content"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/content/"
  }
};
