angular.module('cmsApp').controller('addclassesCtrl', addclassesCtrl);

function addclassesCtrl($scope, appConfig, $http, AuthenticationState, $location, $mdDialog) {

    $scope.reg = {
        regulation: '',
        batch: [],
    }

    $scope.sub = {
        semref_id: null,
        subjects: [{
            name: '',
            code: ''
        }]
    }
    $scope.add = function () {
        var newsubjects = {
            name: '',
            code: '',
        }
        $scope.sub.subjects.push(newsubjects);
    }

    $scope.delete = function () {
        $scope.sub.subjects.pop();
    }



    $http.get(`${appConfig.apiUrl}regulation/`).then(function (response) {
        console.log(response);

        $scope.reg = response.data;

    }).catch(function (err) {
        console.log(err);
    })



    $scope.updateBaches = function () {
        $scope.reg.batch.push($scope.batches);
    }


    $scope.editReg = function (ev) {
        $mdDialog.show({
            controller: dialogReg,
            templateUrl: 'admin/editReg.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen
        })
    }







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





    $scope.course = [{ "name": "B.Tech ", "value": "A" },
    { "name": "M.Tech ", "value": "D" },
    { "name": "MBA", "value": "E" },
    { "name": "MCA ", "value": "F" },
    { "name": "B.Pharm", "value": "R" },
    { "name": "M.Pharm", "value": "S" },
    { "name": "Pharm.D", "value": "T" }]


}


function dialogReg( $scope, $mdDialog, $http, appConfig) {

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.regulation = {
        regulation: '',
        batch: [],
    }

    $scope.submit = function (answer) {

        $http({
            method: 'POST',
            url: `${appConfig.apiUrl}regulation/`,
            data: $scope.regulation
        }).then(function (response) {
            if (response.status === 200) {
                console.log(response);
                $scope.formStatus = "regulation are Added Successfully.";
            }
            else {
                console.log(response);
            }
        }).catch(function (error) {
            $scope.formStatus = error.data;
            console.log(error);

        });
        console.log($scope.regulation);
    };





}















