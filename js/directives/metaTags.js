(function () {
    "use strict";
    angular.module('cvWeb')
        .directive("meta", function () {
            return{
                link:function (scope) {
                    scope.lang = navigator.language;
                    scope.description={
                        "es":"Curriculum Web Full Stack - Alejandro León",
                        "en":"Full Stack web Curriculum - Alejandro León"
                    };
                }
            }
        }
    );
})();