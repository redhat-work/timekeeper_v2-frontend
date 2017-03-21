/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.consultants')
    .controller("consultant-new",consultantNew);

    /** @ngInject */
    function consultantNew($scope, personService, STATES, roleService, organizationService) {
        $scope.roles = [];
        roleService.all().then( function(response){
            $scope.roles = response.data;
        });

        $scope.organizations = [];
        organizationService.all().then( function(response){
            $scope.organizations = response.data;
        });

        $scope.states = STATES;

        $scope.person = {};

        

    }

})();
