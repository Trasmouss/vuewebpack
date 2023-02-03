const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry : path.join(__dirname, 'src', 'main.js'),
    output : {
        path : path.join(__dirname, 'dist'),
        publicPath : '/dist/',
        filename : 'build.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
    
}
