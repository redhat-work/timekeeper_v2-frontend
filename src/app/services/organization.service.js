/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
	'use strict';

	angular.module('timekeeper.services')

	.factory('organizationService', organizationService);

	/** @ngInject */
	function organizationService($http,ENDPOINT_API,$log) {
		var path = "/organizations";
		var url = ENDPOINT_API +path;

		function all(){
			return $http.get(url);
		}

		function byID(id){
			return $http.get(url + "/" +id);
		}

		return {
			all:all,
			byID:byID
		};
	}
})();
