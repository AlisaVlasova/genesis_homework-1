const { ESBuildMinifyPlugin } = require("esbuild-loader");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const esbuild = require("esbuild");

module.exports = {
  configureWebpack: {
    optimization: {
      minimizer: [
        new ESBuildMinifyPlugin({
          target: "es2015",
          css: true,
        }),
      ],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "esbuild-loader",
          options: {
            target: "es2015",
            implementation: esbuild,
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },

    plugins: [new MiniCssExtractPlugin(), new BundleAnalyzerPlugin()],
  },

  lintOnSave: false,

  transpileDependencies: ["vuetify"],

  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};
