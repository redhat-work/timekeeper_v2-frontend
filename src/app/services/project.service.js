/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
	'use strict';

	angular.module('timekeeper.services')

	.factory('projectService', projectService);

	/** @ngInject */
	function projectService($http,ENDPOINT_API,$log) {
		var path = "/projects";
		var url = ENDPOINT_API +path;

		function getByConsultant(id){
			return $http.get(url+"/cs/"+id);
		}

		return {
			getByConsultant:getByConsultant,
		};
	}
})();
