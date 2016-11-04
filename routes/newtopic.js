
/*
 * GET home page.
 */
data = require('../data.json')

exports.view = function(req, res){
	console.log(data);
	var newTopic = {'title': req.query.problem, 'description': req.query.description};
  	res.render('newtopic');
};

exports.submit = function(req, res){
	var topicPath = req.body.URL;
	var topicParams = topicPath.split('/');
	topicParams.pop();
	var newTopic = {title: req.body.problem, modifiers: {important: 0, agree: 0, disagree: 0, unimportant: 0, love: 0}};
	pushTopicData(topicParams, newTopic);
	topicParams = topicParams.join('/');
	res.redirect(topicParams);
};

function pushTopicData(topicParams, newTopic){
	currTopicLevel = data;

	for(var i = 0; i < topicParams.length; i++){
		for(var j = 0; j < currTopicLevel.topics.length; j++){
			var obj = currTopicLevel.topics[j];
			if(obj.title == topicParams[i]){
				if(i == (topicParams.length - 1)){
					obj.topics.push(newTopic);
					return;
				}
				else{
					currTopicLevel = obj;
					break;
				}	
			}
		}
	}
	return {};
}

function getTopicData(topicParams){
	currTopicLevel = data;
	for(var i = 0; i < topicParams.length; i++){
		for(var j = 0; j < currTopicLevel.topics.length; j++){
			var obj = currTopicLevel.topics[j];
			if(obj.title == topicParams[i]){
				if(i == (topicParams.length - 1)){
					return obj;
				}
				else{
					currTopicLevel = obj;
					break;
				}	
			}
		}
	}
	return {};
}