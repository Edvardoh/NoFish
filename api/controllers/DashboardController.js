/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	show: function(req, res, next) {
		console.log('dashboard/show'); //TODO

		var userId = req.params.id;

		// construct feed
		//TODO dummy data
		var feedJson = [{
			cardType: 'event',
			cardHeader: 'Front Door Locked',
			cardDescription: new Date(2015, 3, 1, 17, 0, 20),
			eventData: {
				system: 'vera',
				deviceType: 'door-lock',
				deviceId: 111,
				deviceName: 'Front Door Deadbolt',
				locked: true,
				userCode: null,
				userName: null,
				eventDateTime: new Date(2015, 3, 1, 17, 0, 20) //April fools day!
			}
		},{
			cardType: 'event',
			cardHeader: 'Borat Unlocked the Front Door',
			cardDescription: new Date(2015, 3, 1, 17),
			eventData: {
				system: 'vera',
				deviceType: 'door-lock',
				deviceId: 111,
				deviceName: 'Front Door Deadbolt',
				locked: false,
				userCode: 1212,
				userName: 'Borat',
				eventDateTime: new Date(2015, 3, 1, 17) //April fools day!
			}
		},{
			cardType: 'thread',
			cardHeader: 'AirBnB Conversation with Borat',
			cardDescription: '<div class="ui list">' + //TODO were going to have to loop through and build out html in the ejs file using a conditional for when we have a thread
								'<div class="item">' +
									'<div class="header">' +
										'Borat' + new Date(2015, 2, 31) +
									'</div>' +
										'Lalalalala, my name a Borat! I like AirBnB!' +
								'</div>' +
							'</div>' +
							'<div class="ui list">' +
								'<div class="item">' +
									'<div class="header">' +
										'Scott & Ed' + new Date(2015, 2, 30) +
									'</div>' +
										'Hey there Borat, you are from Kazakstan?! Very nice =D' +
								'</div>' +
							'</div>',
			threadData: {
				system: 'airbnb',
				thread: [{
					author: 'Borat',
					role: 'guest',
					dateTime: new Date(2015, 2, 31),
					text: 'Lalalalala, my name a Borat! I like AirBnB!'
				},{
					author: 'Scott & Ed',
					role: 'host',
					dateTime: new Date(2015, 2, 30),
					text: 'Hey there Borat, you are from Kazakstan?! Very nice =D'
				}]
			}
		}];

		console.log(userId);

		// display dashboard view 
		res.view('dashboard', {
			user: {
				id: userId
			},
			feed: feedJson
		});
	}
	
};

