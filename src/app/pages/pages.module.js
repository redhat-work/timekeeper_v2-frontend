/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
	'use strict';

	angular.module('timekeeper.pages', [
		'ui.router',
        'timekeeper.pages.consultants',
		'timekeeper.pages.projects',
		'timekeeper.pages.timecard-cs',
		'timekeeper.pages.timecard-pm'
	])
	.config(routeConfig);

	/** @ngInject */
	function routeConfig($urlRouterProvider) {
		$urlRouterProvider.otherwise('/consultants');
	}

})();
