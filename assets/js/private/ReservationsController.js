angular.module('DashboardModule').controller('ReservationsController', ['$scope', '$http', '$route', '$timeout', function($scope, $http, $route, $timeout) {
	$scope.reservationForm = {};

	$scope.refresh = function() {
		$http.get('/reservation/list')
		.then(function (result) {
			$scope.reservationsData = result.data;
		})
		.catch(function (sailsResponse) {
			console.log(sailsResponse);
			//TODO handle client side errors better
		})
		.finally(function () {
			//TODO add masking
		});
	};

	$scope.addReservation = function() {
		//debugger;
		//TODO just dummy content in the modal.

		$scope.show_modal = true;

	    $scope.close_modal = function(){
	        $scope.show_modal = false;
	    }
	};

	$scope.submitReservationForm = function() {
		var params = $scope.reservationForm;
		
		$http.post('/reservation/create', params)
		.then(function (result){
			$scope.reservationsData.push(result.data);
			$scope.show_modal = false;
			$timeout(function(){
				$route.reload()
			}, 100);
		})
		.catch(function (sailsResponse) {
			console.log(sailsResponse);
			//TODO handle client side errors better
		})
		.finally(function () {
			//TODO add masking
		});
	};

	//Start off by refreshing the data
	$scope.refresh();
}]);