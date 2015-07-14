/**
 * ReservationController
 *
 * @description :: Server-side logic for managing reservations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	create: function(req, res) {
		console.log('reservation/create');

		var params = req.params.all();
		console.log(JSON.stringify(params));
		
		if(params.id == null) {
			delete params.id;
		}

		// create reservation with params
		Reservation.create(params, function (err, reservation) {
			if(err) {
				return res.status(500);
				console.log('error');
			}
			return res.json(reservation);
		});
	},

	list: function(req, res, next) {
		console.log('reservation/list'); //TODO
		// get an array of all records in the Reservation collection
		Reservation.find(function (err, reservations) {
			if(err) return next(err);

			var reservationList = [];

			for (var i=0; i<reservations.length; i++) {
				reservationList.push({
					guest: reservations[i].guest_name,
					property: reservations[i].reservation_source,
					source: reservations[i].reservation_source,
					bed: reservations[i].bed_id,
					key: reservations[i].key_code,
					checkIn: reservations[i].check_in,
					checkOut: reservations[i].check_out,
					price: reservations[i].total_price
				});
			}
			return res.json(reservationList);
		});
	}
	
};

