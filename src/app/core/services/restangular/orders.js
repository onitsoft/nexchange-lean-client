'use strict';

export default function(app) {
	app
		.factory('Orders', storeFactory);

	function storeFactory(ApiV1, $q) {
		'ngInject'

		// return ApiV1.all('orders');
		let baseData = {
			'status': 1,
			'deposit_address': 123,
		}
		let postPromise = $q.defer();
		let depositPendingPromise = $q.defer;
		let depositCreditedPromise = $q.defer();

		promise.succeess(function() {
			return baseData
		});


		let returnedPromise = depositPendingPromise;


		depositPendingPromise.succeess(function() {
			return angular.extend(angular.copy(baseData), {
				status: 2
			})
		});

		depositCreditedPromise.succeess(function() {
			return angular.extend(angular.copy(baseData), {
				status: 3
			})
		});
		return {
			post: postPromise.promise,
			get {
				one: returnedPromise
			}:
		};

	}

	setTimeout(function() {
		returnedPromise = depositCreditedPromise;
	}, 20 * 1000);
}