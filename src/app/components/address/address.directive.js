'use strict';

import addressTpl from './address.html';

function addressComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: addressTpl,
    controller: addressController,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      'addr': '='
    }
  };

  return directive;

  function addressController () {
	  $log.debug('Hello from address controller!');
  }

}

export default addressComponent;
