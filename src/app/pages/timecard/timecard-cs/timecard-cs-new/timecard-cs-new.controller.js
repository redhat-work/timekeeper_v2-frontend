/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.timecard-cs')
    .controller("timecard-cs-new",ctrl);

    /** @ngInject */
    function ctrl($scope,  $stateParams) {

        if( $stateParams.project_id){
            console.log("worked!");
        }
        

    }

})();
