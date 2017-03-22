/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
	'use strict';

	angular.module('timekeeper.services')

	.factory('periodService', periodService);

	/** @ngInject */
	function periodService($http,ENDPOINT_API,$log) {
		var path = "/periods";
		var url = ENDPOINT_API + path;

		function get(){
			return $http.get(url);
		}

		return {
			get:get,
		};
	}
})();
