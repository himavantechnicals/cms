angular.module('cmsApp')
    .directive('appNav', nav)
    .controller('navCtrl', navCtrl);


function nav() {
    return {
        restrict: 'E',
        templateUrl: 'nav/app-nav.html',
        controller: 'navCtrl'
    }
}

function navCtrl($rootScope, $scope, AuthenticationState, Auth, $location) {
    $scope.isLogged = AuthenticationState.auth.isLogged;

    $rootScope.logout = function(){
        Auth.logout();
        $location.path("/reg");
      };
}

