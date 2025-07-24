module.exports = function(eleventyConfig) {

  // Aturan Passthrough Copy untuk folder assets
  eleventyConfig.addPassthroughCopy("assets");

  // Filter 'dump' untuk menanamkan data ke javascript
  eleventyConfig.addFilter("dump", obj => {
    return JSON.stringify(obj);
  });

  return {
    // Tentukan direktori
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    // pathPrefix sudah dihapus
    
    // Template engine
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};