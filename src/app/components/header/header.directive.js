'use strict';

import headerTpl from './header.html';

function HeaderComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: headerTpl,
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function HeaderController () {
	  $log.debug('Hello from header controller!');
  }

}

export default HeaderComponent;
