
/*
 * GET home page.
 */
data = require('../data.json')

exports.view = function(req, res){

  	res.render('newtopic');
};

exports.submit = function(req, res){
	console.log('KJSDFKLDSJFKLSDJ req = ' + req.body.problem);
		//console.log(data);
	var newTopic = {title: req.body.problem, id:"./" + req.body.problem};//, description: req.query.description};
	data.topics.push(newTopic);
	res.redirect('index');
};