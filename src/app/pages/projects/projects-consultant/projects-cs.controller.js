/**
 * @author Vitor Silva Lima
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.projects')
    .controller("projects-cs",projects);

    /** @ngInject */
    function projects($scope, projectService, Session) {

        $scope.projects = [];

        projectService.getByConsultant(Session.id).then(function(response){

            $scope.projects = response.data;

        }, function(error){

        });
        

    }

})();
