'use strict';

export default function (app) {
    app
        .factory('ApiV1', storeFactory);

        function storeFactory (Restangular, API_V1_BASE_URL) {
          'ngInject'
          Restangular.setBaseUrl(API_V1_BASE_URL);

          return Restangular;
        }
}
