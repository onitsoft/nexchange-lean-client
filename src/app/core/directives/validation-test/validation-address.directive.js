'use strict';

export default function (app) {

    app.directive('validationAddress', validationAddressDirective);

    function validationAddressDirective () {
        'ngInject';

        return {
            restrict: 'A',
            link: linkFn,
            require: 'ngModel'
        };

        function linkFn (scope, elem, attrs, ngModelCtrl) {
            let getValidator = function getValidator (val) {
                return function () {
                    return false;
                }   
            }

            scope.$watch(attrs.ngModel, (newVal) => {
                let validator = getValidator(attrs.coinName);
                if (validator(newVal)) {
                    ngModelCtrl.$setValidity('test', true);
                } else {
                    ngModelCtrl.$setValidity('test', false);
                }

            });
        }
    }
}