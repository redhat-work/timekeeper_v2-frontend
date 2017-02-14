/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.consultants')
    .controller("consultants",consultants);

    /** @ngInject */
    function consultants($scope, personService) {
        $scope.persons = [];
        /* load data */
        personService.all().then(function(response){

            $scope.persons = response.data;

        },function(error){

        });
    }

})();
