const plugins = []
//添加收集覆盖率插件
plugins.push([
  "babel-plugin-istanbul", {
    extension: ['.ts', '.vue','.js'],
  }
])


module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
