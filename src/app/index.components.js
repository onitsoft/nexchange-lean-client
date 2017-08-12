'use strict';

import headerModule from './components/header/header.module';
import footerModule from './components/footer/footer.module';

import coinModule from './components/coin/coin.module';
import coinInputModule from './components/coin_input/coininput.module';
import exchangeWidgetModule from './components/exchange_widget/exchangewidget.module';
import addressModule from './components/address/address.module';

export default angular.module('index.components', [
  headerModule.name,
  coinModule.name,
  coinInputModule.name,
  exchangeWidgetModule.name,
  addressModule.name,
  footerModule.name,
]);
