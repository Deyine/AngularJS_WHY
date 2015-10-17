'use strict';

angular.module('slide')

.controller('slideController', ['$scope', 'slidesResult',
    function($scope, slidesResult) {
        // Loading Slides
        $scope.slides = slidesResult.data;
    }
]);
