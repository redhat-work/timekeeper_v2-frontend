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

app.run(function($rootScope, $state, AuthService, $window,$log) {
	
	AuthService.login().then(function(){

		console.log("Logou");

	},function(erro){

		window.location.href = '/auth.html';

	});


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

app.controller('teste',function($scope){
	$scope.oi="oi";
});

