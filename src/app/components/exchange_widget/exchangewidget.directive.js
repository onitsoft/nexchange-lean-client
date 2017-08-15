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
      postSelect: '=',
      changeCounterPrice: '='
    }
  };

  return directive;

  function exchangeWidgetController ($scope, CHANGED_EVENT_SUFFIX) {
    'ngInject';
    let self = $scope;

    self.coinFrom = 'BTC';
    self.coinTo = 'ETH';
    self.addressConf = {
      show: false,
      valid: false
    };
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

    self.changeCounterPrice = function (eventData) {
      let eventName = eventData.type + CHANGED_EVENT_SUFFIX;
      $scope.$broadcast(eventName, eventData);
    };

    self.showWithdrawAddress = function () {
      $scope.$parent.showWithdrawAddress = true;
    }

  }

}

export default exchangeWidgetComponenet;
