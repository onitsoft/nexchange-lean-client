'use strict';

export default function (app) {
    app
        .factory('ApiV1', storeFactory);

        function storeFactory (ApiV1) {
          'ngInject'

          return ApiV1.all('price');
        }
}
