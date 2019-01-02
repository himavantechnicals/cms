var app = angular.module("cmsApp", ["ngRoute", "ngMessages"]);
app.run(function ($rootScope,$timeout) {
    $rootScope.$on('$viewContentLoaded', ()=> {
      $timeout(() => {
        componentHandler.upgradeAllRegistered();
      })
    })
  });

app.constant('appConfig', {
        appName: 'CMS App',
        appVersion: 1.0,
        apiUrl: 'http://localhost:3000/api/'
    }
)
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        
    })
    .when("/reg", {
        templateUrl : "/reg/reg.html",
        controller : "regCtrl",
    })


    .otherwise({
        redirectTo:'/'
    });
});

