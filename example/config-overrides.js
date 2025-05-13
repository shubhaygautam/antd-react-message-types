const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#5a51de',
      '@text-color': '#808080',
      '@text-color-secondary': '#b3b3b3',
      '@border-radius-base': '3px'
    },
  })
)
