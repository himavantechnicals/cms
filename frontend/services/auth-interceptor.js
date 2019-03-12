angular.module('cmsApp').factory('AuthInterceptor',AuthInterceptor);

function AuthInterceptor($sessionStorage) {
    return {
        request: request
    };

    function request(config) {
        config.headers = config.headers || {};
        if($sessionStorage.token){
            config.headers['x-auth-token'] =  $sessionStorage.token;
            config.headers['Content-Type'] =  'application/json';
        }
        return config;
    }

    // function response(response) {
    //     if(response.status == 200 && $window.sessionStorage.token && !AuthFactory.isLoggenIn){
    //         AuthFactory.isLoggenIn = true;
    //     }
    //     if(response.status === 401) {
    //         Auth.isLoggenIn = false;
    //     }
    //     return response || $q.when(response);
    // }

    // function responseError(rejection) {
    //     if(rejection.status === 401 || rejection.status === 403){
    //         delete $window.sessionStorage.token;
    //         AuthFactory.isLoggenIn = false;
    //         $location.path('/');
    //     }
    //     return $q.reject(rejection);
    // }
}