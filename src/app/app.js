'use strict';

var app = angular.module('timekeeper', [
	'patternfly',
	'LocalStorageModule',
	'timekeeper.pages',
	'timekeeper.services',
	'timekeeper.util'
]);

app.config(function ($httpProvider, $logProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');
	$logProvider.debugEnabled(true);
	
});

app.run(function($rootScope, $state, AuthService, $window,$log ) {
	
	$rootScope.oii="tchau";

	AuthService.login().then(function(){

		console.log("Logou");

	},function(erro){

		window.location.href = '/auth.html';

	});

	$rootScope.$on('$stateChangeSuccess', function(event, to, toParamams, from, fromParams) {
		$rootScope.fromState = from;
	})
	$rootScope.$on('$stateChangeStart', function(event, next) {
		/*var authorizedRoles = next.data.authorizedRoles;
		
		if (AuthService.isAuthenticated() && !AuthService.isAuthorized(authorizedRoles)) {
			event.preventDefault();
			alert("Você não tem permissão para acessar este item!")
			if (AuthService.isAuthenticated()) {
				// user is not allowed
				//$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
			} else {
				// user is not logged in
				//$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
			}
		}*/
	});
});

app.filter('findById', function() {
    return function(input, id) {
      var i=0, len=input.length;
      for (; i<len; i++) {
        if (+input[i].id == +id) {
          return input[i];
        }
      }
      return null;
    }
});

app.controller('mainCtrl',function($scope, Session, AuthService){

	$scope.logout = function(){
		AuthService.logout();
	}
	$scope.role = Session.role;
	$scope.user = Session;

	$scope.checkRole = function(allowedRoles){

		for(var i=0; i<allowedRoles.length; i++){
			if(allowedRoles[i].indexOf($scope.role)>-1){
				return true;
			}
		}
		return false;
	}

});

