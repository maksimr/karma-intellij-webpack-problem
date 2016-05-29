module.exports = {
    entry: ['./src/add.js'],

    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\*.js/,
            loader: 'babel-loader',
            query: {
                presets: 'es2015'
            }
        }]
    }
};
