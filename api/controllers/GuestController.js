/**
 * GuestController
 *
 * @description :: Server-side logic for managing guests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	confirmation: function(req, res, next) {
		console.log('guest/confirmation'); //TODO
		console.log(req.params.all());
	}
	
};

