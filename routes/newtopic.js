
/*
 * GET home page.
 */
data = require('../data.json')

exports.view = function(req, res){
  	res.render('newtopic', data);
};