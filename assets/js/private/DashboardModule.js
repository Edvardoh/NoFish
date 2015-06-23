var dashboard = angular.module('DashboardModule', [
	'angularify.semantic.sidebar', 
	'angularify.semantic.modal',
	'ngRoute',
	'ui.grid'
]);

dashboard.config(['$routeProvider',
	// note: when sails gets a request with a '.' in it, it will try
	// to find the file under the /assets directory
	function($routeProvider) {
		$routeProvider.
		when('/timeline', {
			templateUrl: 'partials/timeline.html',
			controller: 'TimelineController'
		}).
		when('/reservations', {
			templateUrl: 'partials/reservations.html',
			controller: 'ReservationsController'
		}).
		when('/performance', {
			templateUrl: 'partials/performance.html'
		}).
		otherwise({
			redirectTo: '/timeline'
		})
	}]);