import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import angular from 'rollup-plugin-angular-aot';

export default {
  input: 'tmp/esm5/main.js',
  output: {
    format: 'umd',
    file: 'dist/bundles/angular2-tree.umd.js',
    name: 'angular2tree',
    sourcemap: false,
    globals: {
      '@angular/animations': 'ng.angular.animations',
      '@angular/animations/browser': 'ng.angular.animations-browser',
      '@angular/core': 'ng.angular.core',
      '@angular/cdk': 'ng.angular.cdk',
      '@angular/cdk/a11y': 'ng.angular.cdk-a11y',
      '@angular/cdk/bidi': 'ng.angular.cdk-bidi',
      '@angular/cdk/coercion': 'ng.angular.cdk-coercion',
      '@angular/cdk/collections': 'ng.angular.cdk-collections',
      '@angular/cdk/keycodes': 'ng.angular.cdk-keycodes',
      '@angular/cdk/layout': 'ng.angular.cdk-layout',
      '@angular/cdk/observers': 'ng.angular.cdk-observers',
      '@angular/cdk/overlay': 'ng.angular.cdk-overlay',
      '@angular/cdk/platform': 'ng.angular.cdk-platform',
      '@angular/cdk/portal': 'ng.angular.cdk-portal',
      '@angular/cdk/rxjs': 'ng.angular.cdk-rxjs',
      '@angular/cdk/scrolling': 'ng.angular.cdk-scrolling',
      '@angular/cdk/stepper': 'ng.angular.cdk-stepper',
      '@angular/cdk/table': 'ng.angular.cdk-table',
      '@angular/common/http': 'ng.angular.common-http',
      '@angular/common': 'ng.angular.common',
      '@angular/compiler': 'ng.angular.compiler',
      '@angular/platform-browser': 'ng.angular.platform-browser',
      '@angular/platform-browser/animations': 'ng.angular.platform-browser-animations',
      '@angular/platform-browser-dynamic': 'ng.angular.platform-browser-dynamic',
      '@angular/http': 'ng.angular.http',
      '@angular/router': 'ng.angular.router',
      '@angular/forms': 'ng.angular.forms',
      'ng2-dnd': 'ng.ng2-dnd',
      'ng2-translate': 'ng.ng2-translate',
      '@ngrx/store': 'ng.ngrx.store',
      '@ngrx/effects': 'ng.ngrx.effects',
      'angular2-uuid': 'ng.angular2-uuid',
    }
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
  ]
}
