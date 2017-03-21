/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.consultants')
    .controller("consultant-edit",consultantEdit);

    /** @ngInject */
    function consultantEdit($scope, personService, $stateParams, roleService, organizationService, STATES) {

        $scope.person = {};

        $scope.roles = [];
        roleService.all().then( function(response){
            $scope.roles = response.data;
        });

        $scope.organizations = [];
        organizationService.all().then( function(response){
            $scope.organizations = response.data;
        });

        $scope.states = STATES;

        if($stateParams.id){

            /* load data */
            personService.byID($stateParams.id).then(function(response){

                $scope.person = response.data;

            },function(error){

            });

        }

    }

})();
