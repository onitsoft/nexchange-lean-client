'use strict';

import footerDirective from './address.directive';
import './address.scss';

const footerModule = angular.module('footer-module', []);

footerModule
  .directive('footerTest', footerDirective);

export default footerModule;
