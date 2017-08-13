'use strict';

export default function (app) {
    app
        .factory('Price', storeFactory);

        function storeFactory (ApiV1) {
          'ngInject'

          return ApiV1.all('orders');
        }
}
