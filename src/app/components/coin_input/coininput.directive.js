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
      selectedCoin: '@'
    }
  };

  return directive;

  function coinInputController () {
	  $log.debug('Hello from coinInput controller!');

	  this.select = function (coinName) {
	    this.selectedCoin = coinName;
	    this.$broadcast('reset')
    }
  }

}

export default addressComponent;
