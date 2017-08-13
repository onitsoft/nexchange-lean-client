'use strict';

import cointInputTpl from './coininput.html';
import _ from 'lodash/core';

function addressComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: cointInputTpl,
    controller: coinInputController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      amount: '@',
      type: '@',
      selectedCoin: '@',
      showWithdrawAddress: '@',
      postSelect: '='
    }
  };

  return directive;

  function coinInputController ($scope, Price, AMOUNT_CHANGE_DEBOUNCE) {
    'ngInject';

    const changeEventName = 'changed';
    let self = this;
    let hideCounterEvent = 'reset' + this.type;
    // TODO: refactor to configs
    let counterChangedEvent = this.type === 'deposit' ? 'receive' + changeEventName : 'deposit' + changeEventName;

	  $log.debug('Hello from coinInput controller!');

	  self.icons = [
      {name: 'BTC'},
      {name: 'LTC'},
      {name: 'ETH'}
    ];

	  self.select = function (coinName) {
	    let prevCoin = self.selectedCoin;
	    self.selectedCoin = coinName;
	    self.postSelect(coinName, prevCoin, self.type);
	    $scope.$broadcast('reset')
    };

	  $scope.$on(hideCounterEvent, function(event, eventData) {
	    if (eventData.newCoin === this.selectedCoin) {
	      self.select(eventData.prevCoin);
      }
    });

	  $scope.$observe('amount', function(newAmount, oldAmount) {
	    let eventData = {
        newAmount: newAmount,
        oldAmount: oldAmount,
        coin: self.selectedCoin,
        type: self.type
      };
      let eventName = self.type + changeEventName;
      self.changeCounter(eventData)

    });

	  $scope.$on(counterChangedEvent, function (event, eventData) {
      _.debounce(function () {
        let pair = self.type === 'deposit' ? self.selectedCoin.toUpperCase() + eventData.coin.toUpperCase() :
          eventData.coin.toUpperCase() + self.selectedCoin.toUpperCase();

        Price.all(pair).all('latest').getList().then(function (priceList) {
          let basePrice = priceList[0].ask;
          $scope.amount = eventData.newAmount * basePrice;
        });
      }, AMOUNT_CHANGE_DEBOUNCE);
    });


  }

}

export default addressComponent;
