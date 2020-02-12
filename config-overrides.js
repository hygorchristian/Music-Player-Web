const { override, addBabelPlugin } = require('customize-cra')

const rootImport = [
  'root-import',
  {
    rootPathPrefix: '~',
    rootPathSuffix: 'src'
  }
]

module.exports = override(
  addBabelPlugin(rootImport)
)
