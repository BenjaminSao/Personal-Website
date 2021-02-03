"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const n_config_1 = require("@nivinjoseph/n-config");
const webpack = require("webpack");
const env = n_config_1.ConfigurationManager.getConfig("env");
console.log("WEBPACK ENV", env);
const isDev = env === "dev";
const moduleRules = [
    {
        test: /\.(scss|sass)$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: false
                }
            },
            {
                loader: "css-loader"
            },
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            "postcss-flexbugs-fixes",
                            autoprefixer({
                                flexbox: "no-2009"
                            })
                        ]
                    }
                }
            },
            {
                loader: "sass-loader"
            }
        ]
    },
    {
        test: /\.css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: false
                }
            },
            {
                loader: "css-loader"
            }
        ]
    },
    {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
            {
                loader: "url-loader",
                options: {
                    limit: 3000,
                    fallback: "file-loader",
                    esModule: false,
                    name: (resourcePath, resourceQuery) => {
                        if (process.env.NODE_ENV === "development") {
                            return "[path][name].[ext]";
                        }
                        return "[contenthash]-[name].[ext]";
                    }
                }
            },
            {
                loader: "@nivinjoseph/n-app/dist/loaders/raster-image-loader.js",
                options: {
                    jpegQuality: 80,
                    pngQuality: 60
                }
            }
        ]
    },
    {
        test: /\.svg$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    esModule: false
                }
            }
        ]
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            isDev ? "file-loader" : {
                loader: "url-loader",
                options: {
                    limit: 9000,
                    fallback: "file-loader"
                }
            }
        ]
    },
    {
        test: /\.taskworker\.js$/,
        loader: "worker-loader"
    },
    {
        test: /-view-model\.js$/,
        use: [
            {
                loader: "@nivinjoseph/n-app/dist/loaders/view-model-loader.js"
            }
        ]
    },
    {
        test: /-view\.html$/,
        exclude: [path.resolve(__dirname, "src/server")],
        use: [
            ...(isDev ? [] :
                [{
                        loader: "vue-loader/lib/loaders/templateLoader.js"
                    },
                    {
                        loader: "@nivinjoseph/n-app/dist/loaders/view-loader.js"
                    }]),
            {
                loader: "html-loader",
                options: {
                    attrs: ["img:src", "use:xlink:href"]
                }
            }
        ]
    },
    {
        test: /-view\.html$/,
        include: [path.resolve(__dirname, "src/server")],
        use: [
            {
                loader: "html-loader",
                options: {
                    attrs: ["img:src", "use:xlink:href"]
                }
            }
        ]
    }
];
const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: "src/server/controllers/index-view.html",
        filename: "index-view.html",
        hash: true
    }),
    new MiniCssExtractPlugin({}),
    new webpack.DefinePlugin({
        APP_CONFIG: JSON.stringify({})
    }),
    new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, "element-ui/lib/locale/lang/en")
];
if (isDev) {
    moduleRules.push({
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre"
    });
}
else {
    moduleRules.push({
        test: /\.js$/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [["@babel/preset-env", {
                            debug: false,
                            targets: {
                                chrome: "41"
                            },
                            useBuiltIns: "entry",
                            forceAllTransforms: true,
                            modules: "commonjs"
                        }]]
            }
        }
    });
    plugins.push(...[
        new CompressionPlugin({
            test: /\.(js|css|svg)$/
        })
    ]);
}
module.exports = {
    mode: isDev ? "development" : "production",
    target: "web",
    entry: ["./src/client/client.js"],
    output: {
        filename: "client.bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "src/client/dist"),
        publicPath: "/"
    },
    devtool: isDev ? "source-map" : false,
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true,
                    safari10: true,
                    output: {
                        comments: false
                    }
                },
                extractComments: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: moduleRules
    },
    plugins: plugins,
    resolve: {
        alias: {
            feather: path.resolve(__dirname, "node_modules/feather-icons/dist/feather-sprite.svg"),
            vue: isDev ? "@nivinjoseph/vue/dist/vue.js" : "@nivinjoseph/vue/dist/vue.runtime.common.prod.js"
        }
    }
};
//# sourceMappingURL=webpack.config.js.map