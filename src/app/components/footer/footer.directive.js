'use strict';

import footerTpl from './footer.html';

function footerComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: footerTpl,
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function FooterController () {
	  $log.debug('Hello from header controller!');
  }

}

export default footerComponent;
