var app = angular.module("authApp",[
    'patternfly',
	'LocalStorageModule'
]);

app.controller('authC',function($scope, $http, $window, localStorageService, Notifications){
    var user = {};
    var url = "http://localhost:4000/auth";

    var types = ['success','info','danger', 'warning'];
    $scope.type = types[0];
    $scope.isPersistent = true;
    $scope.msgShow=false;
    $scope.header = 'Default Header.';
    $scope.message = 'Default Message.';


    $scope.logIn= function(user){

        $http.post(url,user).then(function(response){
            $scope.type = types[0];
            $scope.header = 'Success!';
            $scope.message = 'User logged successfully.';
            $scope.msgShow=true;


            localStorageService.set("session",response.data);
            window.location.href = '/';

        },function(error){

            $scope.type = types[2];
            $scope.header = 'Incorrect Information!';
            $scope.message = error.data;
            $scope.msgShow=true;

        });

    };

});