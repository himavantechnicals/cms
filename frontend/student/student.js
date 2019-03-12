angular.module('cmsApp').controller('studentCtrl', studentCtrl);

function studentCtrl($scope, appConfig, $http, AuthenticationState, $location) {

    if (AuthenticationState.auth.isLogged == false) {
        $location.path('/reg');
    }

    $scope.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July','Aug','Sep','Oct','Nov','Dec'];
    $scope.series = ['TotalClasses', 'PresentClasses'];

    $scope.data = [
        [1, 3, 5, 7, 9, 12, 15, 18, 21, 23, 27, 30],
        [28, 26, 3, 19, 4, 27, 5, 6, 6, 5, 4, 1,]
    ];

}