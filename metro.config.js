const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')

const config = getDefaultConfig(__dirname)

config.resolver.assetExts = [...getDefaultConfig(__dirname).resolver.assetExts, 'docx']

module.exports = withNativeWind(config, { input: './src/shared/styles/global.css' })
