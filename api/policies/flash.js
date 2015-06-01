/**
 * flash
 *
 * @module      :: Policy
 * @description :: Policy to display flash message on validation errors
 *
 */
module.exports = function(req, res, next) {
	console.log('flash policy'); //TODO
	res.locals.flash = {};

	if(!req.session.flash) return next();

	res.locals.flash = _.clone(req.session.flash);
	console.log(res.locals.flash);

	// clear flash, and release control
	req.session.flash = {};
  	next();
};
