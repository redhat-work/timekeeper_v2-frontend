/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.timecard-pm')
    .controller("timecard-pm-all",ctrl);

    /** @ngInject */
    function ctrl($scope, timecardService) {

        $scope.projects = [];

        timecardService.getByPM(3).then(function(response){

            $scope.timecards = response.data;

        }, function(error){

        });
        
        $scope.getLastDay = function(day){
            var date = new Date(day);
            date.setDate(date.getDate()+6);
            return date;
        }

    }

})();
