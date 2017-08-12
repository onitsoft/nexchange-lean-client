'use strict';

import footerDirective from './header.directive';
import './header.scss';

const headerModule = angular.module('footer-module', []);

headerModule
  .directive('footerTest', footerDirective);

export default headerModule;
