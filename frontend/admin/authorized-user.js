angular.module('cmsApp')
    .controller('auCtrl', auCtrl)
    .filter('courseFilter', courseFilter)
    .filter('branchFilter', branchFilter)
    .filter('batchFilter', batchFilter)
    .filter('loop',loop)



function loop(){
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++)
          input.push(i.toString());
        return input;
      };
}


function courseFilter() {

    var a = [];
    return function (x, y) {

        if (y != undefined) {

            if (x != null) {
                a = [];
                for (i = 0; i < x.length; i++) {
                    if (x[i].userid != undefined) {

                        if (x[i].userid.substr(5, 1) == y) {
                            a.push(x[i]);
                        }
                    }
                }
            }

        }
        else {
            return x
        }

        return a
    };
}


function branchFilter() {

    var a = [];
    return function (x, y) {
        if (y != undefined) {

            if (x != null) {
                a = [];
                for (i = 0; i < x.length; i++) {
                    if (x[i].userid != undefined) {
                        if (x[i].userid.substr(6, 2) == y) {
                            a.push(x[i]);
                        }
                    }
                }
            }
        }
        else {
            return x
        }

        return a
    };
}



function batchFilter() {

    var a = [];
    return function (x, y) {
        if (y != undefined) {

            if (x != null) {
                a = [];
                for (i = 0; i < x.length; i++) {
                    if (x[i].userid != undefined) {
                        if (x[i].userid.substr(0, 2) == y) {
                            a.push(x[i]);
                        }
                    }
                }
            }
        }
        else {
            return x
        }

        return a
    };
}








function auCtrl($scope, appConfig, $http) {



    $http.get(`${appConfig.apiUrl}user/`).then(function (response) {
        console.log(response);

        $scope.users = response.data;

    }).catch(function (err) {
        console.log(err);
    })

    $scope.branch = [{ "name": "B.Pharm", "value": "00" },
    { "name": "Civil Engineering", "value": "01" },
    { "name": "Electrical & Electronics Engineering", "value": "02" },
    { "name": "Mechanical Engineering", "value": "03" },
    { "name": "Electronics & Communication Engineering", "value": "04" },
    { "name": "Computer Science & Engineering", "value": "05" },
    { "name": "Chemical Engineering", "value": "08" },
    { "name": "Electronics & Instrumentation Engineering", "value": "10" },
    { "name": "Biomedical Engineering", "value": "11" },
    { "name": "Information Technology", "value": "12" },
    { "name": "Electronics & Control Engineering", "value": "13" },
    { "name": "Electronics & Computer Engineering", "value": "19" },
    { "name": "Aeronautical Engineering", "value": "21" },
    { "name": "Instrumentation & Control Engineering", "value": "22" },
    { "name": "Bio Technology", "value": "23" },
    { "name": "Mining Engineering26 - Mining Machinery27 - Petroleum Engineering", "value": "25" },
    { "name": "Civil and Environmental Engineering", "value": "28" },
    { "name": "Mechanical Engineering( MATERIAL SCIENCE AND NANO TECHNOLOGY)", "value": "29" },
    { "name": "Agriculture Engineering", "value": "30" },
    { "name": "Computer science & technolog", "value": "31" }]




    $scope.year = [{ "name": "B.Tech ", "value": "A" },
    { "name": "M.Tech ", "value": "D" },
    { "name": "MBA", "value": "E" },
    { "name": "MCA ", "value": "F" },
    { "name": "B.Pharm", "value": "R" },
    { "name": "M.Pharm", "value": "S" },
    { "name": "Pharm.D", "value": "T" }]




    $scope.updateAuthorization = function(userid) {

        $http.post(`${appConfig.apiUrl}user/authorizeUser/${userid}`).then(function (response) {
            console.log(response);
    
            $scope.users = response.data;
    
        }).catch(function (err) {
            console.log(err);
        })

    }

    $scope.isAuthorized = function() {
        console.log(item)
        if($scope.users.isAuthorized == true)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }





}

