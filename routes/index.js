
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
	console.log("topicPath: " + topicPath);
	var topicParams = topicPath.split('/');
	topicData = getTopicData(topicParams);
	topicData['currTopicPath'] = '/' + topicPath + '/';
	topicData['currTopicParams'] = topicParams;
	topicData['prevTopicPath'] = '/' + (topicParams.slice(0, -1)).join('/');
	res.render('index', topicData);
}

function getTopicData(topicParams){
	currTopicLevel = data;
	console.log("topicParams: " + topicParams + " Length: " + topicParams.length);
	for(var i = 0; i < topicParams.length; i++){
		console.log("i = " + i + ", Looking For: " + topicParams[i] + ", currTopicLevel: " + currTopicLevel.title);
		for(var j = 0; j < currTopicLevel.topics.length; j++){
			var obj = currTopicLevel.topics[j];
			console.log("j = " + j + ", objTitle:" + obj.title);
			if(obj.title == topicParams[i]){
				if(i == (topicParams.length - 1)){
					console.log(obj);
					return obj;
				}
				else{
					currTopicLevel = obj;
					console.log("Shifting to topic level: " + currTopicLevel.title);
					break;
				}	
			}
		}
	}
	return {};
}

