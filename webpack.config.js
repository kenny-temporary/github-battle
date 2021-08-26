/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const WebpackDashboardPlugin = require("webpack-dashboard/plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');

function getAbsolutePath(...paths) {
  return path.resolve(__dirname, ...paths);
}

function joinPath(...paths) {
  return path.join(__dirname, ...paths);
}

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isDebug = !!process.env.DEBUG;


console.log('================================', isDev, isProd, isDebug);

module.exports = {
  mode: isDev ? "development" : "production",
  entry: './src/index.js',
  resolve: {
    extensions: [".js", ".jsx", "ts", ".tsx", ".json", ".css"],
    alias: {
      "@": joinPath('src'),
    }
  },
  output: {
    path: getAbsolutePath('dist'),

    pathinfo: true,
    clean: true,

    // chunkhash 上效缓存(/guides/caching)
    // fullhash
    // contenthash
    filename: './js/[name]_[chunkhash:8].js', // 我需要和map匹配暂时选择chunkhash
    chunkFilename: "./js/[name]_[chunkhash:8]_chunk.js",

    // sourceMap
    // sourceMapFilename: "sourcemaps/[name].map",
  },

  //   devtool: "source-map", // enum
  //   devtool: "inline-source-map", // 嵌入到源文件中
  //   devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中
  //   devtool: "hidden-source-map", // SourceMap 不在源文件中引用
  //   devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
  //   devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
  //   devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。
  // devtool: 'source-map',

  // NOTE: 仅在 DEV+DEBUG 模式下开启
  // devtool: isDev && isDebug ? "source-map" : false,

  context: __dirname,
  target: 'web',

  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: 'advanced',
          discardComments: true,
          discardEmpty: true,
          discardDuplicates: true,
          minifyParams: true,
        }
      })
    ]
  },

  // ref: https://webpack.js.org/configuration/stats/#root
  stats: {
    logging: "info",

    env: true,
    assets: true,
    colors: true,
    builtAt: true,

    errors: true,
    errorsCount: true,
    errorDetails: true,
    errorStack: true,
    warningsCount: true,

    timings: false,
    hash: false,

    modules: false,
    moduleAssets: false,
    runtimeModules: false,
    dependentModules: false,
  },

  cache: isDev ? {
    type: "filesystem",
    cacheDirectory: getAbsolutePath(".tempcache"),
    compression: 'gzip',
  } : false,

  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [getAbsolutePath("src")],
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        use: injectHandleStyleLoader(),
      },
      {
        test: /\.less$/,
        use: injectHandleStyleLoader("less-loader"),
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8000,
            name: "./asset/images/[name]_[chunkhash:8].[ext]"
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: false,
          name: './asset/fonts/[name]_[chunkhash:8].[ext]'
        }
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin(["NODE_ENV", "DEBUG"]),
    // new CopyPlugin({
    //   patterns: [{
    //     from: getAbsolutePath('src/assets'),
    //     to: getAbsolutePath('dist/assets'),
    //   }]
    // }),
    new StylelintPlugin(joinPath('postcss.config.js')),
    new MiniCssExtractPlugin({
      filename: "./styles/[name]_[chunkhash:8].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: joinPath("public", "index.html"),
      title: "通用Web站点",
      minify: true,
      templateParameters: {},
      // favicon: "",
      // "meta": {}
    }),
    new WebpackDashboardPlugin(),
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({
      format: 'build [:bar] ' + chalk.green.bold(':percent') +
        ' (:elapsed seconds)',
      clear: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    liveReload: true,
    static: {
      directory: joinPath('dist'),
      watch: true,
    },
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    host: "127.0.0.1",
    port: 3000,
  }
};

function injectHandleStyleLoader(injectLoader = undefined) {
  return [
    isDev ? {
      loader: 'style-loader',
      options: {
        injectType: "styleTag",
        esModule: true,
      }
    } : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        url: {
          filter: (url, resourcePath) => {
            if (url.includes("img.png")) {
              return false;
            }
            return true;
          },
        },
        import: true,
        modules: {
          localIdentName: "[local]"
        },
      }
    },
    "postcss-loader",
    injectLoader
  ].filter(Boolean)
}
