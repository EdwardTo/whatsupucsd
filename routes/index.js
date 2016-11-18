
/*
 * GET home page.
 */
data = require('../data.json')

exports.view = function(req, res){
    var strData = JSON.stringify(data);
    console.log(strData);
    var unescData = unescape(strData);
    var finData = JSON.parse(unescData);
  	res.render('index', finData);
};

exports.topicPath = function(req, res){
	var topicPath = escape(req.params[0].toString());
	var topicParams = topicPath.split('/');
	var topicParamsStr = JSON.stringify(topicParams);
	var topicParamsUnesc = unescape(topicParamsStr);
	var topicParamsFin = JSON.parse(topicParamsUnesc);
	var topicData = getTopicData(topicParams);

	topicData['currTopicPath'] = '/' + topicPath + '/';
	topicData['currTopicParams'] = topicParamsFin;
	topicData['prevTopicPath'] = '/' + (topicParams.slice(0, -1)).join('/');
	console.log("Getting Topic: " + topicParams.toString());
	res.render('index', topicData);
}

exports.addModifier = function(req, res){
	var modifier = req.params.modifier;
	var topicPath = req.params[0].toString();
	var topicParams = topicPath.split('/');
	//console.log("Adding Modifer " + modifier + " to " + topicParams.toString());
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
					var ob1 = JSON.stringify(obj);
					var ob2 = decodeURI(ob1);
					var obj3 = JSON.parse(ob2);
					return obj3;
				}
				else{
					currTopicLevel = obj;
					break;
				}	
			}
		}
	}
	console.log("Item " + topicParams.toString() + " not found in data");
	return {};
}

