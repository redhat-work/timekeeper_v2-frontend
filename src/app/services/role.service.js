/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
	'use strict';

	angular.module('timekeeper.services')

	.factory('roleService', roleService);

	/** @ngInject */
	function roleService($http,ENDPOINT_API,$log) {
		var path = "/roles";
		var url = ENDPOINT_API + path;

		function all(id){
			return $http.get(url);
		}

		return {
			all:all,
		};
	}
})();
