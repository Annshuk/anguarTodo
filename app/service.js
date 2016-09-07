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
				//localStorage.clear()
				var newCollection = JSON.parse(localStorage.getItem('collection'));
				if(newCollection === null) newCollection = "";
				else
				 collections = newCollection;		
			return collections;			
			},
			
			api.resetData = function(){	
			return collections;	
			}
			//add new data
			api.newUser = function(user){				
			  var found = collections.reduce(function(previous, obj){//avoiding duplicate value	
					 obj.checked=false;						 		
					 if (user === obj.name) return true;
					  return previous;
					},false);	
				if (!found){
				   if(user!==undefined && user!==''){
					  collections.unshift({"id": collections.length+1, "name":user,  "select": false});	
					  localStorage.setItem('collection', JSON.stringify(collections));
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
				localStorage.setItem('collection', JSON.stringify(collections));
				return collections;
			},
			
			api.deleteList = function(){		    
			    collections.splice(0, collections.length)
				localStorage.setItem('collection', JSON.stringify(collections));
				collections = localStorage.removeItem(collections)	
				collections = [];			
				return collections;
			}
			
		return api;
}]);