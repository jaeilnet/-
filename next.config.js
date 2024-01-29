const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "styles/_color.scss"; @import "styles/_mixin.scss";`,
  },
};

module.exports = nextConfig;
