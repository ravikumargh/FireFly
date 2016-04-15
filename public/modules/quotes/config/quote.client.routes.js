'use strict';

// Setting up route
angular.module('quote').config(['$stateProvider',
	function($stateProvider) {
		 
		// Home state routing
		$stateProvider.
		state('quote', {
			url: '/quote',
			templateUrl: 'modules/quotes/views/home.client.view.html'
		});
	}
]);

 