
angular.module("cmsApp")
    .controller('regCtrl', regCtrl)
    .directive('fieldMatch', ["$parse", function ($parse) {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                var me = $parse(attrs.ngModel);
                var matchTo = $parse(attrs.fieldMatch);
                scope.$watchGroup([me, matchTo], function (newValues, oldValues) {
                    ctrl.$setValidity('fieldmatch', me(scope) === matchTo(scope));
                }, true);
            }
        }
    }]);

function regCtrl($scope, appConfig, $http, $location, Auth) {

    $scope.formStatus = '';
    $scope.signinStatus = '';
    $scope.register = function () {
        if ($scope.form.$invalid) {
            angular.forEach($scope.form.$error, function (field) {
                angular.forEach(field, function (errorField) {
                    errorField.$setTouched();
                })
            });
            $scope.formStatus = "Form has validation errors.";
            console.log("Form is invalid.");
        } else {
            $scope.formStatus = "Form is valid.";
            console.log($scope.data);
            var userdata = $scope.data;
            delete userdata.confirmPassword;
            $http({
                method: 'POST',
                url: `${appConfig.apiUrl}user/`,
                data: userdata
            }).then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    $scope.formStatus = "Registered sucessfully.";
                }
            }).catch(function (error) {
                $scope.formStatus = error.data;
                console.log(error);
            });
        }
    };


    $scope.login = function () {
        if ($scope.loginform.$invalid) {
            angular.forEach($scope.loginform.$error, function (field) {
                angular.forEach(field, function (errorField) {
                    errorField.$setTouched();
                })
            });
            $scope.signinStatus = "Form has validation errors.";
            console.log("Form is invalid.");
        } else {
            $scope.signinStatus = "Form is valid.";
            console.log($scope.logindata);
            // var userdata = $scope.logindata;
            // delete userdata.confirmPassword;
            // $http({
            //     method: 'POST',
            //     url: `${appConfig.apiUrl}auth/`,
            //     data: userdata
            // }).then(function (response) {
            //     if (response.status === 200) {
            //         console.log(response);
            //     }
            // }).catch(function (error) {
            //     $scope.signinStatus = error.data;
            //     console.log(error);
            // });
            Auth.login($scope.logindata, function (res) {
                console.log(res)
                if (res.type == "success") {

                    $location.path(res.page);
                }
                else {
                    console.log(res);
                    $scope.signinStatus = res.message;
                }
            });

        }
    }


    $scope.viewPwd = function (id) {
        var x = document.getElementById(id);
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    $scope.reg = function (userNew, s) {

        console.log(userNew, s)
    }
}


