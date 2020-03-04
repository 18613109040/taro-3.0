const path = require('path')
const config = {
  projectName: 'demo',
  date: '2020-2-29',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    // prerender: {
    //   match: 'pages/**', // 所有以 `pages/shop/` 开头的页面都参与 prerender
    //   include: [], // `pages/any/way/index` 也会参与 prerender
    //   exclude: [], // `pages/shop/index/index` 不用参与 prerender
    //   tranformXML() {
    //     return <video src="https://pornhub.com/av8871239" />
    //   }
    // },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    // '@/components': path.resolve(__dirname, '..', 'src/components'),
    'utils': path.resolve(__dirname, '..', 'src/utils'),
    "taro-ui": path.resolve(__dirname, '../src/libs/taro-ui'),
    "nervjs": path.resolve(__dirname, '../node_modules/react'),
    "assets": path.resolve(__dirname, '../src/assets'),
    "pages": path.resolve(__dirname, '../src/pages'),
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
