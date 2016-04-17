'use strict';


angular.module('quote').controller('QuoteController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		//$scope.quote=$scope.$parent.quote;
		$scope.nextPage=function(driver,index){
			$location.path("quote/people");
		}
	}
]);