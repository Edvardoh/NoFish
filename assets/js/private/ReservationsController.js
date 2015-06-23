angular.module('DashboardModule').controller('ReservationsController', ['$scope', function($scope) {
	$scope.reservationsData = [{
		id: 111,
		reservation_source: 'AirBnB'
	}];

	$scope.addReservation = function() {
		//debugger;
		//TODO just dummy content in the modal.

		$scope.show_modal = true;

	    $scope.close_modal = function(){
	        $scope.show_modal = false;
	    }
	};

	$scope.submitReservationForm = function(a, b, c, d) {
		debugger;
	}
}]);