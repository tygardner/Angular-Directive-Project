var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'app/home/homeTmpl.html',
			controller:'homeCtrl',
		})
		.otherwise({
			redirectTo: '/'
		})



}); //end app.config
