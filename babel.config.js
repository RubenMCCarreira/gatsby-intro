module.exports = function(api) {
  api.cache(true)

  const plugins = ["@emotion", "@babel/plugin-proposal-class-properties"]
  const presets = ["@emotion/babel-preset-css-prop"]

  return { plugins, presets }
}
