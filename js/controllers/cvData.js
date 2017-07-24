angular.module('cvWeb')
    .controller('CvDataController',['$scope', 'cvData', function($scope, cvData) {
    $scope.pageClass = 'cvReader';
    cvData.success(function(data) {
        /*
        * Claves:
        * groups
        * icons
        * tags
        * type ( Para elementos con niveles)
        * */
        //Información Básica
        $scope.basicInfo = data.basicInfo;

        //Premios
        $scope.awards = data.awards;
        $scope.awardsTags = Object.keys(data.awards.tags);//Esto no funciona en IE<9 y solo obtiene las claves de primer nivel.
        $scope.awardsValue = data.awards.tags;

        //Publicaciones
        /*
        * Claves:
        * idRegistral
        * dateOut
        * editor
        **/
        $scope.publications = data.publications;
        $scope.publicationsTags = getKeys(data.publications.tags);
        $scope.publicationsValue = data.publications.tags;

        //Información Académica
        /*
        * Claves:
        * entity
        * dateIn
        * dateOut
        * description
        * */
        $scope.academic = data.academic;
        $scope.academicTags = getKeys(data.academic.tags);
        $scope.academicValue = data.academic.tags;
        if(data.academic.groups == "true"){
            $scope.academicSubTags = getSubKeys(data.academic.tags);
        }

        //Esperiencia
        /*
        * Claves:
        * project
        * desciption
        * dateIn
        * dateOut
        * */
        $scope.exp = data.experience;
        $scope.expTags = getKeys(data.experience.tags);
        $scope.expValue = data.experience.tags;
        if(data.experience.groups == "true"){
            $scope.expSubTags = getSubKeys(data.experience.tags);
        }

        //Idiomas
        /*
        * Claves:
        * level
        * */
        $scope.langs = data.languages;
        $scope.langsTags = getKeys(data.languages.tags);
        $scope.langsValue = data.languages.tags;
        if(data.languages.groups == "true"){
            $scope.langsSubTags = getSubKeys(data.languages.tags);
        }

        //Tecnologías
        /*
         * Claves:
         * level
         * */
        $scope.it = data.it;
        $scope.itTags = getKeys(data.it.tags);
        $scope.itValue = data.it.tags;
        if(data.it.groups == "true"){
            $scope.itSubTags = getSubKeys(data.it.tags);
        }
    });
}]);

function getKeys(obj){
    var K = [];
    for(var property in obj){
        K.push(property);
    }
    return K;
}
function getSubKeys(obj){
    var K = [];
    for(var property in obj){
        for(var prop in obj[property]){
            K.push(prop);
        }
    }
    return K;
}