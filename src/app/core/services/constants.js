'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        })
      .constant('API_V1_BASE_URL', 'https://nexchange.co.uk/en/api/v1/')
      .constant('AMOUNT_CHANGE_DEBOUNCE', 500)
      .constant('CHANGED_EVENT_SUFFIX', 'Changed');
}
