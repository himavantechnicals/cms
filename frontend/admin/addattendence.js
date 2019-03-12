angular.module('cmsApp').controller('addattendenceCtrl', addattendenceCtrl);

function addattendenceCtrl($scope, appConfig, $http, AuthenticationState, $location) {
    this.startDate = new Date();
    this.endDate = new Date();
    this.endDate.setDate(this.endDate.getDate() + 5);





    $scope.users = [{ "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    { "name": "akshith", "rollno": "123456789" },
    ]




}