//rollup.config.ts

import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import angular from 'rollup-plugin-angular-aot';

export default {
  input: 'tmp/esm5/main.js',
  output: {
    format: 'es',
    file: 'dist/esm5/angular2-tree.es5.js',
    name: 'angular2tree',
    sourcemap: false,
    globals: {}
  },
  context: 'this',
  plugins: [
    angular(),
    typescript(),
    alias({
      rxjs: __dirname + '/node_modules/rxjs-es'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      modulesOnly: true
    })
  ],
  external: [
    '@angular/animations',
    '@angular/animations/browser',
    '@angular/cdk',
    '@angular/core',
    '@angular/common',
    '@angular/common/http',
    '@angular/compiler',
    '@angular/core',
    '@angular/core/testing',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser/animations',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@ngrx/core',
    '@ngrx/store',
    '@ngrx/store/src/selector',
    '@ngrx/effects',
    '@ngrx/store-devtools',
    'lodash.isequal',
    'ng2-translate',
    'ng2-dnd',
    'rxjs/add/observable/empty',
    'rxjs/add/observable/of',
    'rxjs/add/observable/combineLatest',
    'rxjs/add/operator/do',
    'rxjs/add/operator/withLatestFrom',
    'rxjs/add/observable/merge',
    'rxjs/operators',
    'rxjs/operator/map',
    'rxjs/operator/filter',
    'rxjs/BehaviorSubject',
    'rxjs/Subject',
    'rxjs/Observable',
    'rxjs/Subscription',
    'ngx-contextmenu'
  ],
}
