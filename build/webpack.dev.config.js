const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: [
            './client',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'superagent'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].js',
        chunkFilename: 'chunk.[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
                plugins: ['transform-runtime', 'add-module-exports'],
                cacheDirectory: true
            }
        },{
            test: /\.scss$/,
            loaders: [
                'style',
                'css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:8]',
                'sass'
            ]
        }, {
            test: /\.css$/,
            loader: "style!css"
        },{
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.scss'],
        alias:{
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),//为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: '[name].js'
        }),
        new webpack.HotModuleReplacementPlugin(),//全局开启代码热替换
        new webpack.NoErrorsPlugin(),//跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误。
        new webpack.DefinePlugin(
            {
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }
        ),
        new HtmlWebpackPlugin({
            filename: '../views/dev/index.html',
            template: './views/tpl/index.tpl.html'
        }),
        new ProgressBarPlugin({summary: false})//进度条
    ]
}
