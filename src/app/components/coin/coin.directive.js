'use strict';

import coinTpl from './coin.html';

function coinComponenet($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: coinTpl,
    controller: coinController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      type: '@',
      selected: '@',
      coinName: '@',
      iconSrc: '@',
      iconClass: '@',
      selectedAsCounter: '@'
    }
  };

  return directive;

  function coinController () {
    // TODO: migrate to conf
	  let hideCounterEvent = 'hide' + this.type;

	  this.$on(hideCounterEvent, function(coinName) {
      this.selectedAsCounter = this.coinName === coinName;
    });

	  this.selectCurrent = function () {
      this.select(this.coinName);
      this.selected = true;
    };

    this.$on('reset', function() {
      this.selected = false;
    });

  }

}

export default coinComponent;
