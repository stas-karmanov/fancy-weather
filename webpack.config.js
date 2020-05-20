const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = envOptions => {
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
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf|svg|jpg)$/,
                    use: ['file-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
            }),
            new webpack.DefinePlugin({
                WEATHER_API_KEY: JSON.stringify(process.env.WEATHER_API_KEY),
                GEOLOCATION_API_KEY: JSON.stringify(process.env.GEOLOCATION_API_KEY),
                IMAGES_API_KEY: JSON.stringify(process.env.IMAGES_API_KEY),
                MAPS_API_KEY: JSON.stringify(process.env.MAPS_API_KEY),
                GEOCODING_API_KEY: JSON.stringify(process.env.GEOCODING_API_KEY),
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
        ],
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            compress: true,
            historyApiFallback: true,
            port: process.env.PORT || 3000,
        },
        devtool: 'source-map',
        mode,
    };
};
