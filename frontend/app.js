var app = angular.module("cmsApp", ["ngMaterial", "ngRoute", "ngMessages", 'ngStorage',"chart.js"]);

app.run(function ($rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', () => {
        $timeout(() => {
            componentHandler.upgradeAllRegistered();
        })
    })
});

app.config(themeConfig);

function themeConfig($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('orange');
}

app.factory('AuthenticationState', AuthenticationState);

function AuthenticationState() {
    var auth = {
        isLogged: true

    }
    return { auth: auth }
}

app.constant('appConfig', {
    appName: 'CMS App',
    appVersion: 1.0,
    apiUrl: 'http://localhost:3000/api/'
})

app.config(function ($httpProvider,$routeProvider) {

    $httpProvider.interceptors.push('AuthInterceptor');

    $routeProvider
        .when("/", {
            templateUrl: "index_pages/home.html",
        })
        .when("/about", {
            templateUrl: "index_pages/about.html",
        })
        .when("/support", {
            templateUrl: "index_pages/support.html",
        })
        .when("/reg", {
            templateUrl: "/reg/reg.html",
            controller: "regCtrl",
            requiresAuthentication: false,
        })
        .when("/student", {
            templateUrl: "/student/student.html",
            controller: "studentCtrl",
        })

        .when("/attendence", {
            templateUrl: "/student/Attendence.html",
            controller: "attdCtrl",
        })

        .when("/facultyattendence", {
            templateUrl: "/faculty/facultyAttendence.html",
            controller: "facattdCtrl",
        })

        .when("/faculty", {
            templateUrl: "/faculty/faculty.html",
            controller: "facultyCtrl",
        })

        .when("/marks",{
            templateUrl: "/faculty/marks_editor.html",
            controller:"marksCtrl",
        })

        .when("/au", {
            templateUrl: "/admin/authorized-user.html",
            controller: "auCtrl",
        })

        .when("/addclasses", {
            templateUrl: "/admin/addregulation.html",
            controller: "addclassesCtrl",
        })

        .when("/addsubjects", {
            templateUrl: "/admin/addsubjects.html",
            controller: "addsubjectsCtrl",
        })

        .when("/addattendence", {
            templateUrl: "/admin/addattendence.html",
            controller: "addattendenceCtrl",
        })


        .when("/error", {
            templateUrl: "/error/error.html",
        })
        
            .otherwise({
            redirectTo: '/'
        });
});


app.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
    Auth.init();

    $rootScope.$on('$routeChangeStart', function (event, next) {
        console.log(Auth.isLoggedIn())
        if (!Auth.checkPermissionForView(next) && Auth.isLoggedIn() == true) {
            event.preventDefault();
                $location.path("/");
        }
    });
}]);

app.directive('permission', ['Auth', AuthElement]);

function AuthElement(Auth) {
    return {
        restrict: 'A',
        scope: {
            permission: '='
        }, 

        link: function (scope, elem, attrs) {
            scope.$watch(Auth.isLoggedIn, function () {
                if (Auth.userHasPermission(scope.permission)) {
                    elem.show();
                } else {
                    elem.hide();
                }
            });
        }
    }
}