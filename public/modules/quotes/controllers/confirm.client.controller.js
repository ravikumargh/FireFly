'use strict';


angular.module('quote').controller('ConfirmController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.previousPage=function(driver,index){
			$location.path("quote/legal");
		}
		$scope.nextPage=function(driver,index){
			$location.path("quote/buy");
		}
	}
]);