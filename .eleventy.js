module.exports = function(eleventyConfig) {
  // Pass through the assets folder for CSS and Images to be accessible in output
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });
};