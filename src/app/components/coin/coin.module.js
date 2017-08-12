'use strict';

import coinDirective from './coin.directive';
import './coin.scss';

const coinModule = angular.module('coin-module', []);

coinModule
  .directive('coin', coinDirective);

export default coinModule;
