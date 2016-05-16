'use strict';

angular.module('quote',[]).controller('PeopleController', ['$scope', '$location', 
    function ($scope, $location) {
        // This provides Authentication context.
        
        $scope.quote={
			get:'',
			people:{
				name:'',
				drivers:[],
				policyholders:[]
			},
			legal:'',
			confirm:'',
			buy:''
		}
        
        $scope.people = $scope.quote.people;        
        var drivers = $scope.quote.people.drivers;
        var policyholders = $scope.quote.people.policyholders;
        var Driver = {
            id: '',
            name: '',
            age: '',
            isPrimary: false,
            isAdded: false
        }
        var PolicyHolder = {
            id: '',
            email: '',
            phone: ''
        }
        var generateUUID = function () {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        
        $scope.shouldShow = function (driver) {
            return !driver.isAdded;
        }
        $scope.init = function () {
            /*driver*/
            var driver = angular.copy(Driver);
            driver.id = generateUUID();
            driver.name = "ravikumar";
            driver.age = "30";
            driver.isPrimary = true;
            $scope.quote.people.drivers.push(driver);

            driver = angular.copy(Driver);
            driver.id = generateUUID();
            driver.name = "ashwini";
            //driver.isAdded=true;
            driver.age = "20";
            $scope.quote.people.drivers.push(driver);

            driver = angular.copy(Driver);
            driver.id = generateUUID();
            driver.name = "tanish";
            driver.age = "10";
            $scope.quote.people.drivers.push(driver);


            console.log($scope.quote.people.drivers);
            var primaryDriver = null;
            for (var index = 0; index < drivers.length; index++) {
                var element = drivers[index];
                if (element.isPrimary) {
                    primaryDriver = element;
                    break;
                }
            }
            var policyholder = angular.copy(PolicyHolder);
            policyholder.id = generateUUID();
            policyholder.driver = primaryDriver;
            /*
            policyholder.name=primaryDriver.name;
            policyholder.age=primaryDriver.age;
            */
            $scope.quote.people.policyholders.push(policyholder);
            $scope.selectedDriver = primaryDriver;
            resetDropDown();
            window.quote = $scope.quote;
        }

        $scope.update = function (policyholder) {
            debugger;
            if(this.selectedDriver){
                
            policyholder.driver = this.selectedDriver;
            resetDropDown();
            }
        }

        var diverIndex = 0;
        $scope.addDriver = function () {
            var driver = angular.copy(Driver);
            driver.name = "driver " + diverIndex;
            driver.age = "age " + diverIndex;
            diverIndex++;
            $scope.quote.people.drivers.push(driver);

            if (diverIndex > 1) {
                for (var i = $scope.colorsTemp.length - 1; i >= 0; i--) {
                    if ($scope.colorsTemp[i].name === this.selectedDriver.name) {
                        $scope.colors.splice(i + 1, 1);
                    }
                }; 
            }
        }
        /* Start PolicyHolder */
        $scope.addPolicyHolder = function () {
            var policyholder = angular.copy(PolicyHolder);
            policyholder.name = "policyholder " + diverIndex;
            policyholder.age = "age " + diverIndex;
            diverIndex++;
            $scope.quote.people.policyholders.push(policyholder);
            $scope.selectedDriver=null;
            resetDropDown();
        }
        $scope.removePolicyholder = function (policyholder, index) {
            if (policyholders[index].driver) {
                policyholders[index].driver.isAdded = false;
            }
            policyholders.splice(index, 1);
        }
        
        var resetDropDown=function () {
            for (var i = 0; i < drivers.length; i++) {
                var driver = drivers[i];
                driver.isAdded = false;
                for (var j = 0; j < policyholders.length; j++) {
                    var policyholder = policyholders[j];
                    if (policyholder.driver && policyholder.driver.id === driver.id) {
                        driver.isAdded = true;
                        break;
                    }
                }
            }
        }
        /* End PolicyHolder */
               
        

        $scope.previousPage = function (driver, index) {
            $location.path("quote/get");
        }
        $scope.nextPage = function (driver, index) {
            $location.path("quote/legal");
        }

    }
]);