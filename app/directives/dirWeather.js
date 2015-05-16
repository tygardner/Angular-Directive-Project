var app = angular.module('directivePractice');

app.directive('dirWeather', function(){
	return {
		templateUrl: 'app/directives/dirWeather.html',
		scope: {
			currentUser: '=',
			weatherCall: '&'
			},
			controller: function($scope, weatherService){
				$scope.weatherCall({ data: $scope.currentUser.city }).then(function(data){
					$scope.weather = data.data.weather[0].description;
					$scope.newTemp = data.data.main.temp;
					
				});
		    }
		}

});
