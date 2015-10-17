'use strict';

angular.module('slide')

    .controller('bindingController', ['$scope',
        function($scope) {


            $scope.color = '';

            $scope.red = function(){
                $scope.color = 'RED';
            }

            $scope.yellow = function(){
                $scope.color = 'Yellow';
            }
        }
    ]);
