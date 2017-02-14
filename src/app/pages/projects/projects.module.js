/**
 * @author vitorsilvalima
 * created on 27.01.2017
 */
(function () {
  'use strict';

  angular.module('timekeeper.pages.projects', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

        $stateProvider
            .state('projects', {
            url: '/projects',
            template: '<div ui-view></div>'
        });

        $stateProvider
            .state('projects.consultants', {
            url: '/cs',
            templateUrl: 'app/pages/projects/projects-consultant/projects-cs.html',
            title: 'Consultants',
            controller: 'projects-cs'
        });

  }

})();
