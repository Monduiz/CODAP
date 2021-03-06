
r.define([],

    function () {

		return {
			Find : function(array, delegate) {
				for (var i=0; i < array.length; i++) {
					if (delegate(array[i])) return array[i];
				}
				
				return null;
			},
			
			FindIndex : function(array, delegate) {
				for (var i=0; i < array.length; i++) {
					if (delegate(array[i])) return i;
				}
				
				return null;
			},
			
			ForEach : function(array, delegate) {
				for (var i in array) {
					delegate(array[i]);
				}
			},
			
			Map : function(array, delegate) {
				var arr = [];
				
				for (var i in array) {
					arr.push(delegate(array[i]));
				}
				
				return arr;
			}
		}
	});