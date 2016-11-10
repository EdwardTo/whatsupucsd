
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
	var topicData = getTopicData(topicParams);
	topicData['currTopicPath'] = '/' + topicPath + '/';
	topicData['currTopicParams'] = topicParams;
	topicData['prevTopicPath'] = '/' + (topicParams.slice(0, -1)).join('/');
	console.log("Getting Topic: " + topicParams.toString());
	res.render('index', topicData);
}

exports.addModifier = function(req, res){
	var modifier = req.params.modifier;
	var topicPath = req.params[0].toString();
	var topicParams = topicPath.split('/');
	console.log("Adding Modifer " + modifier + " to " + topicParams.toString());
	var topicData = getTopicData(topicParams);
	var topicModifiers = topicData.modifiers;
	topicModifiers[modifier] += 1;
	callbackInfo = {};

	res.json(callbackInfo);
}

function getTopicData(topicParams){
	currTopicLevel = data;
	//console.log("topicParams: " + topicParams.toString() + ", length=" + topicParams.length);
	for(var i = 0; i < topicParams.length; i++){
		//console.log("i=" + i + ", param=" + topicParams[i]);
		for(var j = 0; j < currTopicLevel.topics.length; j++){
			var obj = currTopicLevel.topics[j];
			//console.log("j=" + j + ", objtitle=" + obj.title);
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
	console.log("Item" + topicParams.toString() + "not found in data");
	return {};
}

