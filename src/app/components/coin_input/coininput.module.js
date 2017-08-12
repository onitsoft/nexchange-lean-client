'use strict';

import coinInputirective from './coininput.directive';
import './coininput.scss';

const coinInputModule = angular.module('coin-input-module', [
  'coin-module'
]);

coinInputModule
  .directive('coinInput', coinInputirective);

export default coinInputModule;
