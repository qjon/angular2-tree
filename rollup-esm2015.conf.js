//rollup.config.ts

import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import angular from 'rollup-plugin-angular-aot';

export default {
  input: 'tmp/esm2015/main.js',
  output: {
    format: 'es',
    file: 'dist/esm2015/angular2-tree.es2015.js',
    name: 'angular2tree',
    sourcemap: false,
    globals: {
      '@angular/common': 'vendor._angular_common',
      '@angular/compiler': 'vendor._angular_compiler',
      '@angular/core': 'vendor._angular_core',
      '@angular/http': 'vendor._angular_http',
      '@angular/platform-browser': 'vendor._angular_platformBrowser',
      '@angular/platform-browser-dynamic': 'vendor._angular_platformBrowserDynamic',
      '@angular/router': 'vendor._angular_router',
      '@angular/forms': 'vendor._angular_forms',
      //   '@ngrx/core': 'vendor._ngrx_core',
      //   '@ngrx/store': 'vendor._ngrx_store',
      //   '@ngrx/effects': 'vendor._ngrx_effects',
      //   'ngx-contextmenu': 'vendor._ng_contextmenu',
      'rxjs/BehaviorSubject': 'vendor:rxjs_BehaviorSubject',
      'rxjs/Observable': 'vendor:rxjs_Observable',
      'ng2-translate': 'vendor._ng_translate',
      'ng2-dnd': 'vendor._ng_dnd',
    }
  },
  context: 'this',
  plugins: [
    angular(),
    typescript(),
    alias({
      rxjs: __dirname + '/node_modules/rxjs/_esm2015'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
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
    'ng2-translate',
    'ng2-dnd',
    'rxjs/add/observable/of',
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
