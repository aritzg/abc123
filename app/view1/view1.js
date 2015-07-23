'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',['$scope',function($scope) {
  $scope.matches=['aa','bb','cc'];

  $scope.read = function(){
      $scope.matches=matchReader.read();
  };
}]);
