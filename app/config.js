// JavaScript Document
require.config({
	baseUrl: "libs",
	paths:{
		"angular" : "angular.min",
		"service" : "../app/service"
	},
	shim: {		
		'angular' : {exports: 'angular'},		
		"service" : {deps: ['angular']}
	}
	
});
require(['../app/app']);