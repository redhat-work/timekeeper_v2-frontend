/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('timekeeper.pages.consultants')
    .controller("consultant-new",consultantNew);

    /** @ngInject */
    function consultantNew($scope, personService) {

        $scope.person = {};

        

    }

})();
