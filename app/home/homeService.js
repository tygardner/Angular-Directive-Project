var app = angular.module('directivePractice');

app.service('weatherService', function($http, $q){

	this.getWeather = function(city){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
		}).then(function(data){
			data.data.main.temp= Math.round((data.data.main.temp - 273)*9/5) + 32;
			console.log(data.data.main.temp)
			deferred.resolve(data);
		})
		return deferred.promise;
	}

})//end app.service