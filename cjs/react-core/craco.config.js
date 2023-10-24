const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '#common': path.resolve(__dirname, './src/_shared/common/src/index.ts'),
            '#common/*': path.resolve(__dirname, './src/_shared/common/src/*'),
            '#node-common': path.resolve(__dirname, './src/_shared/node-common/src/index.ts'),
            '#node-common/*': path.resolve(__dirname, './src/_shared/node-common/src/*'),
        },
        test: /\.tsx$/,
        exclude: /(disposables)/,
        use: {
            loader: "babel-loader?cacheDirectory",
            options: require("./package.json").babel
        }
    },
};
