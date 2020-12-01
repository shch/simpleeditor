const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const postcss = require('rollup-plugin-postcss');
const sass = require('node-sass');
const typescript = require('@rollup/plugin-typescript');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const isProductionEnv = process.env.NODE_ENV === 'production'

const babelOptions = {
  "presets": ['@babel/preset-env'],
  "exclude": ['node_modules/**' ]
}

const processSass = function(context, payload) {
  return new Promise(( resolve, reject ) => {
    sass.render({
      file: context
    }, function(err, result) {
      if( !err ) {
        resolve(result);
      } else {
        reject(err)
      }
    });
  })
}

module.exports = [
  {
    input: resolveFile('src/index.ts'),
    output: {
      file: resolveFile('dist/editor.js'),
      format: 'umd',
      name: 'editor',
    }, 
    plugins: [
      typescript(),
      postcss({
        extract: true,
        minimize: isProductionEnv,
        extensions:['css', 'scss'],
        process: processSass,
      }),
      babel(babelOptions),
      
    ],
  },
]