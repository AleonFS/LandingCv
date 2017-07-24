/**
 * Created by Alejandro Leon on 03/11/2016.
 */

(function(){
    angular.module('cvWeb')
        .config(function ($translateProvider) {
        $translateProvider
            .useLoaderCache(true)
            .fallbackLanguage('en')
            .registerAvailableLanguageKeys(['en','es'], {
                'en*': 'en',
                'es*': 'es'
            })
            .useSanitizeValueStrategy('escape')
            .determinePreferredLanguage('es')
            .useStaticFilesLoader({
                files: [
                    {
                        prefix: 'js/views/langs/',
                        suffix: '.json'
                    }/*,
                    {
                        prefix: 'js/views/tools/cvEditor/templates/europass/lang/',
                        suffix: '.json'
                    },*/
                ]
            })
        ;
    });
})();