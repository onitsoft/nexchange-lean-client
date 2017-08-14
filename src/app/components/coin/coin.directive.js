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
      selected: '@',
      expanded: '@',
      name: '@',
      fullName: '@',
      iconSrc: '@',
      iconClass: '@',
      select: '='
    }
  };

  return directive;

  function coinController ($scope) {
    'ngInject';
    // TODO: migrate to conf
    let self = this;

	  this.selectCurrent = function () {
	    self.select(self.name);
      self.selected = true;
    };

    $scope.$on('reset', function(event, coinName) {
      self.selected = self.name === coinName;
    });

  }


}

export default coinComponent;
