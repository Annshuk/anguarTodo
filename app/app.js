// JavaScript Document
(function(){
	"use strict";
     define(['angular', 'service'], function(angular, service) {
	   var app = angular.module('shoppingCart', ['apiService'])
	   .controller('todoList', Model.controller);
	    Model.controller.$inject = ['$scope', '$timeout', 'getservice'];
	 //define angular in app
	 angular.bootstrap(document, ['shoppingCart']);	
   });
 //controller
})()

var Model = {} || Model;

Model = (function(){	  
	function ShoppingCart($scope, $timeout, getservice){
	   $scope.collections  = getservice.read()
	   var size = $scope.collections.length;
	   //strore new data in collection	
	   $scope.addNewItem = function(name){//add data on click	   	   	   	 
			   getservice.newUser(name)	
			   $scope.alertMessage = false;			   		  
			    if($scope.collections.length !== size){		   
			      $scope.alertMessage = true;
			     }
			   $scope.userName = name;
			   $timeout(function(){
				   $scope.alertMessage =false;
				},1500);
			   $scope.addNewName = "";			  
	    };		
	   
	   $scope.isChangeCheck = function(){	
		 	$scope.list = getservice.isChecked()			
	   };	
	   
	   $scope.deleteAll = function(data){
		   console.log($scope.list)
		 	$scope.listITem = getservice.deleteList()			
	   };
	      
	   $scope.deleteUser = function(data){
		   getservice.deleteUser(data)
	   };
	   
	}
return {
	controller: ShoppingCart
	}
})();