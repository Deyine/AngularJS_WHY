'use strict';

angular.module('slide')

.directive('slideItem', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'slide/directives/slide-item/slide-item.html',
        scope: {
            item: '='
        }
    };
});
