'use strict';

import cointInputTpl from './coininput.html';
import { debounce } from 'lodash'

function coinInputComponenet($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: cointInputTpl,
    controller: coinInputController,
    controllerAs: 'vm',
    bindToController: true,
    reqParams: '^ngModel',
    scope: {
      ngModel: '=',
      type: '@',
      selectedCoin: '@',
      showWithdrawAddress: '@',
      postSelect: '=',
      changeCounterPrice: '='
    }
  };

  return directive;

  function coinInputController ($scope, $element, $attrs,
                                Price, AMOUNT_CHANGE_DEBOUNCE, CHANGED_EVENT_SUFFIX, DEFAULT_ORDER_AMOUNT) {
    'ngInject';

    let self = this;
    let hideCounterEvent = 'reset' + $attrs.type;

    if ($attrs.type === 'deposit') {
      $scope.ngModel = DEFAULT_ORDER_AMOUNT;
    }

    // TODO: refactor to configs
    let counterChangedEvent = $attrs.type === 'deposit' ? 'receive' + CHANGED_EVENT_SUFFIX : 'deposit' + CHANGED_EVENT_SUFFIX;
    // let counterChangedEvent = 'deposit' + CHANGED_EVENT_SUFFIX;

	  self.icons = [
      {name: 'BTC', fullName: 'Bitcoin'},
      {name: 'LTC', fullName: 'Litecoin'},
      {name: 'ETH', fullName: 'Ethereum'}
    ];

	  $scope.requestNewPrice = function requestNewPrice () {
      let eventData = {
        newAmount: $scope.ngModel,
        coin: self.selectedCoin,
        type: self.type
      };

      self.changeCounterPrice(eventData)
    };

	  self.select = function (coinName) {
	    let prevCoin = self.selectedCoin;
	    self.selectedCoin = coinName;
	    self.postSelect(coinName, prevCoin, self.type);
	    $scope.$broadcast('reset', coinName);

      $scope.requestNewPrice();
    };

	  $scope.$on(hideCounterEvent, function(event, eventData) {
	    if (eventData.newCoin === self.selectedCoin) {
	      self.select(eventData.prevCoin);
      }
    });

	  $scope.$on(counterChangedEvent, function (event, eventData) {
	    let updatePrice = function updatePrice () {
        let pair = eventData.coin.toUpperCase() + self.selectedCoin.toUpperCase();

        Price.all(pair).all('latest').getList().then(function (priceList) {
          let basePrice = priceList[0].ticker.ask;
          $scope.ngModel = (eventData.newAmount * basePrice);
        });
      };

      // debounce(updatePrice, AMOUNT_CHANGE_DEBOUNCE);
      if (self.timer) {
        clearTimeout(self.timeout);
      }

      self.timer = setTimeout(updatePrice, AMOUNT_CHANGE_DEBOUNCE);
    });
  }
}

export default coinInputComponenet;
