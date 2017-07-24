app.controller('DataController', ['$http','$scope', function($http,$scope){
    $scope.config = this;

    $scope.config.route = [];

    $http.get('./js/config.json')
        .success(function(data){
            $scope.config.route = data;
        });
}]);
app.directive('scripts',function(){
    return {
        restrict:'E',
        templateUrl : './js/directives/scripts.html',
        controller :'DataController'
    }
});
