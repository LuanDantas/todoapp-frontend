const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // Ponto de entrada
    entry: './src/index.jsx',
    
    // Ponto de saída
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },

    // Configuração do Webserver
    devServer: {
        port: 8080,
        contentBase: './public'
    },

    // Resolva alguns tipos de extensão
    resolve: {
        extensions:  ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },

    // Configuração de plugins
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    
    // Configuração de módulos
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}