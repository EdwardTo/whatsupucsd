var popSize = 10000;
var overallBadge, importantBadge, unimportantBadge = 0;

$(document).ready(function(){
	
	//On modifier click, increase bubblesize if applicable, update serverside count, then increase clientside badge on callback
	$(".modifier").click(function(){
		//Update modifier badge count
		var badge = $(this).find(".badge");
		badgeCount = parseInt(badge.text(), 10) + 1;
		badge.text(badgeCount);

		overallBadge = importantBadge - unimportantBadge;
		console.log("overallBadge: " + overallBadge + " importantBadge: " + importantBadge + " unimportantBadge: " + unimportantBadge);
		//Send ajax get to update modifier count
		modifierName = $(this).attr('class').split(/\s+/)[1];
		topicPath = $(this).closest(".title").find("a").first().attr('href');
		addModifierPath = "/addModifier/" + modifierName + topicPath;
		$.get(addModifierPath, modifierCallback);
	});
});

function modifierCallback(callbackInfo){
}

function pop(){
	alert("This issue has popped!  Your support has been sent to the following places: ")
}