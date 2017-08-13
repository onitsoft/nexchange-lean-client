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
      address: '='
    }
  };

  return directive;

  function exchangeWidgetController ($scope, CHANGED_EVENT_SUFFIX) {
    'ngInject';
    let self = this;

    self.postSelect = function (newCoin, prevCoin, type) {
        // TODO: migrate to conf
        type = type === 'deposit' ? 'receive' : 'deposit';
        let eventData = {
          newCoin: newCoin,
          prevCoin: prevCoin,
        };
        let event = 'reset' + type;
        $scope.$broadcast(event, eventData);
    };

    self.changeCounter = function (eventData) {

    };

    self.showWithdrawAddress = function (eventData) {
      let eventName = eventData.type + CHANGED_EVENT_SUFFIX;
      $scope.$parent.showWithdrawAddress = true;
      $scope.$broadcast(eventName, eventData);
    }

  }

}

export default exchangeWidgetComponenet;
