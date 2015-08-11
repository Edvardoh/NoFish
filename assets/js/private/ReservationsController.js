angular.module('DashboardModule').controller('ReservationsController', ['$scope', '$http', '$route', '$timeout', function($scope, $http, $route, $timeout) {
	$scope.reservationForm = {};

	$scope.refresh = function() {
		$http.get('/reservation/list')
		.then(function (result) {
			$scope.reservationsData = result.data;
			$scope.gridOptions.data = $scope.reservationsData;
		})
		.catch(function (sailsResponse) {
			console.log(sailsResponse);
			//TODO handle client side errors better
		})
		.finally(function () {
			//TODO add masking
		});
	};

	$scope.gridOptions = { 
		data: [],
		columnDefs: [{
			name: 'id',
			field: 'id',
			visible: false
		},{
			name: 'Guest',
			field: 'guest'
		},{
			name: 'Property',
			field: 'property'
		},{
			name: 'Source',
			field: 'source'
		},{
			name: 'Bed',
			field: 'bed'
		},{
			name: 'Key',
			field: 'key'
		},{
			name: 'CheckIn',
			field: 'checkIn'
		},{
			name: 'CheckOut',
			field: 'checkOut'
		},{
			name: 'Price',
			field: 'price'
		},{
			name: ' ',
			cellTemplate: '<div><i class="remove circle icon" ng-click="getExternalScopes().onClick(row.entity)"></i></div>' //TODO we might wanna use the ID here
		}]
	};

	$scope.gridClickHandler = {
		onClick: function(value) {
			debugger;
		}
	};

	$scope.addReservation = function() {
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