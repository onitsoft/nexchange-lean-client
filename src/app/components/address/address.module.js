'use strict';

import addressDirective from './address.directive';
import './address.scss';

const addressModule = angular.module('address-module', []);

addressModule
  .directive('address', addressDirective);

export default addressModule;
