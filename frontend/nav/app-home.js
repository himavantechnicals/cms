angular.module('cmsApp')
    .directive('appHome', home)
    .controller('homeCtrl', homeCtrl)
    .run(function ($rootScope,$timeout) {
        $rootScope.$on('$viewContentLoaded', ()=> {
          $timeout(() => {
            componentHandler.upgradeAllRegistered();
          })
        })
      });


function home() {
    return {
        restrict: 'E',
        templateUrl: 'nav/app-home.html',
        controller: 'homeCtrl'
    }
}

function homeCtrl($rootScope, $scope , Auth, $location) {

    $rootScope.logout = function(){
        Auth.logout();
        $location.path("/home");
      };
}


