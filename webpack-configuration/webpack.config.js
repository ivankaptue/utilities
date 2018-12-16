const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log(__dirname);
const dev = process.env.NODE_ENV === "dev";
console.log("dev mode : " + dev);

const cssLoaders = [
    MiniCssExtractPlugin.loader,
    {loader: 'css-loader', options: {importLoaders: 1}}
];

if (!dev) {
    cssLoaders.push({
        loader: 'postcss-loader',
        options: {
            plugins: (loader) => [
                require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie > 8']
                })
            ]
        }
    })
}

let config = {
    entry: {
        app: ['./assets/src/css/style.scss', './assets/src/js/app.js']
    },
    output: {
        path: path.resolve("./assets/public/"),
        filename: "js/[name].js",
        publicPath: "/assets/public/",
    },
    resolve: {
        alias: {
            '@css': path.resolve('./assets/src/css/'),
            '@js': path.resolve('./assets/src/js/'),
        }
    },
    optimization: {
        minimize: !dev,
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: false,
                parallel: true,
            }),
            new OptimizeCssAssetsPlugin({}),
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: cssLoaders,
            },
            {
                test: /\.scss$/,
                use: [...cssLoaders, 'sass-loader'],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name].[hash:8].[ext]'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
    ]
};

if (!dev) {
    config.plugins.push(new CleanWebpackPlugin(['public'], {
        root: path.resolve('./assets'),
        verbose: true,
        dry: false,
    }));
}

module.exports = config;