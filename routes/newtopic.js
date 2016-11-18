
/*
 * GET home page.
 */
data = require('../data.json')

exports.view = function(req, res){
	//console.log(data);
	var newTopic = {'title': req.query.problem, 'description': req.query.description};
  	res.render('newtopic');
};

exports.submit = function(req, res){
	var topicPath = req.body.URL;
	var topicParams = topicPath.split('/');
	var topicTitle = req.body.problem;
	var titleURL = escape(topicTitle);
	console.log("topicPath: " + topicPath + " topicParams: " + topicParams.toString() + " topicTitle: " + topicTitle + " titleURL: " + titleURL);
	topicParams.shift();
	console.log("topic params: " + topicParams.toString());
	topicParams.pop();
	console.log("topicparams POPPED: " + topicParams);
	var newTopic = {title: titleURL, modifiers: {important: 0, agree: 0, disagree: 0, unimportant: 0}, topics: []};
	var user = { user: {}}
	pushTopicData(topicParams, newTopic);
	topicParams = topicParams.join('/');
	//console.log("PPPPP"+topicParams);
	res.redirect('/' + topicParams);
};

function pushTopicData(topicParams, newTopic){
	currTopicLevel = data;
	if(topicParams.length == 0){
		data.topics.push(newTopic);
	}
	else{
		for(var i = 0; i < topicParams.length; i++){
			for(var j = 0; j < currTopicLevel.topics.length; j++){
				var obj = currTopicLevel.topics[j];
				if(obj.title == topicParams[i]){
					if(i == (topicParams.length - 1)){
						console.log("PUSHING!!");
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
	}
return {};
}
