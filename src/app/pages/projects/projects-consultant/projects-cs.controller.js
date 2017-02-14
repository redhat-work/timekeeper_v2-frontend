/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.projects')
    .controller("projects-cs",projects);

    /** @ngInject */
    function projects($scope, projectService) {

        $scope.projects = [];

        projectService.getByConsultant(3).then(function(response){

            $scope.projects = response.data;

        }, function(error){

        });
        

    }

})();
