module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        // plugins: [['module-resolver', {
        //     // root: ['.'],
        //     alias: {
        //         '#': './src',
        //         // '@app': './src/app',
        //         // '@/*': './src/*',
        //         "@test/common": "../common/src",
        //         "@test/common/*": "../common/src/*",
        //         // "#common": "../common/src",
        //         // "#common/*": "../common/src/*",
        //     },
        // },],],
    };
};
