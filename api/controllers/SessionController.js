/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var bcrypt = require('bcrypt');

module.exports = {

	new: function(req, res) {
		console.log('session/new'); //TODO
		res.view('session/view');
	},

	create: function(req, res, next) {
		console.log('session/create'); //TODO
		var params = req.params.all();
		
		// first check that we have email and password params
		if(!params.username || !params.password) {
			var err = [{
				name: 'UsernamePasswordRequired', 
				message: 'You must enter a username and password.'
			}];
			return res.negotiate(err);
		}

		// try to find user by email
		User.findOneByUsername(params.username).exec(function(err, user) {
			if(err) return next(err);

			// if no user found
			if(!user) {
				var err = [{
					name: 'NoAccountError', 
					message: 'The username ' + params.username + ' not found.'
				}];

				return res.negotiate(err);
			}

			// compare user entered password to encryptedPassword corresponing to user found with email using bcrypt
			bcrypt.compare(params.password, user.encryptedPassword, function(err, valid) {
				if(err) return next(err);

				// if user password doesn't match the one in our db
				if(!valid) {
					var err = [{
						name: 'PasswordMismatchError',
						message: 'Invalid username/password combination.'
					}];

					return res.negotiate(err);
				}

				// store user id in the session
				req.session.me = user.id;

				return res.ok();
			});
		});
	},

	destroy: function(req, res, next) {
		console.log('session/destroy'); //TODO
		// kill the session
		req.session.me = null;

		// redirect back to login page (/session/new)
		res.redirect('/');
	}
};

