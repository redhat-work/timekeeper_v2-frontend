(function () {
  'use strict';
	angular.module('timekeeper.util')

	.factory('AuthService',AuthService); 
	/**
	 * 
	 */
	function AuthService(localStorageService,$http,
						Session,DEV_MODE,$q) {
		var authService = {};

		/**
		 * Loads session from local storage and 
		 * saves it to the session service
		 */
		authService.login = function () {

			var deferred = $q.defer();
			var s = localStorageService.get("session");
			if(s){
				Session.create(
                    s.id_person,
                    s['role.short_name'],
                    s.email,
                    s.username,
                    s.token,
                    s.name,
                    s.person_type);
                    
				deferred.resolve();

			}else{
				deferred.reject();
			}

			return deferred.promise;
		};

		authService.logout = function () {
			Session.destroy();
			localStorageService.remove('session');
			window.location.href = '/auth.html';
		}
		/**
		 * Checks if the user is authenticated by
		 * checking if the session has been saved
		 */
		authService.isAuthenticated = function () {
			return !!Session.id;
		};
		/**
		 * Verifies if the user can access an 
		 * specific page
		 */
		authService.isAuthorized = function (authorizedRoles) {
			if (!angular.isArray(authorizedRoles)) {
				authorizedRoles = [authorizedRoles];
			}
			return ((authService.isAuthenticated() &&
				authorizedRoles.indexOf(Session.tipo) !== -1)
				|| DEV_MODE || authorizedRoles.indexOf("*") !== -1);
		};
		return authService;
	}
})();