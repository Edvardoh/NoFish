/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  schema: true,

  attributes: {
    
  	username: {
  		type: 'string',
  		required: true
  	},

  	email: {
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true
  	},

    firstname: {
      type: 'string',
      required: true
    },

    lastname: {
      type: 'string',
      required: true
    },

    isadmin: {
      type: 'boolean'
    },

  	encryptedPassword: {
  		type: 'string'
  	}
  },

  beforeCreate: function(values, next) {
    // first check to make sure password and confirmation match
    if(!values.password || values.password != values.passwordConfirm) {
      return next({
        err: ["password and password confirmation do not match."]
      });
    }

    // encrypt password using bcrypt (https://github.com/ncb000gt/node.bcrypt.js/)
    // save encrypted value to values
    bcrypt.hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
      if(err) return next(err);

      values.encryptedPassword = encryptedPassword;
      next();
    });
  }
};

