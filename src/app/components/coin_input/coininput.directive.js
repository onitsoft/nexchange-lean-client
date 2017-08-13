'use strict';

import cointInputTpl from './coininput.html';

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

  function coinInputController ($scope) {
    'ngInject';
    let self = this;
    let hideCounterEvent = 'reset' + this.type;

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

	  $scope.$on(hideCounterEvent, function(eventData) {
	    if (eventData.newCoin === this.selectedCoin) {
	      self.select(eventData.prevCoin);
      }
    });
  }

}

export default addressComponent;
