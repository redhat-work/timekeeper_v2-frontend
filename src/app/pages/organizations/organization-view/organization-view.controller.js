/**
 * @author vitorsilvalima
 * created on 19.03.2017
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.organizations')
    .controller("organizationsViewCtrl",organizationsViewCtrl);

    /** @ngInject */
    function organizationsViewCtrl($scope, organizationService, $stateParams, $log) {

        $scope.organization = {} ;
        if($stateParams.id){
            $log.debug("Searching for organization id: "+ $stateParams.id);
            organizationService.byID($stateParams.id).then(function(response){
                $scope.organization = response.data;
            })
        }

        $scope.save = function(organization){
            console.log(organization);
        }    

    }

})();
