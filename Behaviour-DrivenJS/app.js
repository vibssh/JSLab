var myApp = angular.module('myApp', []);

//Controller 

myApp.controller('myController', ['$scope', '$log', function($scope, $log){
 $scope.name = 'Leo';
}]);