/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
	'use strict';

	angular.module('timekeeper.services')

	.factory('timecardService', service);

	/** @ngInject */
	function service($http,ENDPOINT_API,$log) {
		var path = "/timecards";
		var url = ENDPOINT_API +path;

		function getByConsultant(id){
			return $http.get(url+"/cs/"+id);
		}

		function getByPM(id){
			return $http.get(url+"/pm/"+id);
		}

		function getByID(id){
			return $http.get(url+"/tc/"+id);
		}

		return {
			getByConsultant:getByConsultant,
			getByPM:getByPM,
			getByID:getByID
		};
	}
})();
