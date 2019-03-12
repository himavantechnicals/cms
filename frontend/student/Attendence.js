angular.module('cmsApp').controller('attdCtrl', attdCtrl)
.filter('score', function () {
    return function (input, property) {
        var i = input.length;
        var total = 0;
        while (i--)
            total += input[i][property];
        return total;
    }
});

function attdCtrl($scope, appConfig, $http, AuthenticationState, $location) {


    $scope.subjects = [{ "name": "design patterns", "marks": 11, "total": 25},
    { "name": "design patterns", "marks": 20, "total": 25},
    { "name": "design patterns", "marks": 20, "total": 25},
    { "name": "design patterns", "marks": 23, "total": 25},
    { "name": "design patterns", "marks": 21, "total": 25},
    { "name": "design patterns", "marks": 19, "total": 25},
    { "name": "design patterns", "marks": 17, "total": 25},
    { "name": "design patterns", "marks": 12, "total": 25},

    ]



}