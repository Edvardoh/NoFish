angular.module('MainModule').controller('MainController', ['$scope', '$http', function($scope, $http) {
	$scope.main = {
		authenticated: false
	};

	$scope.loginForm = {};

	$scope.submitLoginForm = function() {
		$http.put('/session/create', {
			username: $scope.loginForm.username,
			password: $scope.loginForm.password
		})
		.then(function onSuccess(result){
			window.location = '/';
		})
		.catch(function onError(sailsResponse) {
			console.log(sailsResponse);
		})
		.finally(function eitherWay() {
			//TODO add masking
		});
	};
}]);