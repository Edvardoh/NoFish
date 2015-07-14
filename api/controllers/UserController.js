/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	/**
	* serves up the create username view
	*/
	new: function(req, res) {
		console.log('user/new'); //TODO
		res.view();
	},

	create: function(req, res, next) {
		console.log('user/create'); //TODO
		// grab params from signup form (new.ejs)
		// ensure that a null id is not passed in for new users (causes postgres to bomb)
		var params = req.params.all();
		if(params.id == null) {
			delete params.id;
		}

		// convert isadmin to boolean
		params.isadmin = params.isadmin == 'on';

		// create user with params
		User.create(params, function userCreated(err, user) {
			// if error, redirect user back to create user page and log error
			if(err) {
				console.log(err);
				req.session.flash = {
					err: err
				}

				return res.redirect('/user/new');
			}

			// store user id in the session
			req.session.me = user.id;

			return res.redirect('/');
		});
	},

	show: function(req, res, next) {
		User.findOne(req.param('id'), function foundUser(err, user) {
		console.log('user/show'); //TODO

			if(err) return next(err);
			if(!user) return next();
			// if successful, display the user profile page (show.ejs), passing in user data
			res.view({
				user: user
			});
		});
	},

	list: function(req, res, next) {
		console.log('user/list'); //TODO
		// get an array of all records in the User collection
		User.find(function foundUsers(err, users) {
			if(err) return next(err);
			// if no error, display the /users/list view

			res.view({
				users: users,
				layout: null
			});
		});
	}
};

