/**
* Guest.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	schema: true,

  	attributes: {

  		guestName: {
  			type: 'string'
  		},

  		serviceFee: {
  			type: 'float'
  		},

  		totalPrice: {
  			type: 'float'
  		},

  		confirmationCode: {
  			type: 'integer'
  		},

  		checkinDate: {
  			type: 'date'
  		},

  		checkoutDate: {
  			type: 'date'
  		},

  		listingUrl: {
  			type: 'string'
  		},

  		itineraryUrl: {
  			type: 'string'
  		}

  	}
};

