
/*
 * GET home page.
 */
data = require('../data.json')

exports.view = function(req, res){
	console.log(data);
  	res.render('index', data);
};

exports.topicPath = function(req, res){
	var topicPath = req.params[0].toString();
	var topicParams = topicPath.split('/');
	topicData = getTopicData(topicParams);
	topicData['currTopicPath'] = '/' + topicPath + '/';
	topicData['currTopicParams'] = topicParams;
	topicData['prevTopicPath'] = '/' + (topicParams.slice(0, -1)).join('/');
	res.render('index', topicData);
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

