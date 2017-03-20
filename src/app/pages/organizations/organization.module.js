/**
 * @author vitorsilvalima
 * created on 27.01.2017
 */
(function () {
  'use strict';

  angular.module('timekeeper.pages.organizations', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

        $stateProvider
            .state('organizations', {
            url: '/organizations',
            templateUrl: 'app/pages/organizations/organizations/organizations.html',
            title: 'organizations',
            controller: 'organizationsCtrl'
        });

      /*  $stateProvider
            .state('organization', {
            url: '/organization/:id',
            templateUrl: 'app/pages/organizations/organization-edit/condultant-edit.html',
            title: 'organizations',
            controller: 'organization-edit'
        });

        $stateProvider
            .state('organizationnew', {
            url: '/organization-new',
            templateUrl: 'app/pages/organizations/organization-new/condultant-new.html',
            title: 'organizations',
            controller: 'organization-new'
        });*/

  }

})();
