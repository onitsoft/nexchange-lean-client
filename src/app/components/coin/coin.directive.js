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
      coinSelected: '=',
      select: '='
    }
  };

  return directive;

  function coinController ($scope) {
    'ngInject';
    // TODO: migrate to conf
	  let hideCounterEvent = 'hide' + this.type;
    let self = this;
	  $scope.$on(hideCounterEvent, function(coinName) {
      self.selectedAsCounter = self.name === coinName;
    });

	  this.selectCurrent = function () {
	    self.select(self.name);
      self.selected = true;
      // hide coin from counters
      // this.coinSelected(self.type, self.name);

    };

    $scope.$on('reset', function() {
      self.selected = false;
    });

  }


}

export default coinComponent;
