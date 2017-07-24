angular.module('cvWeb').controller('CvEditorController',['$scope', function($scope) {
    $scope.pageClass = 'cvEditor';

    $scope.master={};//Por defecto

    $scope.update = function(basicInfo){
        $scope.master= angular.copy(basicInfo);
        var basic = JSON.stringify($scope.master, null, "\r\t ");//, null, " "
        var composed = '{' +
            '"basicInfo":' + basic +
            '}';
        localStorage.setItem('session', composed);//Guardar al LocalStorage el Item SESSION
        console.log(composed);
    };
    $scope.load = function(){//Leer el LocalStorage y parser
        var restoredSession = JSON.parse(localStorage.getItem('session'));
        $scope.basicInfo = restoredSession;
    }

}]);
