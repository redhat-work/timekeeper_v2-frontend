/**
 * @author vitorsilvalima
 * created on 27.01.2017
 */
(function () {
  'use strict';

  angular.module('timekeeper.pages.consultants', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

        $stateProvider
            .state('consultants', {
            url: '/consultants',
            templateUrl: 'app/pages/consultants/consultant-view/consultants.html',
            title: 'Consultants',
            controller: 'consultants'
        });

        $stateProvider
            .state('consultant', {
            url: '/consultant/:id',
            templateUrl: 'app/pages/consultants/consultant-edit/condultant-edit.html',
            title: 'Consultants',
            controller: 'consultant-edit'
        });

        $stateProvider
            .state('consultantnew', {
            url: '/consultant-new',
            templateUrl: 'app/pages/consultants/consultant-new/condultant-new.html',
            title: 'Consultants',
            controller: 'consultant-new'
        });

  }

})();
