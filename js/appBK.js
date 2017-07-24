(function(){
    var app = angular.module("myApp", ['ngRoute', 'ngAnimate','cvBox']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'js/views/home.html'
            })
            .when('/mode/multi', {
                controller: 'CvDataController',
                templateUrl: 'js/views/multi.html'
            })
            .when('/mode/photo', {
                controller: 'CvDataController',
                templateUrl: 'js/views/photo.html'
            })
            .when('/mode/editor', {
                controller: 'CvEditorController',
                templateUrl: 'js/views/editor.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
    app.directive('article', function() {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'js/directives/appInfo.html'
        };
    });
    app.controller('MainMenuController', ['$scope', function($scope) {
        $scope.pageClass = 'main';
        $scope.menus = [
            {
                name:'Web Multimedia',
                icon:['fa fa-code'],
                link:'multi'
            },
            {
                name:'Fotografía Audiovisuales',
                icon:['fa fa-camera-retro'],
                link:'photo'
            },
            {
                name:'Teatro Cine',
                icon:['fa fa-video-camera'],
                link:'theatre'
            },
            {
                name:'Social Media',
                icon:['fa fa-thumbs-up'],
                link:'social'
            },
            {
                name:'Editor',
                icon:['fa fa-bug'],
                link:'editor'
            }
        ];
        $scope.techs=[
            {
                xPos:'0px',
                color:'#E74F2A',
                title:'HTML5'
            },
            {
                xPos:'-100px',
                color:'#016FBA',
                title:'CSS3'
            },
            {
                xPos:'-200px',
                color:'#D6BA32',
                title:'JavaScript'
            },
            {
                xPos:'-300px',
                color:'#B3B3B3',
                title:'Angular.js'
            },
            {
                xPos:'-400px',
                color:'#333333',
                title:'jQuery'
            }
        ];
        $scope.selectedMenu=-1;
        $scope.itemClicked = function($index){
            console.log($index);
            $scope.selectedMenu = $index;
        };
    }]);
    app.controller('HomeController',['myApp','$scope', function($scope) {
        $scope.pageClass = 'home';
    }]);

})();
$( window ).load(function() {
    var tech = document.getElementsByClassName('technology');

    for(i=0;i<tech.length;i++){
        tech[i].addEventListener('mouseover',function(){
            var text = this.getAttribute("data-hover");
            var color = this.getAttribute("data-color");
            $(this).append( $( "<span style='color:"+color+"'>"+text+"</span>" ).fadeIn( 500 ));
        });
        tech[i].addEventListener('mouseout',function(){
            $( this ).find( "span:last" ).remove();
        });
    };
})