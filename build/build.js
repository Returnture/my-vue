'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

// 打包的时候控制台样式
if (process.env.npm_lifecycle_script.split(' ')[2] == '"test"') {
    console.log(chalk.rgb(124, 252, 0)(
        '  building for test....\n' +
        '  测试环境编译:\n'
    ))
} else if (process.env.npm_lifecycle_script.split(' ')[2] == '"pre"') {
    console.log(chalk.rgb(124, 252, 0)(
        '  building for pre....\n' +
        '  预发布环境编译:\n'
    ))
} else if (process.env.npm_lifecycle_script.split(' ')[2] == '"pro"') {
    console.log(chalk.rgb(124, 252, 0)(
        '  building for pro....\n' +
        '  生产环境编译:\n'
    ))
} else if (process.env.npm_config_report) {
    console.log(chalk.rgb(124, 252, 0)(
        '  可视化打包文件分析工具编译中....\n'
    ))
} else {
    console.log(chalk.rgb(124, 252, 0)(
        '  编译中....\n'
    ))
}

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
