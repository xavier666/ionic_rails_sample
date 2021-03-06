angular.module('sample.home', [])

.controller('HomeCtrl', function($scope, Game) {
  this.gameService = new Game(serverErrorHandler);
  this.gameService.all().$promise.then(function(result) {
    return $scope.games = result.games;
  });

  var serverErrorHandler = function() {
    return console.log("There was a server error.");
  };
});

