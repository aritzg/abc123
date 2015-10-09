  'use strict';

  angular.module('myApp.view2', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl',['$scope',function($scope) {
    $scope.matchIds=[];
    var Match = Parse.Object.extend("Match");
    var query = new Parse.Query(Match);

    query.find({
        success: function (results) {
            var allMatchIds = [];
            for(var i=0;i<results.length;i++){
                allMatchIds.push(results[i].get("matchId"));
            }

            $scope.matchIds=_.uniq(allMatchIds);
            $scope.$apply();
        },
        error: function (object, error) {
            alert('Meek');
        }
      });


      $scope.drawGraph = function(matchId){
        alert(matchId);
      };
  }]);
