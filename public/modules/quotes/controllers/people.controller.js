'use strict';


angular.module('quote').controller('PeopleController', ['$scope', '$location', 'Authentication',
    function ($scope, $location, Authentication) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        var Driver = {
            name: '',
            age: '',
            isPrimary:false
        }
        var PolicyHolder = {
            email: '',
            phone: '',
            color: '',
            name: '',
            age: ''
        }
         /**/
        var driver=angular.copy(Driver);
        driver.name="ravikumar";
        driver.age="30";
        driver.isPrimary=true;
        $scope.$parent.quote.people.drivers.push(driver);
        
        
        driver=angular.copy(Driver);
        driver.name="ashwini";
        driver.age="20";
        $scope.$parent.quote.people.drivers.push(driver);
        
        driver=angular.copy(Driver);
        driver.name="tanish";
        driver.age="10";
        $scope.$parent.quote.people.drivers.push(driver);
        
        console.log($scope.$parent.quote.people.drivers);
        var drivers=$scope.$parent.quote.people.drivers;
        var primaryDriver=null;
        for (var index = 0; index < drivers.length; index++) {
            var element = drivers[index];
            if (element.isPrimary) {
               primaryDriver=element;
               break; 
            }
        }
        var policyholder=angular.copy(PolicyHolder);
        policyholder.name=primaryDriver.name;
        policyholder.age=primaryDriver.age;
        $scope.$parent.quote.people.policyholders.push(policyholder);
        
        $scope.colors = [
            { name: 'white', isAdded: false, isPrimary: true },
            { name: 'black', isAdded: false },
            { name: 'red', isAdded: false },
            { name: 'blue', isAdded: false },
            { name: 'yellow', isAdded: false }
        ];
        $scope.colorsTemp = angular.copy($scope.colors);

        $scope.update = function (driver) {
            debugger;
            driver.color = this.selectedColor.name;
        }
        $scope.people = $scope.$parent.quote.people;
        var diverIndex = 0;
        $scope.addDriver = function () {
            var driver = angular.copy(Driver);
            driver.name = "driver " + diverIndex;
            driver.age = "age " + diverIndex;
            diverIndex++;
            $scope.$parent.quote.people.drivers.push(driver);

            if (diverIndex > 1) {
                for (var i = $scope.colorsTemp.length - 1; i >= 0; i--) {
                    if ($scope.colorsTemp[i].name === this.selectedColor.name) {
                        $scope.colors.splice(i + 1, 1);
                    }
                };
                //var index = $scope.colors.indexOf(this.selectedColor.name);
                //$scope.colors.splice(index+1, 1);
                //$scope.colors[index+1].isAdded=true; 
            }

            this.selectedColor = $scope.colors[0];
        }
        $scope.removePolicyholder = function (driver, index) {
            for (var i = $scope.colorsTemp.length - 1; i >= 0; i--) {
                if ($scope.colorsTemp[i].name === this.selectedColor.name) {
                    $scope.colors.push($scope.colorsTemp[i]);
                }
            };

            $scope.people.drivers.splice(index, 1);
        }

        $scope.previousPage = function (driver, index) {
            $location.path("quote/get");
        }
        $scope.nextPage = function (driver, index) {
            $location.path("quote/legal");
        }

    }
]);