const safeLinks = require("@sardine/eleventy-plugin-external-links");

module.exports = function(eleventyConfig) {
  // Copy CSS files to output (paths relative to input directory)
  eleventyConfig.addPassthroughCopy("workshop.css");

  // Copy images directory to output
  eleventyConfig.addPassthroughCopy("images");

  // Add external links plugin - automatically adds target="_blank" to external links
  eleventyConfig.addPlugin(safeLinks);

  // Filter to extract navigation links from content (last paragraph with Previous/Next links)
  // All nav links are preceded by <hr> (from --- in markdown)
  eleventyConfig.addNunjucksFilter("extractNav", function(content) {
    if (!content) return { content: "", nav: "" };

    // Pattern to match navigation links - preceded by <hr>
    // Matches: <hr> followed by <p><strong>...Previous...Next...</strong></p> at end
    const navPattern = /(\s*<hr>\s*<p><strong>.*?(?:Previous|Next).*?<\/strong><\/p>\s*)$/s;
    const match = content.match(navPattern);

    if (match) {
      return {
        content: content.replace(navPattern, "").trim(),
        nav: match[1].trim()
      };
    }

    return { content: content.trim(), nav: "" };
  });

  return {
    dir: {
      input: "workshop",
      output: "workshop",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
};
