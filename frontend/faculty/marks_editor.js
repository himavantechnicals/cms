angular.module('cmsApp')
.controller('marksCtrl', marksCtrl)



function marksCtrl($scope, appConfig, $http, AuthenticationState, $location) {


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





    $scope.batches = [{ "name": "2010", "value":"10" },
    { "name": "2011" , "value":"11" },
    { "name": "2012","value":"12"  },
    { "name": "2013","value":"13"  },
    { "name": "2014","value":"14"  },
    { "name": "2015","value":"15"  },
    { "name": "2016","value":"16"  },
    { "name": "2017","value":"17"  },
    { "name": "2018","value":"18"  },
    { "name": "2019","value":"19"  },
    { "name": "2020","value":"20"  }]




    $scope.users = [{ "name": "akshith", "userid": "15C01A0525" },
    { "name": "akshith", "userid": "15C01A0526" },
    { "name": "akshith", "userid": "16C01D0526" },
    { "name": "akshith", "userid": "19C01F0526" },
    { "name": "akshith", "userid": "15C01A0326" },
    { "name": "akshith", "userid": "15C01A0426" },
    { "name": "akshith", "userid": "14C01A0526" },
    { "name": "akshith", "userid": "15C01A0626" },
    { "name": "akshith", "userid": "17C01A0526" },
    ]



   




}