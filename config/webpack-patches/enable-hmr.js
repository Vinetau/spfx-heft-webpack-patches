/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const enableHmr = (webpackConfig) => {
	// ensure we are only using this in dev
	if (!isDevelopment) {
		return webpackConfig;
	}

	// add the refresh plugin
	webpackConfig.plugins.push(new ReactRefreshWebpackPlugin());

	// remove react from the externals
	// https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#externalising-react
	webpackConfig.externals = webpackConfig.externals || [];
	if (webpackConfig.externals.length > 0) {
		let index = webpackConfig.externals.indexOf("react");
		if (index !== -1) {
			webpackConfig.externals.splice(index, 1);
		}
		index = webpackConfig.externals.indexOf("react-dom");
		if (index !== -1) {
			webpackConfig.externals.splice(index, 1);
		}
	}

	console.log("***** HOT MODULE REPLACEMENT ENABLED *****");

	return webpackConfig;
};

module.exports = enableHmr;