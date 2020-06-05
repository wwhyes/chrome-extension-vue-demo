const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const pagesObj = {
  devcreate: { entry: 'src/devtools/index.js', filename: 'devcreate.html' }
}
const chromeName = ['popup', 'devtools']
const plugins = [
  {
    from: path.resolve('src/manifest.json'),
    to: `${path.resolve('dist')}/manifest.json`
  },
  {
    from: path.resolve('src/assets/logo.png'),
    to: `${path.resolve('dist')}/img/logo.png`
  }
]

chromeName.forEach(name => {
  pagesObj[name] = {
    css: {
      loaderOptions: {
        less: {
          modifyVars: {
            // less vars，customize ant design theme
          },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true
        }
      }
    },
    entry: `src/${name}/main.js`,
    // template: "public/index.html",
    filename: `${name}.html`
  }
})

const vueConfig = {
  pages: pagesObj,
  configureWebpack: {
    entry: {
      background: './src/background/background.js',
      content: './src/content/content.js'
    },
    output: {
      filename: 'js/[name].js'
    },
    plugins: [new CopyWebpackPlugin(plugins)]
  },
  filenameHashing: false,
  productionSourceMap: false
}

module.exports = vueConfig
