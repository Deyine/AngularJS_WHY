'use strict';
angular.module('slide')
    .factory('slideService', ['$http',

        function($http) {
            return {

                /**
                 * Get all slides
                 * @return Slides
                 */
                getAll: function() {
                    var url = '/drug-api/api/slides';
                    return $http({
                        method: 'GET',
                        cache: false,
                        url: url,
                        headers: {
                            'Accept': 'application/json',
                            'Cache-Control' : 'no-cache'
                        }
                    });
                }
            };
        }
    ]);
