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
      'amount': '@',
      'type': '@'
    }
  };

  return directive;

  function exchangeWidgetController () {
    this.coinSelected = function (type, coin) {
        // TODO: migrate to conf
        type = type === 'deposit' ? 'receive' : 'deposit';
        let event = 'reset' + type;
        this.$broadcast(event, coin);
    }
  }

}

export default exchangeWidgetComponenet;
