import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
export default {
  input: 'src/index.js',
  output: {
    name: 'VueAddrPicker',
    exports: 'named',
  },
  plugins: [
    vue({
      css: true,
      compilerTemplate: true,
    }),
    json(),
    commonjs()
  ],
  external: ['mint-ui', 'mint-ui/lib/style.css']
};