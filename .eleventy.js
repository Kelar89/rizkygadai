module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("dump", obj => {
    return JSON.stringify(obj);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/rizkygadai/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};