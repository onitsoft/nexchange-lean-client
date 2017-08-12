'use strict';

import exchangeWidgetDirective from './exchangewidget.directive';
import './exchangewisget.scss';

const exchangeWidgetModule = angular.module('exchange-widget-module',
  [
    'coin-input-module',
    'address-module'
  ]);

exchangeWidgetModule
  .directive('exchangeWidget', exchangeWidgetDirective);

export default exchangeWidgetModule;
