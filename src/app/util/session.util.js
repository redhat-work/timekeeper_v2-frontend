/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
	'use strict';
	angular.module('timekeeper.util')
    
    .service('Session', function () {

		this.create = function (id, id_role, email,username,token,name, person_type) {
			this.id = id;
			this.id_role = id_role;
			this.email=email;
			this.username=username;
			this.token=token;
			this.name=name;
            this.person_type=person_type;
		};

		this.destroy = function () {
			this.id = null;
			this.id_role = null;
			this.email= null;
			this.username= null;
			this.token= null;
			this.name= null;
            this.person_type= null;
		};

	});
})();