var app = angular.module('eggrollApp', []);
app.controller('eggCtrl', function($scope) {
	$scope.options = [{name: 'Home', active: true},
      {name: 'Information', active: false},
      {name: 'Menu', active: false}];
   
   $scope.test = function($choice) {
      for (var i = 0; i < $scope.options.length; i++) {
         $scope.options[i].active = false;
      }
      $choice.active = true;
	}
});