'use strict';

export default function (app) {
    app
        .factory('ApiV1', storeFactory);

        function storeFactory (RestAngular, API_V1_BASE_URL) {
          'ngInject'
          RestAngular.setBaseUrl(API_V1_BASE_URL);

          return RestAngular;
        }
}
