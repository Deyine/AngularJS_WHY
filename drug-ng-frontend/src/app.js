'use strict';
angular
    .module('drug-app', [
        // Bower modules
        'ui.router',
        'ngAria',
        'ngSanitize',
        'ngCookies',

        'application',
        // Slides module
        'slide'
    ])
    .config(['$urlRouterProvider', function($urlRouterProvider) {
        // when there is an empty route or unreconized route
        $urlRouterProvider.otherwise('/');

    }]);
