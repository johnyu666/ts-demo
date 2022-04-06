const path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
    devServer:{
        static: './dist'
    },
    module: {
        rules:
            [
                {
                    test: /\.js$/, exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader', options: { presets: ['@babel/preset-env'] }
                    }  
                },
                { test: /\.tsx?$/, loader: "ts-loader" }
            ]
    }
};

