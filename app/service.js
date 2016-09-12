angular.module("apiService", []).factory('getservice', ["$http", "$q", 
		function($http, $q){			
			var api = {}, collections = [
					{"id":1, "name":"Annshuk", "checked": false},
					{"id":2, "name":"Abhay", "checked": false},
					{"id":3, "name":"Pratik", "checked": false},
					{"id":4, "name":"Shyam", "checked": false},
					{"id":5, "name":"Roshan", "checked": false}			
					];
			//get data	
			api.read = function(){
				//localStorage.clear();
				var newCollection = JSON.parse(sessionStorage.getItem('collection'));
				if(newCollection === null) newCollection = collections;
				else
				 collections = newCollection;					
			return collections;			
			},
			//add new data
			api.newUser = function(user){				
			  var found = collections.reduce(function(previous, obj){//avoiding duplicate value	
					 obj.checked=false;						 		
					 if (user === obj.name || user.toLowerCase() === obj.name.toLowerCase()) return true;
					  return previous;
					},false);	
				if (!found){
				   if(user!==undefined && user!==''){
					  collections.unshift({"id": collections.length+1, "name":user,  "select": false});	
					  sessionStorage.setItem('collection', JSON.stringify(collections));
				   } else alert('Error:' + user)
				} else  alert('duplicate value'); 
				return collections;
			},
			
			api.isChecked = function(){
				var arr = [];
				 collections.filter(function(data){						
				 if(data.checked===true) arr.push(data)
				 return arr;
			  });
			return arr;
			},
			//delete task;
			api.deleteUser = function(item){				
				var del = collections.indexOf(item);				
				collections.splice(del, 1);	
				sessionStorage.setItem('collection', JSON.stringify(collections));				
				return collections;
			},
			
			api.deleteList = function(){
			    collections.splice(0, collections.length)
				sessionStorage.setItem('collection', JSON.stringify(collections));				
				collections = sessionStorage.removeItem(collections)						
				collections = [];
				return '';
			},
			api.resetAll = function(){	
				collections = [
					{"id":1, "name":"Annshuk", "checked": false},
					{"id":2, "name":"Abhay", "checked": false},
					{"id":3, "name":"Pratik", "checked": false},
					{"id":4, "name":"Shyam", "checked": false},
					{"id":5, "name":"Roshan", "checked": false}			
					];
				sessionStorage.setItem('collection', JSON.stringify(collections))
				return collections;
			}
			
		return api;
}]);