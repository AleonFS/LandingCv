angular.module('cvWeb').controller('MainMenuController', ['$scope', function($scope) {
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