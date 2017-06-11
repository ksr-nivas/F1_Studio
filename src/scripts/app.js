(function() {
    'use strict';

    angular.module('f1StudioApp', ['ngRoute'])
        .config(function($routeProvider, $locationProvider){
            $routeProvider
                .when('/',{
                    templateUrl: 'scripts/partials/welcome.partial.html',
                    controller: 'f1StudioController'
                })
                .when('/board',{
                    templateUrl: 'scripts/partials/board.partial.html',
                    controller: 'f1StudioController'
                });
            
            $locationProvider.html5Mode(true);
        });
        
})();