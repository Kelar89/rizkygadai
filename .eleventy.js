module.exports = function(eleventyConfig) {
  // Aturan Passthrough Copy untuk folder assets
  eleventyConfig.addPassthroughCopy("assets");

  // Filter 'dump' (jika masih digunakan di masa depan)
  eleventyConfig.addFilter("dump", obj => {
    return JSON.stringify(obj);
  });

  // PERBAIKAN: Mendaftarkan shortcode 'now' dengan cara yang benar
  eleventyConfig.addShortcode("now", function () {
    return String(Date.now());
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};