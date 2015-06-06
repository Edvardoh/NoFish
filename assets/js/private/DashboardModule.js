var dashboard = angular.module('DashboardModule', [
	'angularify.semantic.sidebar', 
	'ngRoute'
]);

dashboard.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/timeline', {
			templateUrl: 'partials/timeline.html'
		}).
		when('/reservations', {
			templateUrl: 'partials/reservations'
		}).
		when('/performance', {
			templateUrl: 'partials/performance'
		}).
		otherwise({
			redirectTo: '/'
		})
	}]);