/**
 * @author vitorsilvalima
 * created on 27.01.2017
 */
(function () {
  'use strict';

  angular.module('timekeeper.pages.timecard-cs', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

        $stateProvider
            .state('timecard-cs', {
            url: '/timecard-cs',
            template: '<div ui-view></div>'
        });

        $stateProvider
            .state('timecard-cs.new', {
            url: '/new',
            templateUrl: 'app/pages/timecard/timecard-cs/timecard-cs-new/timecard-cs-new.html',
            controller: 'timecard-cs-new'
        });

        $stateProvider
            .state('timecard-cs.view', {
            url: '/view',
            templateUrl: 'app/pages/timecard/timecard-cs/timecard-cs-view/timecard-cs-view.html',
            controller: 'timecard-cs-view'
        });


  }

})();
