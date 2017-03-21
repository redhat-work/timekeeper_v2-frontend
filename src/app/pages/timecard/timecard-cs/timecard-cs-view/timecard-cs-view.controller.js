/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.timecard-cs')
    .controller("timecard-cs-view",ctrl)

    .controller("selectModalCtrl",selectModalCtrl);

    /** @ngInject */
    function ctrl($scope, timecardService, STATUS, Session, $uibModal) {

        $scope.timecards = [];
        $scope.status = STATUS;

        timecardService.getByConsultant(Session.id).then(function(response){
            $scope.timecards = response.data;
        }, function(error){

        });
        
        $scope.select_project = function () {
        
            var modalInstance = $uibModal.open({
                templateUrl: 'app/pages/timecard/timecard-cs/timecard-cs-view/project_selection.html',
                controller: 'selectModalCtrl'
            });

            modalInstance.result.then(function(data){
                console.log(data);
            },function(err){
                console.log(err);
            })
        
        };

    }

    /** @ngInject */
    function selectModalCtrl($scope,  Session, projectService, $uibModalInstance, $state) {

        $scope.projects = [];
        $scope.id = ""; 

        projectService.getByConsultant(Session.id).then(function(response){

            $scope.projects = response.data;

        }, function(error){

        });

        $scope.ok = function () {
            $uibModalInstance.close($scope.id);
            $state.go('timecard-cs.new',{project_id: $scope.id});
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        };
    
    }

    
})();
