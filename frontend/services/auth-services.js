angular.module('cmsApp')
    .factory('Auth', authFactory);


function authFactory($rootScope, $sessionStorage, appConfig, $http) {


    var auth = {};

    /**
     *  Saves the current user in the root scope
     *  Call this in the app run() method
     */
    auth.init = function () {
        if (auth.isLoggedIn()) {
            $rootScope.user = auth.currentUser();
        }
    };

    auth.login = function (userdata, callback) {

        $http({
            method: 'POST',
            url: `${appConfig.apiUrl}auth/`,
            data: userdata
        }).then(resp).catch(errReslove);

        function resp(response) {
            console.log(response);
            var page = '/reg'
            if (response.status === 200) {
                if(response.data.user.isAuthorized){
                    $sessionStorage.user = response.data.user;
                    $sessionStorage.token = response.data.token;
                    $rootScope.user = $sessionStorage.user;

                    if ($sessionStorage.user.usertype == 'Admin' ) {
                        page = '/admin'
                    } else if ($sessionStorage.user.usertype == 'Faculty' ) {
                        page = '/faculty'
                    } else {
                        page = '/student'
                    }
    
                    result = { 'type': 'success', 'message': 'User Authentication Successful', page:page };
                }
                else{
                    result = { 'type': 'failed', 'message': 'User not authorised! Contact administrator!', page:page };
                }
                callback(result);
            }
        }

        function errReslove(error) {

            result = { 'type': 'failed', 'message': error.data };
            callback(result);

        }
    };

    auth.logout = function () {
        delete $sessionStorage.user;
        delete $sessionStorage.token;
        delete $rootScope.user;
    };


    auth.checkPermissionForView = function (view) {
        if (!view.requiresAuthentication) {
            return true;
        }

        return userHasPermissionForView(view);
    };


    var userHasPermissionForView = function (view) {
        if (!auth.isLoggedIn()) {
            return false;
        }

        if (!view.permissions || !view.permissions.length) {
            return true;
        }

        return auth.userHasPermission(view.permissions);
    };


    auth.userHasPermission = function (permissions) {
        if (!auth.isLoggedIn()) {
            return false;
        }

        var found = false;
        angular.forEach(permissions, function (permission, index) {
            if ($sessionStorage.user.user_permissions.indexOf(permission) >= 0) {
                found = true;
                return;
            }
        });

        return found;
    };


    auth.currentUser = function () {
        return $sessionStorage.user;
    };


    auth.isLoggedIn = function () {
        return $sessionStorage.user != null;
    };


    return auth;
}