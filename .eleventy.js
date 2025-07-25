module.exports = function(eleventyConfig) {
  // Aturan Passthrough Copy untuk folder assets
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    // pathPrefix DIHAPUS agar server lokal berjalan normal
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};