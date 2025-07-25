module.exports = function(eleventyConfig) {
  // Aturan Passthrough Copy untuk folder assets
  eleventyConfig.addPassthroughCopy("assets");

  // Filter 'dump' (jika masih digunakan di masa depan)
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
    // pathPrefix DIHAPUS dari sini agar lokal tidak error
    
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};