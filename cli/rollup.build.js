process.env.NODE_ENV = 'production'
const path = require('path');
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require("rollup-plugin-commonjs");
const { uglify } = require('rollup-plugin-uglify');//压缩
const filesize = require('rollup-plugin-filesize');
const dir = require('node-dir');
const root = path.resolve(__dirname, '..');
const files = dir.files(`${root}/src`, { sync: true }).filter(file_path => path.extname(file_path) === ".js");
const inputOptions = {
  input: "",
  plugins: [babel(), commonjs(), resolve(), uglify(), filesize()]
};
const outputOptions = {
  format: "cjs",
  file: ""
};
(async () => {
  for (let i in files) {
    const entry = files[i];
    const file_name = path.basename(entry);

    inputOptions.input = entry;
    outputOptions.file = `${root}/dist/${file_name}`;


    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
  }
})()



