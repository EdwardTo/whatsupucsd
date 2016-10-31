
/*
 * GET home page.
 */
data = require('../data.json')

exports.view = function(req, res){
	console.log(data);
	var newTopic = {title: req.query.problem, id:"./" + req.query.problem};//, description: req.query.description};
	data.topics.push(newTopic);
  	res.render('newtopic', data);
};