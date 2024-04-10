import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/buildClassNames.ts',
  output: [
    {
      file: 'dist/buildClassNames.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/buildClassNames.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      exclude: ['**/*.test.ts'],
    }),
  ],
};
