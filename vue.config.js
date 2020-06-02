const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const pagesObj = {
  devcreate: {
    entry: 'src/devtools/index.js',
    filename: 'devcreate.html'
  }
}
const chromeName = ['popup', 'devtools']
const plugins = [{
  from: path.resolve('src/manifest.json'),
  to: `${path.resolve('dist')}/manifest.json`
}]

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/main.js`,
    // template: "public/index.html",
    filename: `${name}.html`
  }
})

module.exports = {
  pages: pagesObj,
  configureWebpack: {
    entry: {
      background: './src/background/background.js',
      content: "./src/content/content.js"
    },
    output: {
      filename: 'js/[name].js'
    },
    plugins: [new CopyWebpackPlugin(plugins)]
  },
  filenameHashing: false,
  productionSourceMap: false
}