import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy'
import ivy from '../../bin/rollup-plugin-ivy';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { extract } from '../../bin/rollup-plugin-ivy-extract';
import { md } from '../../bin/rollup-plugin-ivy-md';
import { ts } from '../../bin/rollup-plugin-ivy-ts'

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/doc/main.ts',
    output: {
        name: 'main',
        dir: 'public',
        format: 'esm', // iife (immediately-invoked function expression) incompatible with code-splitting modules
        sourcemap: false
    },
    plugins: [
        postcss({
            extract: "public/styles.css",
            minimize: production
        }),
        ivy({
            preProcessors: { "@@extract": extract, "@@md": md, "@@ts": ts }
        }),
        typescript({
            clean: production,
            objectHashIgnoreUnknownHack: true,
            typescript: require('typescript'),
            tsconfig: "tsconfig.rollup.json"
        }),
        copy({
            targets: [ // warning: those files are not watched!
                { src: ['src/doc/index.html'], dest: 'public' },
                { src: ['src/doc/api/mvc.png'], dest: 'public' }
            ] 
        }),
        production && terser() // minify, but only in production
    ]
};
