
const TerserPlugin = require('terser-webpack-plugin');
const { resolve } = require('path')

module.exports = {
    mode: 'none', // mode设置为none，去掉压缩
    entry: {
        'get-var-type': resolve(__dirname, 'src/index.js'), // 未压缩的
        'get-var-type.min': resolve(__dirname, 'src/index.js') // 压缩的
    },
    output: {
        filename: '[name].js',  // [name]是一个占位符
        path: resolve(__dirname, 'dist'),
        library: 'getVarType', // 打包出来的库的名字
        libraryTarget: 'umd', // 可以通过amd、cjs、esm、umd（script标签） 全局变量引入
        libraryExport: 'default'  // 不设置defaut的话，引入的时候需要使用 getVarType.default的方式引入
    },
    optimization: {
        minimize: true,
        minimizer: [
            // 压缩插件，webpack4生产环境默认开启，对ES6的语法友好
            new TerserPlugin({
                // 针对.min.js 才做压缩
                include: /\.min\.js$/,
            })
        ]
    }
}