'use strict';

import headerModule from './components/header/header.module';
import addressModule from './components/address/address.module';
import footerModule from './components/footer/footer.module';

export default angular.module('index.components', [
  headerModule,
  addressModule,
  footerModule.name,
]);
