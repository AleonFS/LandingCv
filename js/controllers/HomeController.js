(function() {
    'use strict';

    angular.module('cvWeb')
        .controller('HomeController', ['$scope','$translate','tmhDynamicLocale', function ($scope,$translate,tmhDynamicLocale) {
            //$scope.renderVideo = (screen.width>768);
            $scope.toogleLang = true;

            $scope.lang = (sessionStorage.lang)?sessionStorage.lang:"es";//default

            $scope.languages = [
                {id: 1, name: 'Español', as_number: 1, locale: 'es',flag:'es'},
                {id: 2, name: 'English', as_number: 2, locale: 'en',flag:'en'}
            ];

            $scope.changeLang = function (langKey) {
                $translate.use(langKey);
                tmhDynamicLocale.set(langKey);
                $scope.lang =langKey;
            };


            $scope.blocks=[
                {
                    "icon":"js",
                    "name":{
                        "es":"Javascript / NoSQL",
                        "en":"Javascript / NoSQL"
                    },
                    "text":{
                        "en":"JavaScript, Node.js, express, JSON, angularJS, jQuery, OOP, MVC/MV*, Mongodb, AJAX, JSON, REST, APIs, speed & size optimization.",
                        "es":"JavaScript, Node.js, express, JSON, angularJS, jQuery, OOP, MVC/MV*, Mongodb, AJAX, JSON, REST, APIs, optimización de velocidad y tamaño."
                    }
                },
                {
                    "icon":"h5",
                    "name":{
                        "es":"HTML / CSS",
                        "en":"HTML / CSS"
                    },
                    "text":{
                        "en":"HTML5, CSS3, Sass/LESS, Bower, Grunt, Responsive Web Design, Animations, Validation, Graceful degradation, Organic SEO.",
                        "es":"HTML5, CSS3, Sass/LESS, Bower, Grunt, Responsive Web Design, Animaciones,Validación, Graceful degradation, SEO orgánico."
                    }
                },
                {
                    "icon":"php",
                    "name":{
                        "es":"PHP / SQL",
                        "en":"PHP / SQL"
                    },
                    "text":{
                        "en":"PHP, MySQL, Wordpress, OOP, MVC, Apache, CakePHP, Inject code prevention, System Management, Performance.",
                        "es":"PHP, MySQL, Wordpress, OOP, MVC, Apache, CakePHP, Prevención en Injección de código, Gestión del sistema, Rendimiento."
                    }
                },
                {
                    "icon":"design",
                    "name":{
                        "es":"Diseño",
                        "en":"Design"
                    },
                    "text":{
                        "en":"Sketch, Illustrator, Motion Graphics, Photoshop, UX, Wireframing, Prototyping, Usability, Branding, Printed media, Video edition.",
                        "es":"Bocetado, Illustrator, Motion Graphics, Photoshop,UI/UX, Wireframing, Prototipado, Usabilidad, Branding, Medios impresos, Edición de Video."
                    }
                },
                {
                    "icon":"marketing",
                    "name":{
                        "es":"Marketing",
                        "en":"Marketing"
                    },
                    "text":{
                        "en":"SEO, SEM (Adwords, FB Ads, AdMob, TW Ads),Social Media, Google Analytics, Piwik.",
                        "es":"SEO, SEM (Adwords, FB Ads, AdMob, TW Ads),Medios Sociales, Google Analytics, Piwik."
                    }
                },
                {
                    "icon":"proyect",
                    "name":{
                        "es":"Proyectos",
                        "en":"Proyect"
                    },
                    "text":{
                        "en":"Project planning, Timings, Documentation, Licenses/Legal.",
                        "es":"Planificación de proyectos, Timings, Documentación, Licencias/Legal."
                    }
                },
                {
                    "icon":"nontech",
                    "name":{
                        "es":"No técnicas",
                        "en":"Non-Technical"
                    },
                    "text":{
                        "en":"Proactive, English & Spanish. Motivated, Social, Team player, Gamer.",
                        "es":"Proactivo, Idiomas Inglés y Español. Motivación, Social, Trabajo en equipo, Gamer."
                    }
                },
                {
                    "icon":"misc",
                    "name":{
                        "es":"Miscelánea",
                        "en":"Miscelaneous"
                    },
                    "text":{
                        "en":"Ionic, Apache Cordova, Git, Unix, console. Open Source contributor.",
                        "es":"Ionic, Apache Cordova, Git, Unix, Consola de comandos. Contribuidor Open Source."
                    }
                }
            ];
            $scope.experience=[
                {
                    "name":"Full Stack Web Developer & UI/UX Designer + Gamification Designer",
                    "where":"Innova Soluciones tecnológicas S.L. Spain",
                    "text":{
                        "es":"<p>Fullstack developer bajo arquitecturas (MEAN & XAMP) así cómo especialista en Ludificación/Gamificación, Representación de datos (UI – UX), Completo desarrollo de aplicaciones web ad-hoc para clientes cómo Cruz Roja, Repsol, Grupo Santalucía, Kutxa Banc, otros… Implementación e integración con modelos de datos SQL & NO-SQL.</p><p>Al mismo tiempo se mantenían, actualizaban y desarrollaban sitios y añadidos para wordpress,Joomla e infrastructuras de otros clientes.</p>",
                        "en":"<p>Fullstack developer behind (MEAN & XAMP) Gamification Specialist, data representation (UI – UX), full development of aplications ad-hoc at different clients like Cruz Roja, Repsol, Grupo Santalucía, Kutxa Banc, others… Implementation and integration with data models SQL & NO-SQL.</p><p>At the same time maintaing, updating, and developing the clients wordpress & Joomla sites and infrastructures.</p>"
                    },
                    "date":"Oct 15 — Nov 16"
                },
                {
                    "name":"Front-End Developer & Image Specialist",
                    "where":"Playthenet digital signage S.L. International & Freelance",
                    "text":{
                        "es":"<p>Especialista en codificación de video, manejo de FFMPEG, Node JS, Javascript, HTML5, CSS3, GIT, Bootstrap, angularJS,  oriendandoel desempeño al streaming de anuncios en una red global web bajo standards FULLHD & 4K con altos ratios de compresión.</p><p>Diseño y desarrollo de interfaces y editores (WYSIWYG) de video, templates, e imágenes para la plataforma.</p><p>Desarrollo web wordpress, y otros de para clientes que demandaban webs, blogs, y aplicaciones de bajo coste.</p>",
                        "en":"<p>Video coder using FFMPEG, Node JS, Javascript, HTML5, CSS3, GIT, Bootstrap, angularJS,  oriented to streaming ads world wide web at standards FULLHD & 4K with high compression rates.</p><p>Editors and user interfaces Design and development of video, templates, and pictures (WYSIWYG editors) for the same platform.</p><p>Web development behind wordpress, and others for informative webs, and blogs</p>"
                    },
                    "date":"Oct 12 —  Oct 15"
                }
            ];
            $scope.academic = [
                {
                    "name":{
                        "es":"Web applications developer",
                        "en":"Web applications developer"
                    },
                    "where":"IES Santo Domingo Savio, Codecademy, bussines formation...",
                    "text":{
                        "es":"<p>Diseño y desarrolo de bases de datos (SQL & NO-SQL “Mongobd”)</p><p>Metodologías MVC con C#, Java, & Javascript.</p><p>Frontend MVC AngularJS. Analisis y planicicación de proyectos tecnológicos.</p><p>Perfecto uso de lenguaje de etiquetas y micro-etiquetas así cómo hojas de estilo(HTML5 / CSS3) Uso básico de preprocesadores.</p><p>Representación interactiva de datos.",
                        "en":"<p>Design & database development (SQL & NO-SQL “Mongobd”)</p><p>MVC metodologies at C#, Java, & Javascript.</p><p>Frontend MVC Angular.JS. Analisys and planification of platforms in proyects.</p><p> Perfect use of language tags and micro-tags like as style sheets. (HTML5 / CSS3) basic use of style preprocessors.</p><p>Interactive data representation.</p>"
                    },
                    "date":"2013 —  2015"
                },
                {
                    "name":{
                        "es":"FPII Imagen audiovisual (NVQs equivalent)",
                        "en":"Superior grade of Audiovisual Image (NVQs equivalent)"
                    },
                    "where":"IES Puerta Bonita",
                    "text":{
                        "es":"<p>Iluminación de espacios escénicos, Fotografía, Edición y post producción, Grabación en estudio, CCU y operación de camara, Grabación ENG, Equipos audiovisuales y fotográficos, Lenguaje audiovisual y fílmico, Codificación y tecnología de la señal de vídeo.</p>",
                        "en":"<p>Scenic ligthing spaces, Photography, Edition and post production, Stage Recording, CCU and camera operations, ENG Recording, Audiovisual and photograph hardware, Filmic and Audiovisual Language, Codification and technology of video signal.</p>"
                    },
                    "date":"2010 —  2012"
                }
            ];
            $scope.initMap = function() {
                if($scope.mapLoaded){
                    $scope.mapShow=!$scope.mapShow;
                }else{
                    var imported = document.createElement('script');
                    imported.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDWfggbIy-nsuuoeE0pqApP8c31npNTIqo&callback=initMap';
                    document.head.appendChild(imported);
                    $scope.mapLoaded=true;
                    $scope.mapShow=true;
                }
            };

            //Implementación del multiidioma para el módulo
            $scope.introTextStepsMulti={
                es:[
                    "¡Hola! Bienvenido a mi CV web :D",
                    "Deten el fondo si es mucho lio!",
                    "Si quieres leer en English... Change It!"
                ],
                en:[
                    "Hi! Welcome to my web CV :D",
                    "Stop the background if you like.",
                    "If you like to read in Spanish... Cámbialo!"
                ]
            };

            $scope.langToogler=function(){
                $scope.toogleLang=!$scope.toogleLang;
                $scope.IntroOptions.steps=[];
            };
            //Configuración y steps iniciales //Scope definido en plantilla por attr
            $scope.IntroOptions ={
                scrollToElement: true,
                scrollPadding: 80,
                skipLabel: 'Salir / Exit',
                showBullets:false,
                showProgress:true,
                showStepNumbers: false,
                exitOnOverlayClick: true,
                exitOnEsc:true,
                nextLabel: '<strong>Siguiente! / NEXT!</strong>',
                prevLabel: '<span style="color:green">Anterior / Previous</span>',
                doneLabel: 'Thanks!',
                steps:[]
            };
            //Acción para la llamada al módulo de acción.
            $scope.runIntro = function(){
                $scope.IntroOptions.steps=[];
                $scope.IntroOptions.steps.push(
                    {
                        intro: $scope.introTextStepsMulti[$scope.lang][0]
                    },
                    {
                        element: document.querySelector('#step1'),
                        intro: $scope.introTextStepsMulti[$scope.lang][1],
                        position: 'left'
                    }
                );
                if($scope.toogleLang){
                    $scope.stepLang = {
                        element: document.querySelectorAll('#step2')[1],
                        intro: $scope.introTextStepsMulti[$scope.lang][2],
                        position: 'bottom'
                    }
                }
                else{
                    $scope.stepLang =  {
                        element: document.querySelectorAll('#step2')[0],
                        intro: $scope.introTextStepsMulti[$scope.lang][2],
                        position: 'bottom'
                    }
                };
                $scope.IntroOptions.steps.push($scope.stepLang);
                $scope.CallMe();//Scope definido en plantilla por attr
            };
            $scope.ShouldAutoStart = false;
        }]);
})();

/*Función callback de google maps*/
function initMap (){
    if(typeof google != 'undefined'){
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.416717, lng: -3.703718},
            scrollwheel: false,
            zoom: 13
        });
        var cityCircle = new google.maps.Circle({
            strokeColor: '#bbbbbb',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#fbfbfb',
            fillOpacity: 0.35,
            map: map,
            center: {lat: 40.416717, lng: -3.703718},
            radius: 5000
        });
    }else{
        $timeout(function(){initMap()},1);
    }
};