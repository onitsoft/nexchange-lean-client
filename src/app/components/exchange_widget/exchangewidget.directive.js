'use strict';

import cointInputTpl from './exchangewidget.html';

function exchangeWidgetComponenet($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: cointInputTpl,
    controller: exchangeWidgetController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      amount: '@',
      type: '@',
      address: '=',
    }
  };

  return directive;

  function exchangeWidgetController ($scope) {
    'ngInject';

    this.coinSelected = function (type, coin) {
        // TODO: migrate to conf
        type = type === 'deposit' ? 'receive' : 'deposit';
        let event = 'reset' + type;
        $scope.$broadcast(event, coin);
    };

    this.showWithdrawAddress = function () {
      $scope.$parent.showWithdrawAddress = true;
    }

  }

}

export default exchangeWidgetComponenet;
