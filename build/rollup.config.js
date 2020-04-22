import vue from 'rollup-plugin-vue';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';

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
    resolve({
      // pass custom options to the resolve plugin
    }),
    // buble()
  ],
  external: ['mint-ui', 'mint-ui/lib/style.css'],
};