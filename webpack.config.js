module.exports = {
    entry: './blocks/app.js',
    output: {
        filename: 'app.js',
        path: `${__dirname}/web/build/`
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'webpack-bem-loader',
                        options: {
                            naming: 'origin',
                            levels: [
                                `${__dirname}/blocks/`
                            ],
                            generators: {
                                js: null
                            }
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env']
                        }
                    }
                ]
            }
        ]
    }
};
