angular.module('cmsApp')
.directive('appMenu',menu)
.controller('menuCtrl', menuCtrl);


function menu() {
    return {
        restrict : 'E',
        templateUrl : 'nav/app-menu.html',
        controller : 'menuCtrl'
    }
}

function menuCtrl($scope,AuthenticationState){
    $scope.isLogged = AuthenticationState.auth.isLogged;
}