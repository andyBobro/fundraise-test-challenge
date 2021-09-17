const path = require("path");
const { sync } = require("glob");

module.exports = {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:9999/'
  //     },
  //     "/rates": {
  //       target: 'https://api.exchangerate.host/',
  //     }
  //   }
  // },
  chainWebpack: (config) => {
    setAliases(config);
  },
};

function setAliases(config) {
  sync("/*/", { root: path.resolve(__dirname, "src") }).forEach((file) => {
    config.resolve.alias.set(path.basename(file), file);
  });
}
