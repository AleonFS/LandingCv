(function () {
    "use strict";
    angular.module('cvWeb')
        .directive("responsiveOption", function () {
            return{
                link:function (scope) {
                    scope.renderVideo = (screen.width>768);

                    scope.isrenderVideo = function(){
                        scope.renderVideo=!scope.renderVideo;
                    }
                }
            }
        }
    );
})();