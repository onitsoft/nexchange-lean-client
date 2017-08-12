'use strict';

import coinTpl from './coin.html';

function coinComponent($log) {
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
      expanded: '@',
      name: '@',
      iconSrc: '@',
      iconClass: '@',
      selectedAsCounter: '@',
      coinSelected: '&',
      select: '&'
    }
  };

  return directive;

  function coinController ($scope) {
    'ngInject';
    // TODO: migrate to conf
	  let hideCounterEvent = 'hide' + this.type;
    let self = this;
	  $scope.$on(hideCounterEvent, function(coinName) {
      this.selectedAsCounter = this.name === coinName;
    });

	  this.selectCurrent = function () {
	    debugger;
	    this.select(this.name);
      self.selected = true;
      // hide coin from counters
      self.coinSelected(this.name);

    };

    $scope.$on('reset', function() {
      self.selected = false;
    });

  }


}

export default coinComponent;
