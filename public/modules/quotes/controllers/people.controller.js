'use strict';


angular.module('quote').controller('PeopleController', ['$scope', '$location', 'Authentication',
	function($scope, $location, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		var Driver={
			name:'',
			age:''
		}
		$scope.people=$scope.$parent.quote.people;
		$scope.addDriver=function(){
			var driver=angular.copy(Driver);
			driver.name="driver 1";
			driver.age="age 1";
			$scope.$parent.quote.people.drivers.push(driver);
		}
		$scope.removeDriver=function(driver,index){
			$scope.people.drivers.splice(index,1);
		}

		$scope.previousPage=function(driver,index){
			$location.path("quote/get");
		}
		$scope.nextPage=function(driver,index){
			$location.path("quote/legal");
		}
		
	}
]);