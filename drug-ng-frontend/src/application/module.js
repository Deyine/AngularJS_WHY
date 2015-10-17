angular
	.module('application', [])
	.config(['$stateProvider', function($stateProvider) {
        'use strict';
		$stateProvider
			// Main layout
			.state('application', {
				abstract: true,
				templateUrl: 'application/layout/application.html'
			})
	}]);
