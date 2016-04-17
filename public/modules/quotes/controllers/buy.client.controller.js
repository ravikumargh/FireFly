'use strict';


angular.module('quote').controller('BuyController', ['$scope','$location', 'Authentication',
	function($scope, $location, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.previousPage=function(driver,index){
			$location.path("quote/confirm");
		} 
	}
]);