var myApp = angular.module('myApp', ['angular-sortable-view']);

//Controller
(function () {
  'use strict';

  //Function called by the controller
  var MainController = function ($scope, $http) {

    //Definining variables
    $scope.heading = 'Welcome to Angular Sortable';
    $scope.tasks={};

    var endPoint = 'http://localhost:3000/ToDo';
    var headers = {
      'Content-Type': 'application/json'
    };

    //Invoking the function
    getTasks();


    //Declaring a function
    function getTasks() {
      $http.get(endPoint, headers)
        .then(function (response) {
          $scope.tasks = response.data;

        }, function (error) {
          console.info('Unable to reach the server because server returned ' + error.statusCode);
        });
    };


    $scope.postTask = function(){
      var data = {
        task: $scope.new
      };

      $http.post(endPoint, data)
          .then(function(response){
          $scope.tasks.push(response.data);
      }, function(error){
        console.info(error.statusText);
      }
    )};

  };

  //Defining Controller and the dependencies array
  myApp.controller('MainController', ['$scope', '$http', MainController]);
}());
