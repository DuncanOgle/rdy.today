const path = require('path');

// const javascript = {
//     test: /\.(js|jsx)$/,
//     exclude: /node_modules|dist/,
//     use: [{
//         loader: 'babel-loader'
//     }]
// };

const styles = {
    test: /\.css$/,
    exclude: /node_modules|dist/,
    use: [
        'style-loader',
        'css-loader'
    ]
};

const config = {
    entry: ['./src/index.tsx'],

    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_t.js'
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
    },

    module: {
        rules: [
            styles,
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    }
};

module.exports = config;
