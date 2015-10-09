'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl',['$scope',function($scope) {
  $scope.matches=[];

  $scope.read = function(){
      $scope.matches=matchReader.read();
  };

  $scope.getBettability = function(match, game, set, player){
    var trustworthyLevel=0;

    var p=0;
    if(player=='B'){
      p=1;
    }
    var coef = match.gameCoefs[set + (10*(game-1))-1][p];
    if(typeof coef !== "undefined"){
        if(match.currentGame==game){
          var setDiff = set - match.currentSet;
          //Si tiene saque, +1
          if((match.serve==player && setDiff%2==0) || (match.serve!=player && setDiff%2!=0)){
            trustworthyLevel+=1;
          }
          //Si P partido, P Juego1, P Juego 2 a favor, +1
          //Si dif sets a favor +3 en primer juego
          //Si dif sets a favor +3 en juego actual

        }
    }
    return "level-" + trustworthyLevel;

  };
}]);
