/**
 * npm publish发布的时候，package.json的main指向index.js，根据不同环境，导出get-var-type内容
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/get-var-type.min.js');
} else {
    // 非生产
    module.exports = require('./dist/get-var-type.js');
}