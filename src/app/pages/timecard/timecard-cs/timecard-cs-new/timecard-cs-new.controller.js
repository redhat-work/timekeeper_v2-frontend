/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.timecard-cs')
    .controller("timecard-cs-new",ctrl);

    /** @ngInject */
    function ctrl($scope, projectService) {

        $scope.projects = [];

        projectService.getByConsultant(3).then(function(response){

            $scope.projects = response.data;

        }, function(error){

        });
        

    }

})();
