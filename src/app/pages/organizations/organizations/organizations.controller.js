/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.organizations')
    .controller("organizationsCtrl",organizationsCtrl);

    /** @ngInject */
    function organizationsCtrl($scope, organizationService) {

        $scope.organizations = [] ;
        organizationService.all().then(function(response){
            $scope.organizations = response.data;
        })
        

    }

})();
