angular.module('cvWeb').directive('article', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/appInfo.html'
    };
});
