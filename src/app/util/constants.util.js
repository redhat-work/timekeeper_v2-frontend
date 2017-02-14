/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
	'use strict';

	var util = angular.module('timekeeper.util');

    util.constant('ENDPOINT_API', 'http://localhost:4000/api');
    util.constant('PERSON_TYPE', ['','Partner Consultant','Red Hat Consultant','Partner Manager','Red Hat Manager']);
    util.constant('ROLES', ['','admin','partner_consultant','redhat_manager','partner_manager']);
    util.constant('DEV_MODE',true);

})();
