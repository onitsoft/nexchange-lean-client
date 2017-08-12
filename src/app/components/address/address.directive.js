'use strict';

import addressTpl from './address.html';

function footerComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: addressTpl,
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function FooterController () {
	  $log.debug('Hello from footer controller!');
  }

}

export default footerComponent;
