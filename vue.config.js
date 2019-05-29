/**
 * vue.config 配置
 * @author maybe
 */
const path = require('path')
// const fs = require('fs')
// __dirname 总是指向被执行 js 文件的绝对路径
const resolve = dir => {
    return path.join(__dirname, dir)
}
const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/web'
    : '/'


/*const home =require('./src/mock/home.json')*/


module.exports = {
    lintOnSave: true,
    publicPath: BASE_URL,
    outputDir:'dist',
    assetsDir: 'assets', //静态资源目录(js,css,img,fonts)这些文件都可以写里面
    // 打包时不生成.map文件
    productionSourceMap: false,
    // 输出文件目录
    // webpack-dev-server 相关配置
    devServer: {
        open:false,
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8080,
        // 设置代理
        https:false,
        hotOnly:false,
        proxy: {
            '/api': {
                // 目标 API 地址
                // 开发环境
                target: '',

                // 如果要代理 websockets
                ws: false,
                // 将主机标头的原点更改为目标URL(设置跨域)
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        /*before(app) {
           app.get('/home',(req,res)=>{
               res.json(home)
           });
        }*/
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('styles', resolve('src/assets/style'))
    }

}
