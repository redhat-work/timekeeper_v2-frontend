/**
 * @author vitorsilvalima
 * created on 26.01.2017
 */
(function () {
	'use strict';

	var util = angular.module('timekeeper.util');

    util.constant('ENDPOINT_API', 'http://localhost:4000/api');
    util.constant('PERSON_TYPE', ['','Partner Consultant','Red Hat Consultant','Partner Manager','Red Hat Manager']);
    util.constant('ROLES', ['admin','partner_consultant','redhat_manager','partner_manager']);
    util.constant('DEV_MODE',true);
	util.constant('STATUS',[{
		id:1, description: "In progress"
	},{
		id:2, description: "Approved"
	},{
		id:3, description: "Rejected"
	},{
		id:4, description: "Submitted"
	}]);

    util.constant('STATES',[{
		"id": "AC",
		"name": "Acre"
	},
	     {
		"id": "AL",
		"name": "Alagoas"
	},
	     {
		"id": "AM",
		"name": "Amazonas"
	},
	     {
		"id": "AP",
		"name": "Amapá"
	},
	     {
		"id": "BA",
		"name": "Bahia"
	},
	     {
		"id": "CE",
		"name": "Ceará"
	},
	     {
		"id": "DF",
		"name": "Distrito Federal"
	},
	     {
		"id": "ES",
		"name": "Espírito Santo"
	},
	     {
		"id": "GO",
		"name": "Goiás"
	},
	     {
		"id": "MA",
		"name": "Maranhão"
	},
	     {
		"id": "MG",
		"name": "Minas Gerais"
	},
	     {
		"id": "MS",
		"name": "Mato Grosso do Sul"
	},
	     {
		"id": "MT",
		"name": "Mato Grosso"
	},
	     {
		"id": "PA",
		"name": "Pará"
	},
	     {
		"id": "PB",
		"name": "Paraíba"
	},
	     {
		"id": "PE",
		"name": "Pernambuco"
	},
	     {
		"id": "PI",
		"name": "Piauí"
	},
	     {
		"id": "PR",
		"name": "Paraná"
	},
	     {
		"id": "RJ",
		"name": "Rio de Janeiro"
	},
	     {
		"id": "RN",
		"name": "Rio Grande do Norte"
	},
	     {
		"id": "RO",
		"name": "Rondônia"
	},
	     {
		"id": "RR",
		"name": "Roraima"
	},
	     {
		"id": "RS",
		"name": "Rio Grande do Sul"
	},
	     {
		"id": "SC",
		"name": "Santa Catarina"
	},
	     {
		"id": "SE",
		"name": "Sergipe"
	},
	     {
		"id": "SP",
		"name": "São Paulo"
	},
	     {
		"id": "TO",
		"name": "Tocantins"
	}]);
})();
