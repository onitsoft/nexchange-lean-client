'use strict';

import route from './main.route';
const mainPageModule = angular.module('main-module', [
  'ui.router',
  'exchange-widget-module'
]);

mainPageModule
    .config(route);

export default mainPageModule;
