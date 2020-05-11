const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = envOptions => {
    const env = dotenv.config().parsed;
    const mode = envOptions && envOptions.production ? 'production' : 'development';

    return {
        entry: path.resolve(__dirname, 'src/index.jsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        resolve: {
            extensions: ['.jsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
            }),
            new webpack.DefinePlugin({
                WEATHER_API_KEY: JSON.stringify(env.WEATHER_API_KEY),
                GEOLOCATION_API_KEY: JSON.stringify(env.GEOLOCATION_API_KEY),
                ENV: JSON.stringify(mode),
            }),
        ],
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            compress: true,
            historyApiFallback: true,
            port: process.env.PORT,
        },
        devtool: 'source-map',
        mode,
    };
};
