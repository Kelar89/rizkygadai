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
    // PENTING: Tambahkan baris ini untuk memberitahu Eleventy
    // bahwa situs berada di dalam sub-folder /rizkygadai/
    pathPrefix: "/rizkygadai/",

    // Template engine
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};