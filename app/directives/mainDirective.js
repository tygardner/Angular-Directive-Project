var app = angular.module('directivePractice');

app.directive('dirDisplay', function(){

	return {
		templateUrl: 'app/directives/directiveTmpl.html',
		link: function(scope, element, attrs){
			scope.toggler = false;
			element.on('click', function(){
				scope.toggler = !scope.toggler;
				scope.$apply();

			})
			console.log(scope)
		}
	}

}); //end app.directive