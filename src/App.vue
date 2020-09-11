<template>
    <div id="app">
        <div id="earthContainer"></div>
        <div class="viewWrap">
            <div class="bg1"></div>
            <div class="bg2"></div>
            <div class="bg3"></div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
// 加载地图
async function startup() {
    await XE.ready()
    await XE.HTML.loadMapV()
    return await createEarth()
}
// 初始化
function createEarth() {
    let earth = new XE.Earth('earthContainer')
    earth.weather.atmosphere.enabled = false
    // 开启点击事件
    earth.interaction.picking.enabled = true
    earth.interaction.picking.clickedColor = [1, 1, 1, 1]
    earth.interaction.picking.hoverEnable = false
    earth.interaction.picking.hoveredColor = [1, 1, 1, 1]

    const bloom = earth.postProcess.bloom
    bloom.enabled = true
    bloom.glowOnly = false
    bloom.contrast = 119
    bloom.brightness = -0.4
    bloom.delta = 0.9
    bloom.sigma = 3.78
    bloom.stepSize = 5
    bloom.isSelected = false

    earth.sceneTree.root = {
        children: [
            {
                czmObject: {
                    name: '影像',
                    xbsjType: 'Imagery',
                    xbsjImageryProvider: {
                        XbsjImageryProvider: {
                            url:
                                'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
                            srcCoordType: 'WGS84',
                            dstCoordType: 'WGS84',
                        },
                    },
                },
            },
        ],
    }
    return earth
}
export default {
    name: 'App',
    setup() {
        const _earth = reactive({})
        onMounted(() => {
            _earth.value = startup()
        })
        return {
            _earth
        }
    },
}
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: auto;
    position: relative;
}
#earthContainer {
    width: 100%;
    height: 100%;
}
</style>