angular.module('BattleStar', ['ngRoute', 'ui.bootstrap']);

angular.module('BattleStar')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $routeProvider
      .when('/', {
        templateUrl : '/views/home.html',
        controller : 'MainCtrl'
      });
      
   $locationProvider.html5Mode(true);
  }]);
