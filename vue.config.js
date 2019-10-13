// vue.config.js
const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 40480 })) 
    },

    configureWebpack: {
      optimization: {
        splitChunks: false
      }
    },

    css: {
      extract: false,
    }
}

function addStyleResource (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/styles/style.css'),
        ],
      })
  }