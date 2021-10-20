const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "tsx", "ts", "md", "mdx"],
});
