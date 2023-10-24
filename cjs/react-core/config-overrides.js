// This was added because of the error with twilio-video and util lib
// https://alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5
// https://github.com/twilio/twilio-video.js/issues/1242
const webpack = require('webpack')
module.exports = function override(config) {
  const fallback = config.resolve.fallback || {}
  Object.assign(fallback, {
    util: require.resolve('util/'),
  })
  config.resolve.fallback = fallback
  return config
}
