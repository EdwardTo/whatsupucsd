
/*
 * GET home page.
 */
data = require('../data.json')

exports.view = function(req, res){
<<<<<<< HEAD
	console.log(data);
	var newTopic = {'title': req.query.problem, 'description': req.query.description};
=======

  	res.render('newtopic');
};

exports.submit = function(req, res){
	console.log('KJSDFKLDSJFKLSDJ req = ' + req.body.problem);
		//console.log(data);
	var newTopic = {title: req.body.problem, id:"./" + req.body.problem};//, description: req.query.description};
>>>>>>> refs/remotes/origin/master
	data.topics.push(newTopic);
	res.redirect('index');
};