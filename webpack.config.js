const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports={
    entry:{
        entry:'./src/src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },{
                test:/\.(png|jpg|gif)/ ,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5000,
                        outputPath:'images/'
                    }
                }]
             },{
                test: /\.html$/,
                loader: 'html-loader'
            },{
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
        ]
    },
    plugins:[
        new htmlPlugin({
            hash:true,
            template:'./src/index.html',
            minify: {
                caseSensitive: false,
                removeComments: true,
                removeEmptyAttributes: true,
                collapseWhitespace: true
            }
        })
    ],
    devServer:{
        /*设置基本目录结构，也就是你想要使用服务的目录地址*/
        contentBase:path.resolve(__dirname,'dist'),
        /*服务器的IP地址，可以使用IP也可以使用localhost*/
        host:'localhost',
        /*服务端压缩是否开启，目前开不开都行，想关你就关*/
        compress:true,
        /*配置服务端口号，建议别用80，很容易被占用，你要是非要用也是可以的。*/
        port:9090
    },
    resolve:{

    　　extensions: ['.js', '.json'],
    　　alias: {
        　　'@': resolve('src'),
        　　'bootstrap':resolve('./lib/bootstrap-3.3.7'),
    　　}
    }
}