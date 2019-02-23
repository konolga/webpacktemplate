const path = require('path');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
module.exports ={
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js', // call current app.js
        path: path.resolve (__dirname,'./dist'),
        publicPath: '/dist'
    },
    module:{
        rules:[{
            test: /\.js$/,
            loader:'babel-loader',
            exclude: '/node_modules/' //node modules already have been proccessed with babel
        },
        {
            test: /\.scss$/,
            use:[
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true}
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true}
                },
                {
                    loader: 'postcss-loader',
                    options: { sourceMap: true,config: {path:'src/js/postcss.config.js'}}
                }
            ]
        },
        {
            test: /\.css$/,
            use:[
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: { sourceMap: true }
                },
                {
                    loader: 'postcss-loader',
                    options: { sourceMap: true,config: {path:'src/js/postcss.config.js'}}
                }
            ]
        }
    ]
    },
    devServer: {
        overlay: true //for errors
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"[name].css"
        })
    ]
};