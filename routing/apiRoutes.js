var friendsRoute = require ('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsRoute);
	});

	app.post('/api/friends', function(req, res){
		friendsRoute.push(req.body);
		res.json(true);
	});

	app.post('/api/clear', function(req, res){
		friendsRoute = [];

		console.log("Data cleared");
	})
}