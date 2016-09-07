// JavaScript Document
"use strict";
   define(['angular', 'service'], function(angular, service) {
	   var app = angular.module('shoppingCart', ['apiService'])
	   .controller('todoList', Model.controller);
	    Model.controller.$inject = ['$scope', '$timeout', 'getservice'];
	 //define angular in app
	 angular.bootstrap(document, ['shoppingCart']);	
  });


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
	   
	   $scope.deletecollection = function(){
		 $scope.collections = getservice.deleteList()
		 $scope.list = 0;
	   };
	      
	   $scope.deleteUser = function(data){
		   getservice.deleteUser(data)
		   $scope.list = data.length;
	   };
	   $scope.reset = function(){	
		  localStorage.clear()
		  getservice.resetData()
		}
	}
return {
	controller: ShoppingCart
	}
})();