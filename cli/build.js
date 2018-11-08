'use strict'
// require('./check-versions')()

process.env.NODE_ENV = 'production'
const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const spinner = ora('building for production...')
const path = require('path');
const dir = require('node-dir');



spinner.start()
const files = dir.files(path.resolve(__dirname, '../src'), { sync: true }).filter(file_path => path.extname(file_path) === ".js");
const entrys = {};
files.forEach((file_path) => {
  entrys[path.basename(file_path)] = file_path;
});
webpack({
  entry: entrys,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]'
  }
}, (err, stats) => {
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
    console.log(chalk.red('Build failed with errors.\n'))
    process.exit(1)
  }
})




