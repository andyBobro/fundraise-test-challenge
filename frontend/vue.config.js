const path = require("path");
const { sync } = require("glob");

module.exports = {
  chainWebpack: (config) => {
    setAliases(config);
  },
};

function setAliases(config) {
  sync("/*/", { root: path.resolve(__dirname, "src") }).forEach((file) => {
    config.resolve.alias.set(path.basename(file), file);
  });
}
