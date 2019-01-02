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

function navCtrl($scope) {
    $scope.isLoggedOut = false;
    $scope.isLogged = false;
}

