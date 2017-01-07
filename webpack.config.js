var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WriterPlugin = require('write-file-webpack-plugin');
var webpack = require('webpack');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/static/index.html',
    filename: 'index.html',
    inject: 'body'
});

function CompilerPlugin(options) { }
CompilerPlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        console.log('\n\nCompilation completed! ~~ ', Date())
    });
};

module.exports = {
    devtool: 'source-map',
    devServer: {
        outputPath: path.resolve(__dirname + '/dist')
    },
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors        
        './src/app.js',
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel'],
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?limit"
        }]
    },
    historyApiFallback: true,
    output: {
        filename: "application.js",
        path: path.resolve(__dirname + '/dist'),
        libraryTarget: 'var',
        library: 'application'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [HTMLWebpackPluginConfig, WriterPlugin, new CompilerPlugin(), new webpack.HotModuleReplacementPlugin()]
}