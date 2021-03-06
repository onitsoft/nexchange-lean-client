'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';
import validationAddressDirective from './directives/validation-test/validation-address.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import ApiV1 from './services/restangular/api_v1';
import Price from './services/restangular/price';


validationTestDirective(shared);
validationAddressDirective(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);
ApiV1(shared);
Price(shared);

export default shared;
