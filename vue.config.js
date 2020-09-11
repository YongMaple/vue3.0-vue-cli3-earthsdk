const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    // lintOnSave: false,
    configureWebpack: (config) => {
        const cwp = new CopyWebpackPlugin({
            patterns: [
                {
                    from: './node_modules/cesium/Build/Cesium', // 调试时，将Cesium换成CesiumUnminified
                    to: 'js/Cesium',
                    toType: 'dir',
                },
                {
                    from: './node_modules/earthsdk/dist/XbsjCesium',
                    to: 'js/earthsdk/XbsjCesium',
                    toType: 'dir',
                },
                {
                    from: './node_modules/earthsdk/dist/XbsjEarth',
                    to: 'js/earthsdk/XbsjEarth',
                    toType: 'dir',
                },
            ],
        })
        config.plugins.push(cwp)
    },
}
