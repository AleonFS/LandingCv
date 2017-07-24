(function(){
    angular.module('cvWeb')
        .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('/',{
                url:'/',
                controller: 'HomeController',
                templateUrl: 'js/views/home.html'
            });
		$urlRouterProvider.when('', '/');
    });
})();
