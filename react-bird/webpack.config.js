const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  
  const defaultConfig = singleSpaDefaults({
    orgName: "bird",
    projectName: "react",
    webpackConfigEnv,
    argv,
  });
  return merge(defaultConfig, {
    devServer:{
      port: 3000,
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
