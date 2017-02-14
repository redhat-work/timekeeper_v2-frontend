/**
 * @author vitorsilvalima
 * created on 27.01.2017
 */
(function () {
  'use strict';

  angular.module('timekeeper.pages.timecard-pm', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

        $stateProvider
            .state('timecard-pm', {
            url: '/timecard-pm',
            template: '<div ui-view></div>'
        });


        $stateProvider
            .state('timecard-pm.view', {
            url: '/view',
            templateUrl: 'app/pages/timecard/timecard-pm/timecard-pm-view/timecard-pm-view.html',
            controller: 'timecard-pm-view'
        });


  }

})();
