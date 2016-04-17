'use strict';


angular.module('quote').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.quote={
			get:'',
			people:{
				name:'',
				drivers:[]
			},
			legal:'',
			confirm:'',
			buy:''
		}
	}
]);