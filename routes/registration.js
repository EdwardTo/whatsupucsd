
/*
 * GET home page.
 */

users = require('../users.json')


exports.view = function(req, res){
  	res.render('registration');
};

exports.submit = function(req, res){
	console.log("firstname: " + req.body.firstName + " lastName " + req.body.lastName + " email " + req.body.email + " Username " + req.body.userName + " password " + req.body.password);
	var newUser = {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, userName: req.body.userName, password: req.body.password};
	users.user.push(newUser);
	res.redirect('/tutorial');
}