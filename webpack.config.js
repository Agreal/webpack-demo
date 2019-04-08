const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg)/,
                use: ['file-loader']
            },
            {
                test: /\.xml/,
                use: ['xml-loader']
            }
        ]
    }
};