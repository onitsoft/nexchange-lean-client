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
    scope: false
  };

  return directive;

  function addressController ($scope) {
    'ngInject';
    $scope.addressConf.show = false;
  }

}

export default addressComponent;
