var topicStartHeight = 300;
var subtopicStartHeight = 100;
var topicSizeDivider = 50;
var subtopicSizeDivider = 100;
var CLICKSIZEMODIFIER = 20;
var popSize = 10000;

$(document).ready(function(){
	
	//Vary bubble circumference by nYesses
	$(".topic").each(function( i ) {
		var topicCirc = (topicStartHeight + (parseInt($(this).find(".title .modifier.important").text(), 10) / topicSizeDivider ));
		$(this).css({ 'height': topicCirc + "px", 'width': topicCirc + "px" });
		//Resize subtopic bubbles
		$(this).find(".subtopic").each(function( j ){
			var subtopicCirc = (subtopicStartHeight + (parseInt($(this).find(".badge").text(), 10) / subtopicSizeDivider ));
			$(this).css({ 'height': subtopicCirc + "px", 'width': subtopicCirc + "px" });
		});
	});

	//On modifier click, increase bubblesize if applicable, update serverside count, then increase clientside badge on callback
	$(".modifier").click(function(){
		var badge = $(this).find(".badge");
		badgeCount = parseInt(badge.text(), 10) + 1;
		badge.text(badgeCount);

		if($(this).hasClass("important")){
			clickSizeModifier = CLICKSIZEMODIFIER;
			if(badgeCount >= popSize){
				pop();
			}
		} else if($(this).hasClass("unimportant")){
			clickSizeModifier = -1 * CLICKSIZEMODIFIER;
		} else{
			clickSizeModifier = 0;
		}
		var bubble = $(this).closest(".topic");
		var newCirc = parseInt(bubble.css("width"), 10) + clickSizeModifier;
		bubble.css({ 'height': newCirc + "px", 'width': newCirc + "px"});

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