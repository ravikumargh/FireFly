'use strict';

// Setting up route
angular.module('quote').config(['$stateProvider',
	function($stateProvider) {
		 
		// Home state routing
		$stateProvider.
		state('quote', {
			url: '/quote',
			templateUrl: 'modules/quotes/views/home.client.view.html'
		}).state('quote.get', {
			url: '/get',
			templateUrl: 'modules/quotes/views/quote.view.html'
		}).state('quote.people', {
			url: '/people',
			templateUrl: 'modules/quotes/views/people.view.html'
		}).state('quote.legal', {
			url: '/legal',
			templateUrl: 'modules/quotes/views/legal.view.html'
		}).state('quote.confirm', {
			url: '/confirm',
			templateUrl: 'modules/quotes/views/confirm.view.html'
		}).state('quote.buy', {
			url: '/buy',
			templateUrl: 'modules/quotes/views/buy.view.html'
		});
	}
]);

 