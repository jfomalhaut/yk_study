module.exports = { 
    entry: [ //시작점
        '@babel/polyfill',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //js 파일을 읽을 수 있도록 하는 로더
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js'] //확장자 종류
    },
    output: {
        path: __dirname + '/dist', //웹팩의 아웃풋
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: { // 받아놓은 devServer
        contentBase: './dist',
        port: 3000,
        historyApiFallback: true 
    }
}