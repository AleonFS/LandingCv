(function(){
    angular.module('cvWeb')
        .factory('cvData', ['$http', function($http) {
            return $http.get('./cv.json')
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        }]);
})();
