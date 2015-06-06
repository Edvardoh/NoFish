/**
* Reservation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	schema: true,

  	attributes: {
  		
  		id: {
  			type: 'integer'
  		},

  		reservation_source: {
  			type: 'string'
  		},

  		guest_name: {
  			type: 'string'
  		},

  		confirmation_code: {
  			type: 'integer'
  		},

  		key_code: {
  			type: 'integer'
  		},

  		bed_id: {
  			type: 'string'
  		},

  		itinerary_url: {
  			type: 'string'
  		},

  		listing_url: {
  			type: 'string'
  		},

  		check_in: {
  			type: 'date'
  		},

  		check_out: {
  			type: 'date'
  		},

  		service_fee: {
  			type: 'integer'
  		},

  		total_price: {
  			type: 'integer'
  		}
  	}
};

