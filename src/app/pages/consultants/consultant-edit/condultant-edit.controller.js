/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.consultants')
    .controller("consultant-edit",consultantEdit);

    /** @ngInject */
    function consultantEdit($scope, personService, $stateParams) {

        $scope.person = {};

        if($stateParams.id){

            /* load data */
            personService.byID($stateParams.id).then(function(response){

                $scope.person = response.data;

            },function(error){

            });

        }

    }

})();
