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
      coinSelected: '&'
    }
  };

  return directive;

  function coinInputController ($scope) {
    'ngInject';
    let self = this;
	  $log.debug('Hello from coinInput controller!');

	  this.icons = [
      {name: 'BTC'},
      {name: 'LTC'},
      {name: 'ETH'}
    ];

	  this.select = function (coinName) {
	    debugger;
	    self.selectedCoin = coinName;
	    $scope.$broadcast('reset')
    }
  }

}

export default addressComponent;
