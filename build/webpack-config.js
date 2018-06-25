const path = require('path');

module.exports = {
    entry: './hello.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'hello.bundle.js',
        libraryTarget: 'umd'
    },
    target: 'node',
    externals: ['sequelize'],
    mode: 'development',
    devtool: '#cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};
