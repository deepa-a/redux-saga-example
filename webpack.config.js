const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const env_var = require('./environment.config.js');
const path = require('path');

module.exports = (env, argv) => {
    var API_BASE_URL;
    switch (env.NODE_ENV) {
        case 'development':
            API_BASE_URL = env_var.DEVELOPMENT_API_URL;
            break;
        case 'production':
            API_BASE_URL = env_var.DEMO1_API_URL;
            break;
        default:
            API_BASE_URL = env_var.DEMO1_API_URL;
    }
    return {
        context: __dirname,
        resolve: {
            modules: [path.resolve(__dirname, './src'), 'node_modules'],
            extensions: ['.js', '.jsx', '.json'],
            alias: {
                reducers: path.resolve(__dirname, './src/reducers/reducers.js')
            }
        },
        output: {
            filename: '[name].[contenthash].js',
            publicPath: '/'
        },
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [{
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }]
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.(png|jpeg|gif)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: '/assets/images/[name].[ext]'
                        }
                    }]
                }
            ]
        },
        devServer: {
            compress: true,
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "./index.html",
                favicon: "./public/favicon.ico"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[id].[contenthash].css"
            }),
            new CopyWebpackPlugin([{
                from: 'public/manifest.json'
            }]),
            new webpack.DefinePlugin({
                'process.env': {
                    API_BASE_URL: JSON.stringify(API_BASE_URL)
                }
            })
        ],
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }
    }
};