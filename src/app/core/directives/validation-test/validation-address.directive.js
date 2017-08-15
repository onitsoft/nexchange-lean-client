'use strict';

import walletAddressValidator from 'wallet-address-validator';

export default function (app) {

    app.directive('validationAddress', validationAddressDirective);

    function validationAddressDirective () {
        'ngInject';

        return {
            restrict: 'A',
            link: linkFn,
            require: 'ngModel',
            scope: false
        };

        function validateWallet(address, coinname) {
            let rules = {
                BTC: /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/,
                LTC: /^L[1-9A-Za-z]{25,34}$/,
                ETH: /^0x[0-9a-fA-F]{40}$/,
            };

            if (!(coinname in rules))
                return null;

            return rules[coinname].test(address);
        };

        function linkFn (scope, elem, attrs, ngModelCtrl) {
            let getValidator = function(coinname, address) {
                return function () {
                    // validate
                    console.log("VALIDATE2", coinname, address);

                    if (address && coinname) {
                        return validateWallet(address, coinname);
                    }

                    return false;
                }   
            }

            scope.$watch(attrs.ngModel, (address) => {
                let validator = getValidator(attrs.coinname, address);
                scope.addressConf.valid = validator(address);
                ngModelCtrl.$setValidity('address', scope.addressConf.valid);
            });
        }
    }
}




