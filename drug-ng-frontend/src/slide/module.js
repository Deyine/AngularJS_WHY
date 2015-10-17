'use strict';

angular.module('slide', [])
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('application.case1', {
                url: '/slide/case1',
                templateUrl: 'slide/views/case1.html',
                controller: 'slideController',
                resolve: {
                    slidesResult: ['slideService',
                        function(slideService) {
                            return slideService.getAll();
                        }
                    ]
                }
            })

        .state('application.case2', {
            url: '/slide/case2',
            templateUrl: 'slide/views/case2.html',
            controller: 'slideController',
            resolve: {
                slidesResult: ['slideService',
                    function(slideService) {
                        return slideService.getAll();
                    }
                ]
            }
        })

        .state('application.binding', {
            url: '/slide/binding',
            templateUrl: 'slide/views/binding.html',
            controller: 'bindingController'
        });

    }]);
