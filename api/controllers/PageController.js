/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	showHomePage: function(req, res) {
		console.log(req.session.me);
		if(!req.session.me) {
			return res.view('main');
		}

		User.findOne(req.session.me, function(err, user) {
			console.log(err);
			if(err) {
				return res.negotiate(err);
			}

			if(!user) {
				sails.log.verbose('Session refers to a user that no longer exists.');
				return res.view('main');
			}
			console.log(user.id);
			return res.view('dashboard',{ //TODO the first arg is meaningless, since the dashboard layout doesn't inject a view into it..
				me: {
					id: user.id,
					name: user.name,
					isAdmin: user.isAdmin
				},
				layout: 'dashboard'
			});
		});
	}

};

