const path = require('path');

const javascript = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules|dist/,
    use: [{
        loader: 'babel-loader'
    }]
};

const styles = {
    test: /\.css$/,
    exclude: /node_modules|dist/,
    use: [
        'style-loader',
        'css-loader'
    ]
};

const config = {
    entry: ['./src/index.jsx'],

    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },

    module: {
        rules: [javascript, styles]
    }
};

module.exports = config;
